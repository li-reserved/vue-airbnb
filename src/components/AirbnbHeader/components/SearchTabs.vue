<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  tabs: Array<string>
}>()

const currentIndex = ref(0)
function currentIndexhandle(num: number) {
  currentIndex.value = num
  emit('currentHandle', num)
}
const emit = defineEmits<{
  (e: 'currentHandle', v: number): void
}>()
</script>

<template>
  <div class="searchtabs">
    <template v-for="(item, i) in tabs" :key="item">
      <div
        @click="() => currentIndexhandle(i)"
        :class="[{ active: i === currentIndex }, 'search-item']"
      >
        <span class="search-content">{{ item }}</span>
        <span class="line"></span>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.searchtabs {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  .search-item {
    font-size: 16px;
    font-weight: 400;
    margin: 10px 16px;
    &.active {
      .search-content {
        color: #222;
      }
      .line {
        transform: scaleX(1);
        background: #222;
      }
    }
    &:hover {
      .line {
        background: #a1a1a1;
        transform: scaleX(1);
      }
      .search-content {
        color: #a1a1a1;
      }
    }
    .search-content {
      padding: 10px 0;
      cursor: pointer;
    }
    .line {
      display: block;
      height: 2px;
      position: relative;
      top: 10px;
      background: #a1a1a1;
      transform: scaleX(0);
      transition: transform 200ms ease;
    }
  }
}
</style>
