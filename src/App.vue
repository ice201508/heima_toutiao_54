<template>
  <div id="app">
    <!-- <keep-alive include="home22">
      <router-view></router-view>
    </keep-alive> -->
    <!-- <router-view></router-view> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="less"></style>
