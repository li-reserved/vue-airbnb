<script setup lang="ts">
import globalIcon from '@/icons/global-icon.vue'
import menuIcon from '@/icons/menu-icon.vue'
import userIcon from '@/icons/user-icon.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const elpPanel = ref(false)

const panelClickHandle = () => {
  elpPanel.value = false
}

onMounted(() => {
  window.addEventListener('click', panelClickHandle, true)
})

onUnmounted(() => {
  window.removeEventListener('click', panelClickHandle, true)
})
</script>

<template>
  <div class="right-page">
    <div class="btn">
      <span>登录</span>
      <span>注册</span>
      <span>
        <globalIcon />
      </span>
    </div>
    <div class="profile" @click="elpPanel = !elpPanel">
      <menu-icon />
      <user-icon />
      <div class="panel" v-if="elpPanel">
        <div class="panel-top">
          <p>注册</p>
          <p>登录</p>
        </div>
        <div class="panel-bottom">
          <p>来爱彼迎发布房源</p>
          <p>开展体验</p>
          <p>帮助</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.right-page {
  flex: 1;
  display: flex;
  justify-content: end;
  .btn {
    display: flex;
    align-items: center;
    padding-right: 8px;
    span {
      padding: 12px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: #f6f6f6;
        border-radius: 22px;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    height: 42px;
    width: 77px;
    border: 1px solid #ddd;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    box-sizing: border-box;
    color: #717171;
    transition: box-shadow 500ms ease;
    &:hover {
      box-shadow: var(--bnb-hover);
    }
    .panel {
      color: #222;
      position: absolute;
      top: 50px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 0px 2px rgba(0, 0, 0, 0.18);
      padding: 10px 0;
      p:hover {
        background-color: #f7f7f7;
      }
      &-top {
        padding-bottom: 10px;
        border-bottom: 0.5px solid #ddd;
        p {
          padding: 12px 15px;
          &:first-child {
            font-weight: 600;
          }
        }
      }
      &-bottom {
        padding-top: 10px;
        p {
          padding: 12px 15px;
        }
      }
    }
  }
}
</style>
