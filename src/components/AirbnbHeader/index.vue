<template>
  <div class="air-header">
    <div
      :class="[route.meta.apptitle ? { fixed: y >= 59 } : 'fixed', 'content']"
    >
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
import { useRoute } from 'vue-router'

const route = useRoute()
const { y } = useWindowScroll()
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
