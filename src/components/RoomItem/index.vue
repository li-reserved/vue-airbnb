<script setup lang="ts">
import type { PriceItem } from '@/types/home'
import { computed } from 'vue'
// import { useVMdel } from '@/composable/index'
const { itemData, itemWidth = 25 } = defineProps<{
  itemData: PriceItem
  itemWidth?: number
}>()

// const emit = defineEmits<{
//   (e: 'update:itemData', v: object): void
// }>()

// const itemData = useVMdel(props, 'itemData', emit)
const star = computed(() => itemData.star_rating || 4.5)
</script>

<template>
  <div class="room-page" :style="{ width: `${itemWidth}%` }">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.picture_url" alt="" />
      </div>
      <div
        class="desc"
        :style="{ color: itemData.verify_info.text_color || '#39576a' }"
      >
        {{ itemData.verify_info.messages.join('·') }}
      </div>
      <div class="name">{{ itemData.name }}</div>
      <div class="price">{{ itemData.price_format }}/晚</div>
      <div class="bottom">
        <el-rate v-model="star" disabled />
        <span class="count">{{ itemData.reviews_count }}</span>
        <span
          class="extra"
          :style="{ color: itemData.bottom_info?.content_color || '#39576a' }"
          >·{{ itemData.bottom_info?.content || '好房优选' }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.room-page {
  box-sizing: border-box;
  // width: 25%;
  padding: 8px;
  margin: 8px 0;
  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    // color: #000;
    background-color: #ebebeb;
    border-radius: 4px;
    padding: 1px 2px;
    display: inline-block;
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    .count {
      margin: 0 2px 0 4px;
    }
    .extra {
      margin-right: -3px;
    }
  }

  ::v-deep() {
    .el-rate {
      height: auto;
    }
    .el-rate__icon {
      font-size: 12px;
      margin-right: -1px;
      color: #00848a;
    }
  }
}
</style>
