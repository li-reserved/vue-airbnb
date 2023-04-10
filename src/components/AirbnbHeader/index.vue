<template>
  <div class="air-header">
    <div class="content" :class="[{ fixed: y >= (ishome ? 0 : 59) }]">
      <header-left />
      <header-content />
      <header-right />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLeft from './components/HeaderLeft.vue'
import HeaderContent from './components/HeaderContent.vue'
import HeaderRight from './components/HeaderRight.vue'
import { useWindowScroll } from '@/composable/index'
import { useRouter } from 'vue-router'

const { y } = useWindowScroll()
const router = useRouter()

const ishome = router.currentRoute.value.fullPath === '/home'
console.log(ishome)
</script>

<style lang="scss" scoped>
.air-header {
  position: relative;
  height: 80px;
  > .content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding: 0 24px;
    background-color: #fff;
    box-sizing: border-box;
    border-bottom: 1px solid #dce0e0;
    &.fixed {
      position: fixed;
      top: 0;
      height: 80px;
      bottom: auto;
      z-index: 29;
    }
  }
}
</style>
