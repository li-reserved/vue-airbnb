<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { EntireItem } from '@/types/entire'
import { useEntireStore } from '@/store/modules/entire'
import { useDetailStore } from '@/store/modules/detail'

const store = useEntireStore()
const detailStore = useDetailStore()
const roolList = computed(() => store.roomList)
const total = computed(() => store.totalcount)
const isloading = computed(() => store.isloading)

const router = useRouter()
function itemclick(value: EntireItem) {
  detailStore.setDetail(value)
  router.push('/detail')
}
</script>

<template>
  <div class="entire-room">
    <h2 class="title">共{{ total }}处住所</h2>
    <div class="entire-room-content">
      <room-item
        v-for="item in roolList"
        :key="item._id"
        :item-data="item"
        :item-width="20"
        @itemclick="itemclick"
      />
    </div>
    <div class="cover" v-if="isloading"></div>
  </div>
</template>

<style lang="scss" scoped>
.entire-room {
  padding: 30px 80px;
  position: relative;
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-top: 10px;
  }
  &-content {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }
}
</style>
