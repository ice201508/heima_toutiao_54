<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar class="nav-bar" fixed>
      <van-button slot="title" round block class="nav-btn">
        <van-icon name="search"></van-icon>
        <span>搜索</span>
      </van-button>
    </van-nav-bar>

    <!-- 频道列表 -->
    <van-tabs
      class="my-tabs"
      v-model="active"
      @change="tabChange"
      :lazy-render="true"
      border
      animated
      swipeable
    >
      <van-tab :name="item.id" :title="item.name" v-for="item in channels" :key="item.id">
        <article-list :channel="item" />
      </van-tab>
      <div class="hanberge-btn" slot="nav-right">
        <i @click="channelEditPop = true" class="iconfont icongengduo"></i>
      </div>
    </van-tabs>

    <van-popup
      v-model="channelEditPop"
      round
      closeable
      close-icon-position="top-left"
      position="bottom"
      :style="{ height: '98%' }"
    >
      <channel-edit
        v-if="channelEditPop"
        :active="active"
        :channels="channels"
        @CHANGE_CHANNEL_EVENT="getChannelFromSon"
      />
    </van-popup>
  </div>
</template>

<script>
import { userChannels } from '@/api/users';
import ArticleList from '@/components/article/article-list.vue';
import ChannelEdit from '@/components/channel-edit.vue';

export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      channels: [],
      channelEditPop: false,
    };
  },
  created() {
    this.getChannels();
  },
  components: {
    ArticleList,
    ChannelEdit,
  },
  methods: {
    async getChannels() {
      const res = await userChannels();
      this.channels = res.data.channels;
    },
    tabChange(a) {
      // console.log(a);
    },
    getChannelFromSon(data) {
      this.active = data.id;
      this.channelEditPop = data.flag;
      console.log(222, this.active);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  /deep/.nav-bar {
    background-color: #3296fa;
    .van-nav-bar__title {
      max-width: unset;
      width: 70%;
      .van-button {
        height: 60px;
        border: none;
        color: #fff;
        background-color: #5babfb;
        .van-button__text {
          display: flex;
          justify-content: center;
          align-items: center;
          .van-icon-search {
            color: #fff;
            font-size: 32px;
            margin-top: 4px;
          }
          span {
            margin-left: 8px;
          }
        }
      }
    }
  }
  /deep/.my-tabs {
    .van-tabs__wrap {
      // position: fixed;
      top: 92px;
      z-index: 2;
      .van-tabs__nav {
        padding: 0;
        .van-tab {
          width: 200px;
          height: 88px;
          border-right: 2px solid #edeff3;
        }
        .van-tab:last-child {
          border-right: none;
          color: red;
        }
        .van-tabs__line {
          background-color: #3296fa;
          width: 30px;
          position: absolute;
          bottom: 10px;
        }
        .hanberge-btn {
          // 容器是flex布局，项目写宽度不会生效
          min-width: 33px;
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          right: 0;
          background-color: rgba(255, 255, 255, 0.8);
          .iconfont {
            font-size: 33px;
          }
        }
      }
    }
    .van-tabs__content {
      padding-top: 90px;
    }
  }
}
</style>
