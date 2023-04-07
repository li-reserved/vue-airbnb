<script setup lang="ts">
import searchIcon from '@/icons/search-icon.vue'
</script>

<template>
  <div class="content-page">
    <span class="search">搜索房源和体验</span>
    <div class="search-icon">
      <search-icon />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-page {
  width: 300px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 24px;
  display: flex;
  align-items: center;
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
</style>
