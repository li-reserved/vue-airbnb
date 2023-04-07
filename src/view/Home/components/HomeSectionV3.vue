<script setup lang="ts">
import type { GoodPrice } from '@/types/home'
defineProps<{
  infoData: GoodPrice
}>()
</script>

<template>
  <div class="seaction-v3">
    <section-header :title="infoData.title" :subtitle="infoData.subtitle" />
    <ScrollView>
      <template v-for="(item, index) in infoData.list" :key="index">
        <RoomItem :itemWidth="20" :itemData="infoData.list[index]" />
      </template>
    </ScrollView>
    <section-footer name="Plus" />
  </div>
</template>

<style scoped></style>
