<script setup lang="ts">
import { onMounted, computed } from 'vue'
import HomeBanner from './components/HomeBanner.vue'
import { useHomeStore } from '@/store/modules/home'
import HomeSectionV1 from './components/HomeSectionV1.vue'
import HomeSectionV2 from './components/HomeSectionV2.vue'
import HomeSectionV3 from './components/HomeSectionV3.vue'
import HomeLongfor from './components/HomeLongfor.vue'

const store = useHomeStore()

onMounted(async () => {
  store.allFeatAction()
})

const goodPrice = computed(() => store.goodPrice)
const highscore = computed(() => store.highscore)
const discount = computed(() => store.discount)
const recommend = computed(() => store.recommend)
const longfor = computed(() => store.longfor)
const plusinfor = computed(() => store.plusinfo)
</script>

<template>
  <div class="home-page">
    <home-banner />
    <div class="content">
      <home-section-v2 v-if="discount" :infoData="discount" />
      <home-section-v2 v-if="recommend" :infoData="recommend" />
      <home-longfor v-if="longfor" :infoData="longfor" />
      <home-section-v1 v-if="goodPrice" :infoData="goodPrice" />
      <home-section-v1 v-if="highscore" :infoData="highscore" />
      <home-section-v3 v-if="plusinfor" :infoData="plusinfor" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 1032px;
  margin: 0 auto;
  > div {
    margin-top: 30px;
  }
}
</style>
