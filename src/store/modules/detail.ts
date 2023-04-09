import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { EntireItem } from '@/types/entire'

export const useDetailStore = defineStore(
  'detail',
  () => {
    const detail = ref<EntireItem>()

    const setDetail = (item: EntireItem) => {
      detail.value = item
    }

    return { detail, setDetail }
  },
  {
    persist: true
  }
)
