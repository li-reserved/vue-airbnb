import { getEntireRoomList } from '@/api/entire'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { EntireItem } from '@/types/entire'

export const useEntireStore = defineStore('entire', () => {
  const currentPage = ref(0)
  const roomList = ref<EntireItem[]>()
  const totalcount = ref(0)
  const isloading = ref(false)

  const setCurrentPage = async (page: number) => {
    currentPage.value = page
    await fetchRoomListAction()
  }

  const fetchRoomListAction = async () => {
    isloading.value = true
    const res = await getEntireRoomList(currentPage.value * 20)
    isloading.value = false
    roomList.value = res.list
    totalcount.value = res.totalCount
  }

  return {
    currentPage,
    roomList,
    totalcount,
    isloading,
    setCurrentPage,
    fetchRoomListAction
  }
})
