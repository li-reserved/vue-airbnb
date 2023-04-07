<script setup lang="ts">
import { ref } from 'vue'

const { tabNames = [] } = defineProps<{
  tabNames: string[]
}>()

const emit = defineEmits<{
  (e: 'tabclick', val: number, name: string): void
}>()

const currentIndex = ref(0)
const itemClickHandle = (index: number, name: string) => {
  currentIndex.value = index
  emit('tabclick', index, name)
}
</script>

<template>
  <div class="tab-page">
    <scroll-view>
      <div
        v-for="(item, index) in tabNames"
        :key="item"
        :class="[{ active: index === currentIndex }, 'item']"
        @click="() => itemClickHandle(index, item)"
      >
        {{ item }}
      </div>
    </scroll-view>
  </div>
</template>

<style lang="scss" scoped>
.tab-page {
  // display: flex;
  .item {
    box-sizing: border-box;
    flex-basis: 120px; //当flex的时候最小宽度
    flex-shrink: 0; //不换行
    padding: 12px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap; // 规定段落中的文本不进行换行
    cursor: pointer;
    transition: box-shadow 250ms ease;
    &:hover {
      box-shadow: var(--bnb-hover);
    }
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #fff;
      background-color: var(--bnb-secondary);
    }
  }
}
</style>
