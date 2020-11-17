<template>
  <div class="text1">
    <div class="item" v-for="item in 20" :key="item">组件一 {{ $route.meta.keepAlive }}</div>
  </div>
</template>

<script>
export default {
  name: 'Test1',
  created() {
    console.log('进入了 text1 组件，有缓存，只会第一次发请求');
  },
  activated() {
    console.log('11--包含在keep-alive中的组件，会多出两个钩子函数---activated');
  },
  deactivated() {
    console.log('11--包含在keep-alive中的组件，会多出两个钩子函数-----deactivated');
  },
  destroyed() {
    console.log('组件1111销毁');
  },
};
</script>

<style lang="less" scoped>
.text1 {
  .item:nth-child(odd) {
    background-color: lightblue;
  }
  .item:nth-child(even) {
    background-color: lightgreen;
  }
}
.item {
  width: 90%;
  height: 100px;
  margin: 5%;
}
</style>
