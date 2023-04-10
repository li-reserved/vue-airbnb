<script setup lang="ts"></script>

<template>
  <div class="entire-title">
    <div className="content">
      <div className="title">关于政策条款更新的意见收集及公示</div>
      <div className="title-b">
        更新后的《服务条款》、《支付服务条款》及《隐私政策》将于 2023 年 3 月 30
        日正式生效。您也可通过《关于爱彼迎条款的最新情况》了解政策条款的更新详情。若您对修改内容有任何问题或意见，请于生效日前发送邮件至yijian@airbnb.com。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entire-title {
  padding: 38px 78px;
  .content {
    padding: 16px 24px;
    border: 0.5px solid #ddd;
    border-radius: 12px;

    .title-b {
      padding-top: 8px;
      line-height: 18px;
      color: #717171;
      background: linear-gradient(to right, #333, #333) no-repeat right bottom;
      background-size: 0 2px;
      transition: background-size 500ms ease;
      display: inline-block;
      &:hover {
        background-position-x: left;
        background-size: 100% 2px;
      }
    }
  }
}
</style>
