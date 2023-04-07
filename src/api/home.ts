import { request } from '@/utils/request'

import type { GoodPrice, Discount, LongFor } from '@/types/home'

export const getGoodPriceInfo = () => request<GoodPrice>('/home/goodprice')

export const getHomeHighScroeApi = () => request<GoodPrice>('/home/highscore')

export const getHomeDiscountApi = () => request<Discount>('/home/discount')

export const getHomeRecommendApi = () =>
  request<Discount>('/home/hotrecommenddest')

export const getHomeLongforApi = () => request<LongFor>('/home/longfor')

export const getHomePlusDataApi = () => request<GoodPrice>('/home/plus')
