<template>
  <div class="comment-reply">
    <van-nav-bar :title="currentComment.reply_count + '条回复'">
      <van-icon name="cross" slot="left" @click="$emit('close')"></van-icon>
    </van-nav-bar>

    <div class="main">
      <!-- 当前评论项 -->
      <article-comment-item :comment="currentComment" />
      <van-cell title="全部回复"></van-cell>

      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <article-comment-item v-for="(item, index) in list" :key="index" :comment="item" />
      </van-list>
    </div>

    <div class="comment-bottom">
      <van-button round @click="sendCommentReply = true">写评论</van-button>
    </div>

    <!-- 发表评论结构 -->
    <van-popup v-model="sendCommentReply" position="bottom" :style="{ height: '20%' }">
      <article-comment-post
        v-if="sendCommentReply"
        :userId="currentComment.com_id"
        :comid="articleId"
        @ADD-COMMENT-EVENT="addCommentHandler"
      />
    </van-popup>
  </div>
</template>

<script>
import ArticleCommentItem from '@/components/article/article-comment-item.vue';
import ArticleCommentPost from '@/components/article/article-comment-post.vue';
import { commentsAndRePlayAjax } from '@/api/users';

export default {
  name: 'ArticleCommentReply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    },
  },
  inject: {
    articleId: {
      type: [Number, String, Object],
      default: null,
    },
  },
  created() {
    console.log(111, this.articleId);
  },
  components: {
    ArticleCommentItem,
    ArticleCommentPost,
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      sendCommentReply: false,
    };
  },
  methods: {
    async onLoad() {
      try {
        const res = await commentsAndRePlayAjax({
          type: 'c',
          source: this.currentComment.com_id.toString(), // 文章id
          offset: this.offset,
          limit: 10,
        });
        this.list.push(...res.data.results);
        this.totalCount = res.data.total_count;
        this.$emit('on-success-event', res.data.total_count);

        // 加载状态结束1
        this.loading = false;

        // 数据全部加载完毕
        if (res.data.results.length === 0) {
          this.finished = true;
        } else {
          this.offset = res.data.last_id;
        }
      } catch (err) {
        // 加载状态结束
        this.loading = true;
      }
    },
    addCommentHandler(val) {
      this.sendCommentReply = false;
      this.list.unshift(val);
    },
  },
};
</script>

<style lang="less" scoped>
.comment-reply {
  .article-comment-item {
    padding: 30px;
  }
  .main {
    position: fixed;
    top: 92px;
    bottom: 92px;
    left: 0;
    right: 0;
    overflow-y: auto;
    padding-bottom: 92px;
  }
  .comment-bottom {
    position: fixed;
    bottom: 0;
    height: 90px;
    left: 0;
    right: 0;
    background-color: #fff;
    border-top: 1px solid #ccc;
    text-align: center;
    // line-height: 20px;
    .van-button {
      height: 60px;
      width: 80%;
      margin: 15px auto;
    }
  }
}
</style>
