<template>
  <div class="entire-page">
    <entire-filter />
    <entire-room />
    <entire-pagination />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import EntireFilter from './components/EntireFIlter.vue'
import EntireRoom from './components/EntireRoom.vue'
import EntirePagination from './components/EntirePagination.vue'
import { useEntireStore } from '@/store/modules/entire'

const store = useEntireStore()
onMounted(() => {
  store.fetchRoomListAction()
})
</script>

<style lang="scss" scoped></style>
