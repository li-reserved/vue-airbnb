<script setup lang="ts">
import { watch, ref } from 'vue'

const slotRef = ref<HTMLDivElement | null>(null)

const { selectIndex } = defineProps<{
  selectIndex: number
}>()

watch(
  () => {
    return selectIndex
  },
  (value) => {
    const selectitemEL = slotRef.value!.children[value] as HTMLDivElement
    const offsetLeft = selectitemEL.offsetLeft
    const clientWidth = selectitemEL.clientWidth
    const slotWidth = slotRef.value!.clientWidth
    const slotScroll = slotRef.value!.scrollWidth
    let distance = offsetLeft + clientWidth * 0.5 - slotWidth * 0.5
    // 当为负数时，表示不需要移动
    if (distance < 0) distance = 0
    // 右边处理最大可以移动
    const totalDistance = slotScroll - slotWidth
    if (distance > totalDistance) distance = totalDistance
    ;(
      slotRef.value as HTMLDivElement
    ).style.transform = `translate(${-distance}px)`
  }
)
</script>

<template>
  <div class="indicator-page">
    <div class="indicator-slot" ref="slotRef">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.indicator-page {
  overflow: hidden;
  .indicator-slot {
    display: flex;
    position: relative;
    transition: transform 250ms ease;
    ::v-deep() {
      > * {
        flex-shrink: 0;
      }
    }
  }
}
</style>
