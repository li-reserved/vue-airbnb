<script setup lang="ts">
import type { EntireItem } from '@/types/entire'
import { computed } from 'vue'
import ArrowLeftIcon from '@/icons/arrow-left-icon.vue'
import ArrowRightIcon from '@/icons/arrow-right-icon.vue'
const { itemData, itemWidth = 25 } = defineProps<{
  itemData: EntireItem
  itemWidth?: number
}>()

const star = computed(() => itemData.star_rating || 4.5)
</script>

<template>
  <div class="room-page" :style="{ width: `${itemWidth}%` }">
    <div class="inner">
      <!-- <div class="cover">
        <img :src="itemData.picture_url" alt="" />
      </div> -->
      <div class="swiper">
        <div class="control">
          <div class="btn left">
            <ArrowLeftIcon :width="30" :height="30" />
          </div>
          <div class="btn right">
            <ArrowRightIcon :width="30" :height="30" />
          </div>
        </div>
        <div class="indicator">
          <el-carousel
            height="100%"
            :autoplay="false"
            arrow="never"
            indicator-position="none"
          >
            <el-carousel-item v-for="item in itemData.picture_urls" :key="item">
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
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
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .inner {
    width: 100%;
    .swiper {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;
      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        position: absolute;
        z-index: 11;
        color: #fff;
        inset: 0;
        display: none;
        justify-content: space-between;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          background: linear-gradient(
            to left,
            transparent 0%,
            rgba(0, 0, 0, 0.25) 100%
          );
          &.right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }
      .indicator {
        position: absolute;
        // width: 30%;
        height: 100%;
        z-index: 9;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
      }
    }
  }

  ::v-deep() {
    .el-carousel {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
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
