<script setup lang="ts">
import { useEntireStore } from '@/store/modules/entire'
import { computed } from 'vue'

const store = useEntireStore()
const roolList = computed(() => store.roomList)
const total = computed(() => store.totalcount)
</script>

<template>
  <div class="entire-room">
    <h2 class="title">共{{ total }}处住所</h2>
    <div class="entire-room-content">
      <room-item
        v-for="item in roolList"
        :key="item.id"
        :item-data="item"
        :item-width="20"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entire-room {
  padding: 30px 80px;
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-top: 10px;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
