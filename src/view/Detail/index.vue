<template>
  <div class="detail-page">
    <DetailPic v-if="detailItem" :detail-item="detailItem" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDetailStore } from '@/store/modules/detail'
import DetailPic from './components/DetailPic.vue'

const store = useDetailStore()
const detailItem = computed(() => store.detail)
</script>

<style lang="scss" scoped></style>
