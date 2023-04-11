<script setup lang="ts">
import { computed, ref } from 'vue'
import searchTitles from '@/assets/data/search_titles.json'
import searchIcon from '@/icons/search-icon.vue'
import SearchTabs from './SearchTabs.vue'
import SearchSections from './SearchSections.vue'

defineProps<{
  currentSearch: boolean
}>()
// isAlpha: boolean

const emit = defineEmits<{
  (e: 'searchHandle'): void
}>()

const currentIndex = ref(0)
const currentChange = (num: number) => {
  currentIndex.value = num
}
const tabs = computed(() => searchTitles.map((e) => e.title))

const searchHandle = () => {
  emit('searchHandle')
}
</script>

<template>
  <div class="header-trans">
    <Transition name="top">
      <div class="content-page" v-if="!currentSearch" @click="searchHandle">
        <span class="search">搜索房源和体验</span>
        <div class="search-icon">
          <search-icon />
        </div>
      </div>
    </Transition>

    <Transition name="bottom">
      <div class="search-detail" v-if="currentSearch">
        <search-tabs :tabs="tabs" @currentHandle="currentChange" />
        <div class="infos">
          <SearchSections
            :search-info="searchTitles[currentIndex].searchInfos"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.header-trans {
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
}
.content-page {
  position: absolute;
  display: flex;
  align-items: center;
  width: 300px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding-left: 8px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: var(--bnb-shadow);
  &:hover {
    box-shadow: var(--bnb-hover);
  }
  .search {
    padding: 0 16px;
    flex: 1;
    color: var(--bnb-text3);
    font-weight: 600;
  }
  .search-icon {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: var(--bnb-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 7px 7px 7px 0px;
  }
}

.top-enter-active {
  transform: scale(2.85714, 1.375) translateY(58px);
  opacity: 0;
}
.top-enter-to {
  transform: scale(1) translateY(0);
  opacity: 1;
  transition: all 250ms ease;
}

.top-leave-enter {
  opacity: 0;
}

.bottom-enter-active {
  transform: scale(0.35, 0.727273) translateY(-58px);
  opacity: 0;
}

.bottom-enter-to {
  transform: scale(1) translateY(0);
  opacity: 1;
  transition: all 250ms ease;
}

.bottom-leave-active {
  transform: scale(1) translateY(0);
  opacity: 1;
}

.bottom-leave-to {
  transition: all 250ms ease;
  transform: scale(0.35, 0.727273) translateY(-58px);
  opacity: 0;
}

.search-detail {
  position: relative;
  transform-origin: 50% 0;
  will-change: transform, opacity;
  .infos {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
