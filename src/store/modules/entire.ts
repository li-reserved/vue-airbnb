import { getEntireRoomList } from '@/api/entire'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { EntireItem } from '@/types/entire'

export const useEntireStore = defineStore('entire', () => {
  const currentPage = ref(0)
  const roomList = ref<EntireItem[]>()
  const totalcount = ref(0)

  const setCurrentPage = (page: number) => {
    currentPage.value = page
    fetchRoomListAction()
  }

  const fetchRoomListAction = async () => {
    const res = await getEntireRoomList(currentPage.value * 20)
    roomList.value = res.list
    totalcount.value = res.totalCount
  }

  return {
    currentPage,
    roomList,
    totalcount,
    setCurrentPage,
    fetchRoomListAction
  }
})
