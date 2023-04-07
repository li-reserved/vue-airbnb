<script setup lang="ts">
import LogoIcon from '@/icons/logo-icon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="left-page">
    <logo-icon @click="() => router.push('/home')" />
  </div>
</template>

<style lang="scss" scoped>
.left-page {
  flex: 1;
  svg {
    cursor: pointer;
    color: var(--bnb-primary);
  }
}
</style>
