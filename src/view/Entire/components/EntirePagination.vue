<script setup lang="ts">
import { computed } from 'vue'
import { useEntireStore } from '@/store/modules/entire'
const store = useEntireStore()

const total = computed(() => store.totalcount)
const current = computed(() => store.currentPage)
const roomList = computed(() => store.roomList)

const currentchangeHandle = (value: number) => {
  store.setCurrentPage(value - 1)
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="entire-pagination" v-if="roomList">
    <div class="info">
      <el-pagination
        :page-size="20"
        layout="prev, pager, next"
        :total="total"
        @current-change="currentchangeHandle"
      />
      <div class="desc">
        第{{ current * 20 + 1 }} - {{ (current + 1) * 20 }}个房源,共超过
        {{ total }} 个
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entire-pagination {
  display: flex;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc {
      margin-top: 16px;
    }
  }
  ::v-deep() {
    .el-pagination {
      .el-icon {
        font-size: 15px;
      }
    }
    .el-pager {
      li {
        color: #222;
        border-radius: 50%;
        margin: 0 8px;
      }

      [aria-current='false'] {
        &:hover {
          background-color: #f6f6f6;
          text-decoration: underline;
        }
      }
      .is-active {
        background-color: #222;
        font-weight: normal;
        color: #fff;
      }
    }
  }
}
</style>
