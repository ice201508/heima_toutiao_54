<template>
  <div class="home-contain">
    <div class="box-1" v-if="!token">
      <div class="login-box" @click="goLogin">
        <!-- <div class="icon"></div> -->
        <img src="../assets/mobile.png" alt="" />
        <div class="text">登录/注册</div>
      </div>
    </div>
    <div class="box-4" v-else>
      <div class="b4-top">
        <div class="b4t-left">
          <img src="@/assets/mobile.png" />
          <span>我的姓名</span>
        </div>
        <div class="b4t-right">
          <van-button type="default" round size="mini">编辑资料</van-button>
        </div>
      </div>
      <div class="b4-bottom">
        <div class="item">
          <div>64422</div>
          <div>头条</div>
        </div>
        <div class="item">
          <div>64422</div>
          <div>头条</div>
        </div>
        <div class="item">
          <div>64422</div>
          <div>头条</div>
        </div>
        <div class="item">
          <div>64422</div>
          <div>头条</div>
        </div>
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
    <div class="logout" v-if="token">
      <van-button type="primary" block @click="logout">退出登录</van-button>
    </div>
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
    logout() {
      this.$store.commit('setItem', '');
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
    margin-top: 24px;
  }
  .box-4 {
    height: 360px;
    background: url('../assets/banner.png');
    background-size: cover;
    .b4-top {
      height: 150px;
      display: flex;
      flex-direction: row;
      padding: 60px 40px 30px;
      justify-content: space-between;
      align-items: center;
      .b4t-left {
        display: flex;
        align-items: center;
        img {
          width: 100px;
        }
        span {
          margin-left: 20px;
          color: #fff;
        }
      }
      .b4t-right {
        .van-button {
          padding: 0 18px;
        }
      }
    }
    .b4-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 40px;
      text-align: center;
      color: #fff;
      .item > div:first-child {
        font-size: 38px;
      }
      .item > div:last-child {
        font-size: 28px;
      }
    }
  }
  .logout {
    margin-top: 24px;
    .van-button {
      background-color: #fff;
      border: none;
      color: #ee0a24;
    }
  }
}
</style>
