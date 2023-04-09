<script setup lang="ts">
import { ref } from 'vue'
const selectIndex = ref(0)
const elRef = ref<HTMLDivElement | null>(null)
const names = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function toggleclickHandle(isright: boolean) {
  let newIndex = selectIndex.value
  isright ? (newIndex += 1) : (newIndex -= 1)
  if (newIndex < 0) newIndex = names.length - 1
  if (newIndex > names.length - 1) newIndex = 0
  selectIndex.value = newIndex
  // console.log(elRef.value?.clientWidth)
}
</script>

<template>
  <div class="demo">
    <div class="control">
      <button @click="() => toggleclickHandle(false)">上一个</button>
      <button @click="() => toggleclickHandle(true)">下一个</button>
    </div>
    <div class="list" ref="elRef">
      <Indicator :selectIndex="selectIndex">
        <div v-for="item in names" :key="item" class="item">
          {{ item }}
        </div>
      </Indicator>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  width: 550px;
  border: 1px solid red;
}
.item {
  height: 30px;
  width: 100px;
  background-color: aqua;
  margin: 0 8px;
}
</style>
