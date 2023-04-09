<template>
  <div>detail</div>
</template>

<script setup lang="ts">
import { useDetailStore } from '@/store/modules/detail'
import { computed } from 'vue'

const store = useDetailStore()

const detailItem = computed(() => store.detail)
console.log(detailItem)
</script>

<style scoped></style>
