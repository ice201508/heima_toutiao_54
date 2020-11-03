<template>
  <div v-if="!token" class="home-contain">
    <div class="box-1">
      <div class="login-box" @click="goLogin">
        <!-- <div class="icon"></div> -->
        <img src="../assets/mobile.png" alt="" />
        <div class="text">登录/注册</div>
      </div>
    </div>
    <div class="box-2">
      <van-grid :column-num="2">
        <van-grid-item icon="photo-o" text="文字">
          <template slot="text">
            收藏
          </template>
          <template #icon>
            <van-icon name="chat-o" color="#eb5253" />
          </template>
        </van-grid-item>
        <van-grid-item icon="photo-o" text="文字">
          <template v-slot:text>
            历史
          </template>
          <template #icon>
            <van-icon name="chat-o" color="#eb5253" />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="box-3">
      <van-cell-group>
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" is-link />
      </van-cell-group>
    </div>
  </div>
  <div v-else>
    登录完成
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  methods: {
    goLogin() {
      this.$router.push('/login');
    },
  },
  computed: {
    ...mapState(['token']),
  },
};
</script>

<style lang="less" scoped>
.home-contain {
  .box-1 {
    height: 360px;
    background: url('../assets/banner.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .text {
      font-size: 30px;
      color: #fff;
    }
    img {
      width: 100px;
      height: 100px;
    }
    .icon {
      text-align: center;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #fff;
    }
  }
  .box-3 {
    margin-top: 15px;
  }
}
</style>
