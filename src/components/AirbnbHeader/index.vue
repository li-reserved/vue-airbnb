<template>
  <div class="air-header">
    <header-left />
    <header-content />
    <header-right />
  </div>
</template>

<script setup lang="ts">
import HeaderLeft from './components/HeaderLeft.vue'
import HeaderContent from './components/HeaderContent.vue'
import HeaderRight from './components/HeaderRight.vue'
</script>

<style lang="scss" scoped>
.air-header {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  border-bottom: 1px solid #dce0e0;
}
</style>
