<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="section-header">
    <h2 class="header-title">{{ title }}</h2>
    <div class="header-subtitle" v-if="subtitle">{{ subtitle }}</div>
  </div>
</template>

<style lang="scss" scoped>
.section-header {
  .header-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .header-subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }
}
</style>
