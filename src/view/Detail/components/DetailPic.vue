<script setup lang="ts">
import type { EntireItem } from '@/types/entire'
import { ref } from 'vue'

const showPic = ref(false)
defineProps<{
  detailItem: EntireItem
}>()
</script>

<template>
  <div class="detail-pic" v-if="detailItem.picture_urls">
    <div class="left">
      <div class="item" @click="() => (showPic = !showPic)">
        <img :src="detailItem.picture_urls[0]" alt="" />
        <div class="cover"></div>
      </div>
    </div>
    <div class="right">
      <div
        class="item"
        v-for="item in detailItem.picture_urls.slice(1, 5)"
        :key="item"
        @click="() => (showPic = !showPic)"
      >
        <img :src="item" alt="" />
        <div class="cover"></div>
      </div>
    </div>
    <picture-browser
      v-model:show-pic="showPic"
      :picture-urls="detailItem.picture_urls"
    />
  </div>
</template>

<style lang="scss" scoped>
.detail-pic {
  display: flex;
  height: 560px;
  &:hover {
    .cover {
      opacity: 1 !important;
    }
    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;
    .item {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      box-sizing: border-box;
      border: 1px solid #000;
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 300ms ease;
      }
      .cover {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: opacity 200ms ease;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      height: 50%;
    }
  }
}
</style>
