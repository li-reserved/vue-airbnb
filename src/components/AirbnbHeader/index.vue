<template>
  <div :class="[{ isheight: isFixed }, { isAlpha: isAlpha }, 'app-header']">
    <div :class="[isFixed ? 'fixed' : { fixed: y >= 59 }, 'air-header']">
      <div class="content">
        <div class="top">
          <header-left />
          <!-- :isAlpha="isAlpha" -->
          <header-content
            :currentSearch="isAlpha || currentSearch"
            @searchHandle="searchHandle"
          />
          <header-right />
        </div>
        <div :class="[{ isSearch: currentSearch }, 'search']"></div>
      </div>
      <div
        class="cover"
        v-if="currentSearch"
        @click="() => (currentSearch = false)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'

import HeaderLeft from './components/HeaderLeft.vue'
import HeaderContent from './components/HeaderContent.vue'
import HeaderRight from './components/HeaderRight.vue'
import { useWindowScroll } from '@/composable/index'

const scrollHeight = ref(0)
const currentSearch = ref(false)
const route = useRoute()
const { y } = useWindowScroll()
// 是否顶部透明
const isAlpha = computed(() => route.meta.topAlpha && y.value === 0)

// 是否展示apptitle
const isFixed = computed(() => route.meta.isFixed)

watch(y, () => {
  if (currentSearch.value) {
    if (Math.abs(y.value - scrollHeight.value) > 30) {
      currentSearch.value = false
    }
  } else {
    scrollHeight.value = y.value
  }
})

const searchHandle = () => {
  currentSearch.value = !currentSearch.value
}
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  height: 80px;
  &.isheight {
    height: 0 !important;
  }
  &.isAlpha {
    .content {
      background-color: rgba(255, 255, 255, 0);
    }
    .air-header {
      border: none;
    }
    ::v-deep() {
      .left-page {
        > svg {
          color: #fff;
        }
      }
      .btn {
        > span {
          &:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
      .searchtabs {
        color: #fff !important;
      }
      .search-item.active .search-content {
        color: #fff !important;
      }
      .line {
        background-color: #fff !important;
      }
      .right-page {
        color: #fff;
      }
      .profile {
        svg {
          color: #fff;
        }
      }
    }
  }

  .air-header {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 80px;
    border-bottom: 1px solid #dce0e0;
    &.fixed {
      position: fixed;
      top: 0;
      height: auto;
      bottom: auto;
      z-index: 29;
    }
  }
  .content {
    position: relative;
    z-index: 11;
    background-color: rgba(255, 255, 255, 1);
    transition: all 250ms ease;
    .top {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 80px;
      padding: 0 24px;
    }
    .search {
      height: 0;
      transition: height 250ms ease;
    }
    .isSearch {
      height: 100px !important;
    }
  }
  .cover {
    position: fixed;
    inset: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>
