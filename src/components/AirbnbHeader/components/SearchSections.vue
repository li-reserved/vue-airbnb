<script setup lang="ts">
import searchIcon from '@/icons/search-icon.vue'
defineProps<{
  searchInfo: Array<{ title: string; desc: string }>
}>()
</script>

<template>
  <div class="search-section">
    <template v-for="(item, i) in searchInfo" :key="item.title">
      <div class="search-content">
        <div class="title">{{ item.title }}</div>
        <div :class="[{ global: i === 0 && searchInfo.length >= 3 }, 'desc']">
          {{ item.desc }}
        </div>
        <div class="icon_search" v-if="i === searchInfo.length - 1">
          <search-icon :size="16" />
        </div>
      </div>
      <div v-if="i !== searchInfo.length - 1" class="line"></div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.search-section {
  display: flex;
  height: 66px;
  width: 850px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 32px;
  .search-content {
    &:hover {
      background: #ebebeb;
      border-radius: 32px;
    }
  }
  .search-content {
    flex: 1;
    padding: 15px 32px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    .title {
      font-size: 12px;
      margin-bottom: 4px;
    }
    .global {
      font-weight: 600 !important;
      color: #222 !important;
    }
    .desc {
      font-weight: 500;
      color: #717171;
    }
    .icon_search {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      width: 48px;
      background: #ff385c;
      border-radius: 50%;
      color: #fff;
    }
  }
  .line {
    border-right: 1px solid #ddd;
    align-self: center;
    height: 32px;
  }
}
</style>
