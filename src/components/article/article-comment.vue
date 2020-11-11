<template>
  <div class="article-comment">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="item clearfix" v-for="(item, index) in list" :key="index">
        <van-image class="one" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="two">
          <div class="t-title">{{ item.aut_name }}</div>
          <div class="t-content">{{ item.content }}</div>
          <div class="time">
            <span>{{ item.pubdate | relativeFilter }}</span>
            <van-button type="default" round>回复 {{ item.reply_count }}</van-button>
          </div>
        </div>
        <div class="three">
          <van-icon name="good-job-o" />
          <span>赞</span>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { commentsAndRePlayAjax } from '@/api/users';

export default {
  name: 'ArticleComment',
  props: {
    userId: {
      type: [Number, String, Object],
      required: true,
    },
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      totalCount: 0,
      offset: null,
    };
  },
  created() {
    console.log(this.userId, typeof this.userId);
    // this.getCommentsAndRePlay();
  },
  methods: {
    async onLoad() {
      try {
        const res = await commentsAndRePlayAjax({
          type: 'a',
          source: this.userId.toString(), // 文章id
          offset: this.offset,
          limit: 10,
        });
        this.list.push(...res.data.results);
        this.totalCount = res.data.total_count;

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完毕
        if (res.data.results.length === 0) {
          this.finished = true;
        } else {
          this.offset = res.data.last_id;
        }
      } catch (err) {
        console.log(123);
        // 加载状态结束
        this.loading = true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article-comment {
  .item {
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ebe5e5;
    .one.van-image {
      width: 72px;
      height: 72px;
      float: left;
    }
    .two {
      float: left;
      margin-left: 20px;
      font-size: 24px;
      .t-title {
        color: cornflowerblue;
        font-size: 32px;
      }
      .t-content {
        font-size: 28px;
        margin: 30px 0;
        color: #000;
      }
      .time {
        .van-button {
          margin-left: 20px;
          font-size: 24px;
          height: 44px;
        }
      }
    }
    .three {
      float: right;
      font-size: 30px;
      .van-icon {
        font-size: 36px;
      }
      span {
        margin-left: 8px;
        position: relative;
        top: -6px;
      }
    }
  }
}
.clearfix::after {
  content: ' ';
  display: block;
  clear: both;
  height: 0;
  visibility: 0;
  font-size: 0;
}
</style>
