<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell title="我的频道">
      <template #default>
        <van-button class="edit-btn" size="mini" type="danger" round plain>编辑</van-button>
      </template>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="i in 13" :key="i" text="文字" />
    </van-grid>
    <!-- 推荐频道 -->
    <van-cell title="推荐频道"></van-cell>
    <van-grid :gutter="10">
      <van-grid-item v-for="i in 13" :key="i" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'channelEdit',
};
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 100px;
  .van-cell::after {
    border-bottom: none;
  }
  .edit-btn {
    padding: 0 20px;
  }
}
</style>
