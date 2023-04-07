<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import ArrowLeftIcon from '@/icons/arrow-left-icon.vue'
import ArrowRightIcon from '@/icons/arrow-right-icon.vue'

const elRef = ref<Element | null>(null)
const showLeft = ref(false)
const showRight = ref(false)
const currentIndex = ref(0)
// 可以滚动的距离
const totalDistance = ref(0)

function clickbtnHandle(isright: boolean) {
  isright ? (currentIndex.value += 1) : (currentIndex.value -= 1)
  // currentIndex.value += 1
  const el = elRef.value?.children[currentIndex.value]
  const offset = (el as HTMLDivElement).offsetLeft
  ;(elRef.value as HTMLDivElement).style.transform = `translate(-${offset}px)`
  showRight.value = totalDistance.value > offset
  showLeft.value = offset > 0
  // console.log(offset, totalDistance.value)
}

onMounted(() => {
  //一共可以滚动的宽度
  const scrollWidth = elRef.value!.scrollWidth
  //   本身占据的宽度
  const clientWidth = elRef.value!.clientWidth
  totalDistance.value = scrollWidth - clientWidth
  showRight.value = totalDistance.value > 0
  //   console.log(scrollWidth, clientWidth, distance)
})
</script>

<template>
  <div class="scroll-page">
    <div
      v-if="showLeft"
      class="page-left control"
      @click="() => clickbtnHandle(false)"
    >
      <arrow-left-icon />
    </div>
    <div
      v-if="showRight"
      class="page-right control"
      @click="() => clickbtnHandle(true)"
    >
      <arrow-right-icon />
    </div>

    <div class="scroll">
      <div class="scroll-slot" ref="elRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-page {
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
    .scroll-slot {
      display: flex;
      white-space: nowrap;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    transform: translate(0, -50%);
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      box-shadow: var(--bnb-hover);
    }
  }
  .page-left {
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .page-right {
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
  }
}
</style>
