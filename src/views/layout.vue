<template>
  <div class="layout-wrap">
    <van-tabbar v-model="active" router class="layout-tabbar">
      <van-tabbar-item icon="home-o" to="/">
        <span>首页</span>
        <i slot="icon" class="iconfont iconshouye"></i>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item to="/video">
        <span>视频</span>
        <template #icon>
          <i class="iconfont iconshipin"></i>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <span>我的</span>
        <template #icon>
          <i class="iconfont iconwode"></i>
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.layout-wrap {
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
  }
}
</style>
