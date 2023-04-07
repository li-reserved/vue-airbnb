<script setup lang="ts">
import { ref } from 'vue'
import filterData from '@/assets/data/filyer_data.json'

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
    <div
      v-for="item in filterData"
      :key="item"
      :class="[{ active: current.includes(item) }, 'btn']"
      @click="() => itemclickHandle(item)"
    >
      {{ item }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-page {
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
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
