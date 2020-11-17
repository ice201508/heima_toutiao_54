<template>
  <div class="keep-alive">
    <div class="gonext">
      <router-link to="/keepalive/test1">组件一,{{ $route.meta.keepAlive }}</router-link>
      <router-link to="/keepalive/test2">页面二, {{ $route.meta.keepAlive }}</router-link>
    </div>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- <router-view></router-view> -->
    <!-- <keep-alive include="test2">
      <router-view></router-view>
    </keep-alive>
    <keep-alive exclude="test2">
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'KeepAlive1',
};
</script>

<style lang="less" scoped>
.keep-alive {
  padding-top: 100px;
}
.gonext {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  border: 2px solid #ccc;
  background-color: #eee;
}
</style>
