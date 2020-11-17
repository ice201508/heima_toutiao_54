<template>
  <div class="text1">
    <div class="item" v-for="item in 20" :key="item">页面二 {{ $route.meta.keepAlive }}</div>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  created() {
    console.log('进入了 text2组件，test2，test2');
  },
};
</script>

<style lang="less" scoped>
.text1 {
  .item:nth-child(odd) {
    background-color: lightsalmon;
  }
  .item:nth-child(even) {
    background-color: lightskyblue;
  }
}
.item {
  width: 90%;
  height: 100px;
  margin: 5%;
}
</style>
