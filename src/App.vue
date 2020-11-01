<template>
  <div id="app">
    <h2>根组件App <i class="iconfont iconwuwangluo"></i> <i class="iconfont iconyuedu"></i></h2>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
    <div class="box"></div>
    <router-view />
  </div>
</template>

<style lang="less">
.box {
  width: 200px;
  height: 100px;
  background-color: skyblue;
}
</style>
