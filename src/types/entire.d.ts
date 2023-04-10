import type { PriceItem } from './home'

export type EntireList = {
  list: EntireItem[]
  totalCount: number
}

export type EntireItem = PriceItem & {
  picture_urls?: string[]
  _id?: string
}
