<script setup lang="ts">
import titleImage from '@/assets/image/titlelogo.jpg'
</script>

<template>
  <div class="apptitle-page">
    <img :src="titleImage" alt="" />
    <span className="title">四海无忧·四重保障</span>
    <span>预订保障 · 入住保障 · 房源真实性保障 · 24 小时安全支持</span>
    <span className="desc">查看详情 </span>
  </div>
</template>

<style lang="scss" scoped>
.apptitle-page {
  position: relative;
  z-index: 99;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  font-size: 12px;
  line-height: 18px;
  img {
    width: 60px;
    height: 13px;
  }
  .title {
    font-weight: 600;
    padding-left: 4px;
    padding-right: 8px;
  }

  .desc {
    text-decoration: underline;
    padding-left: 8px;
    cursor: pointer;
  }
}
</style>
