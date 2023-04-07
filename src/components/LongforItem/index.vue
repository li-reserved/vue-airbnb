<script setup lang="ts">
import type { LongforItem } from '@/types/home'
defineProps<{
  itemData: LongforItem
}>()
</script>

<template>
  <div class="longfor-item">
    <div class="inner">
      <div class="content">
        <img class="cover" :src="itemData.picture_url" alt="" />
        <div class="bg-cover"></div>
        <div class="info">
          <div class="city">{{ itemData.city }}</div>
          <div class="price">均价{{ itemData.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.longfor-item {
  flex-shrink: 0;
  width: 20%;
  .inner {
    padding: 8px;
    .content {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
    }
  }
  .cover {
    width: 100%;
  }

  .bg-cover {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgba(0, 0, 0) 100%
    );
  }

  .info {
    position: absolute;
    left: 30px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 24px 32px;
    color: #fff;

    .city {
      font-size: 18px;
      font-weight: 600;
    }

    .price {
      font-style: 14px;
      margin-top: 5px;
    }
  }
}
</style>
