<template>
  <div class="layout">
    <app-title v-if="route.meta.apptitle" />
    <airbnb-header />
    <router-view></router-view>
    <div class="footer">广告招租</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import AppTitle from './AppTitle.vue'

const route = useRoute()
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 80px;
  height: 200px;
  background-color: #fff;
  border-top: 0.5px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  transition: all 250ms ease;
  &:hover {
    font-size: 40px;
    color: #fff;
    background-color: #666;
  }
}
</style>
