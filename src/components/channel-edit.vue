<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell title="我的频道">
      <template #default>
        <van-button class="edit-btn" size="mini" type="danger" round plain>编辑</van-button>
      </template>
    </van-cell>
    <van-grid :gutter="10" direction="horizontal">
      <van-grid-item class="my-channel" v-for="i in 13" :key="i" text="文字" icon="clear" />
    </van-grid>
    <!-- 推荐频道 -->
    <van-cell title="推荐频道"></van-cell>
    <van-grid :gutter="10" direction="horizontal">
      <van-grid-item class="recommend-channel" v-for="i in 13" :key="i" text="文字" icon="plus" />
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
  /deep/.van-grid {
    .van-grid-item .van-grid-item__content {
      background-color: #f4f5f6;
      height: 86px;
      .van-grid-item__text {
        color: #000;
        font-size: 26px;
      }
    }
    .my-channel {
      .van-grid-item__icon {
        position: absolute;
        top: -8px;
        right: -8px;
        z-index: 2;
        font-size: 26px;
        color: #ccc;
      }
    }
    .recommend-channel {
      .van-icon.van-grid-item__icon {
        font-size: 28px;
      }
    }
  }
  .van-cell::after {
    border-bottom: none;
  }
  .edit-btn {
    padding: 0 20px;
  }
}
</style>
