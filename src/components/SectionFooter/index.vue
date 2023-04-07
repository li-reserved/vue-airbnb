<script setup lang="ts">
import ArrowRightIcon from '@/icons/arrow-right-icon.vue'
import { useRouter } from 'vue-router'
defineProps<{
  name?: string
}>()

const router = useRouter()
</script>

<template>
  <div class="section-footer-page">
    <div
      class="info"
      @click="() => router.push('/entire')"
      :style="{ color: name ? '#00848a' : '#000' }"
    >
      <div class="text">{{ name ? `查看更多${name}房源` : '显示全部' }}</div>
      <arrow-right-icon />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-footer-page {
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    :hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
}
</style>
