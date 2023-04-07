<script setup lang="ts">
import type { LongFor } from '@/types/home'
defineProps<{
  infoData: LongFor
}>()
</script>

<template>
  <div class="longfor-page">
    <section-header :title="infoData.title" :subtitle="infoData.subtitle" />
    <div class="longfor-list">
      <scroll-view>
        <template v-for="(item, index) in infoData.list" :key="item.city">
          <longfor-item :item-data="infoData.list[index]" />
        </template>
      </scroll-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.longfor-page {
  margin-top: 30px;
  .longfor-list {
    display: flex;
    margin: 0 -8px;
  }
}
</style>
