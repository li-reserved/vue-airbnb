<script setup lang="ts">
import type { PriceItem } from '@/types/home'

defineProps<{
  roomList: Array<PriceItem>
  itemWidth?: number
}>()
</script>

<template>
  <div class="room-list">
    <template v-for="(item, index) in roomList.slice(0, 8)" :key="item.id">
      <room-item :itemWidth="itemWidth" :itemData="roomList[index]" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
</style>
