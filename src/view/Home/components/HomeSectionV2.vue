<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Discount } from '@/types/home'

const { infoData } = defineProps<{
  infoData: Discount
}>()

function tabclickHandle(index: number, name: string) {
  el.value = name
}
const tabnames = computed(() => infoData.dest_address.map((e) => e.name))
const el = ref(tabnames.value[0])
</script>

<template>
  <div class="section-v2-page">
    <section-header :title="infoData.title" :subtitle="infoData.subtitle" />
    <section-tabs :tabNames="tabnames" @tabclick="tabclickHandle" />
    <section-rooms :itemWidth="33.33" :roomList="infoData.dest_list[el]" />
    <section-footer :name="el" />
  </div>
</template>

<style scoped>
.section-v2-page {
  margin-top: 30px;
}
</style>
