<script setup lang="ts">
import { ref } from 'vue'
import filterData from '@/assets/data/filyer_data.json'
import { useWindowScroll } from '@/composable/index'

const { y } = useWindowScroll()

const current = ref<string[]>([''])
function itemclickHandle(name: string) {
  const items = [...current.value]
  if (items.includes(name)) {
    const itemIndex = items.findIndex((e) => e === name)
    items.splice(itemIndex, 1)
  } else {
    items.push(name)
  }
  current.value = [...items]
}
</script>

<template>
  <div class="filter-page">
    <div class="content" :class="[{ fixed: y >= 210 }]">
      <div
        v-for="item in filterData"
        :key="item"
        :class="[{ active: current.includes(item) }, 'btn']"
        @click="() => itemclickHandle(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-page {
  position: relative;
  top: 0;
  height: 48px;
  > .content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;
    &.fixed {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      height: 48px;
      z-index: 19;
    }
  }

  .btn {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    border-radius: 4px;
    color: #484848;
    cursor: pointer;
    &.active {
      background-color: #008489;
      border: 1px solid #008489;
      color: #fff;
    }
  }
}
</style>
