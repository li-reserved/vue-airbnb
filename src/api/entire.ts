import { request } from '@/utils/request'
import type { EntireList } from '@/types/entire'

export const getEntireRoomList = (offset: number = 0, size: number = 20) =>
  request<EntireList>('/entire/list', 'GET', { offset, size })
