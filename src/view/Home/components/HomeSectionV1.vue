<script setup lang="ts">
import type { GoodPrice } from '@/types/home'
defineProps<{
  infoData: GoodPrice
}>()
</script>

<template>
  <div class="section-v1">
    <section-header :title="infoData.title" :subtitle="infoData.subtitle" />
    <section-rooms :roomList="infoData.list" />
    <section-footer />
  </div>
</template>

<style scoped>
.section-v1 {
  margin-top: 30px;
}
</style>
