<script setup lang="ts">
import LogoIcon from '@/icons/logo-icon.vue'
</script>

<template>
  <div class="left-page">
    <logo-icon />
  </div>
</template>

<style lang="scss" scoped>
.left-page {
  flex: 1;
  svg {
    color: var(--bnb-primary);
  }
}
</style>
