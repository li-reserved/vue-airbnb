<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, onBeforeUnmount } from 'vue'
import CloseIcon from '@/icons/close-icon.vue'
import ArrowLeftIcon from '@/icons/arrow-left-icon.vue'
import ArrowRightIcon from '@/icons/arrow-right-icon.vue'
import TriangleIcon from '@/icons/triangle-icon.vue'

const currentIndex = ref(0)
const right = ref(true)
const showList = ref(true)

function controlclickHandle(isright = true) {
  right.value = isright
  let newIndex = currentIndex.value
  isright ? (newIndex += 1) : (newIndex -= 1)
  if (newIndex > pictureUrls.length - 1) newIndex = 0
  if (newIndex < 0) newIndex = pictureUrls.length - 1
  currentIndex.value = newIndex
}

function handleitemclick(i: number) {
  right.value = i > currentIndex.value
  currentIndex.value = i
}

const { pictureUrls } = defineProps<{
  showPic: boolean
  pictureUrls: string[]
}>()

const emit = defineEmits<{
  (e: 'update:showPic', v: boolean): void
}>()

function windowEventHandle(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('update:showPic', false)
  }
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', windowEventHandle)
})

onBeforeUnmount(() => {
  document.body.style.overflow = 'auto'
  window.removeEventListener('keydown', windowEventHandle)
})
</script>

<template>
  <div class="pic-browser" v-show="showPic">
    <div class="top">
      <div class="close-btn" @click="() => emit('update:showPic', false)">
        <CloseIcon />
      </div>
    </div>
    <div class="slider">
      <div class="control">
        <div class="btn left" @click="() => controlclickHandle(false)">
          <ArrowLeftIcon :height="77" :width="77" />
        </div>
        <div class="btn right" @click="() => controlclickHandle(true)">
          <ArrowRightIcon :height="77" :width="77" />
        </div>
      </div>
      <div class="pics">
        <Transition
          :name="right ? 'right' : 'left'"
          mode="in-out"
          :duration="200"
        >
          <img
            :key="pictureUrls[currentIndex]"
            :src="pictureUrls[currentIndex]"
          />
        </Transition>
      </div>
    </div>
    <div class="preview">
      <div class="info">
        <div class="desc">
          <div class="desc-left">
            {{ currentIndex + 1 }}/{{ pictureUrls.length }}: 图片{{
              currentIndex + 1
            }}
          </div>
          <div
            :class="[{ showList: !showList }, 'desc-right']"
            @click="() => (showList = !showList)"
          >
            {{ showList ? '隐藏' : '显示' }}图片
            <triangle-icon />
          </div>
        </div>
        <div :class="[{ showHeight: !showList }, 'list']">
          <Indicator :select-index="currentIndex">
            <div
              v-for="(item, index) in pictureUrls"
              :key="item"
              :class="[{ active: currentIndex === index }, 'item']"
              @click="() => handleitemclick(index)"
            >
              <img :src="item" alt="" />
            </div>
          </Indicator>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pic-browser {
  position: fixed;
  inset: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  .top {
    position: relative;
    height: 86px;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      color: #fff;
      cursor: pointer;
    }
  }
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;

    .control {
      position: absolute;
      z-index: 1;
      inset: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    .pics {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;
      img {
        position: absolute;
        inset: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }
      .right-enter-active {
        transform: translateX(100%);
        opacity: 0;
      }
      .left-enter-active {
        transform: translateX(-100%);
        opacity: 0;
      }
      .right-enter-to,
      .left-enter-to {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .right-leave-active,
      left-leave-active {
        opacity: 1;
      }
      .right-leave-to,
      .left-leave-to {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }
  > .preview {
    height: 190px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    .info {
      position: absolute;
      bottom: 100px;
      max-width: 105vh;
      color: #fff;
      .desc {
        display: flex;
        justify-content: space-between;
        svg {
          transition: transform 300ms ease-in-out;
        }
        .desc-right {
          cursor: pointer;
          &.showList {
            svg {
              transform: rotate(-180deg);
            }
          }
        }
      }
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: 67px;
        &.showHeight {
          height: 0;
        }
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 67px;
            opacity: 0.5;
          }
          &.active {
            img {
              height: 77px;
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
