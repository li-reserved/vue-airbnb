import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Discount, GoodPrice, LongFor } from '@/types/home'
import {
  getGoodPriceInfo,
  getHomeHighScroeApi,
  getHomeDiscountApi,
  getHomeRecommendApi,
  getHomeLongforApi,
  getHomePlusDataApi
} from '@/api/home'

export const useHomeStore = defineStore('home', () => {
  const goodPrice = ref<GoodPrice>()
  const highscore = ref<GoodPrice>()
  const discount = ref<Discount>()
  const recommend = ref<Discount>()
  const longfor = ref<LongFor>()
  const plusinfo = ref<GoodPrice>()

  const setGoodPrice = (price: GoodPrice) => {
    goodPrice.value = price
  }
  const setHighScore = (score: GoodPrice) => {
    highscore.value = score
  }
  const setDiscount = (dis: Discount) => {
    discount.value = dis
  }
  const setRecommend = (commend: Discount) => {
    recommend.value = commend
  }
  const setLongfor = (long: LongFor) => {
    longfor.value = long
  }
  const setPlusInfo = (plus: GoodPrice) => {
    plusinfo.value = plus
  }

  const featchGoodPrice = async () => {
    const res = await getGoodPriceInfo()
    setGoodPrice(res)
  }
  const featHomeHighScroe = async () => {
    const res = await getHomeHighScroeApi()
    setHighScore(res)
  }
  const featHomeDiscount = async () => {
    const res = await getHomeDiscountApi()
    setDiscount(res)
  }
  const featchRecommend = async () => {
    const res = await getHomeRecommendApi()
    setRecommend(res)
  }
  const featchLongfor = async () => {
    const res = await getHomeLongforApi()
    setLongfor(res)
  }
  const featchPlus = async () => {
    const res = await getHomePlusDataApi()
    setPlusInfo(res)
  }

  const allFeatAction = () => {
    featHomeDiscount()
    featchRecommend()
    featHomeHighScroe()
    featchGoodPrice()
    featchLongfor()
    featchPlus()
  }

  return {
    goodPrice,
    highscore,
    discount,
    recommend,
    longfor,
    plusinfo,
    allFeatAction
  }
})
