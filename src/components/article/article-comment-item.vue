<template>
  <div class="article-comment-item">
    <div class="item clearfix">
      <van-image class="one" round fit="cover" :src="comment.aut_photo" />
      <div class="two">
        <div class="t-title">{{ comment.aut_name }}</div>
        <div class="t-content">{{ comment.content }}</div>
        <div class="time">
          <span>{{ comment.pubdate | relativeFilter }}</span>
          <van-button type="default" round @click="$emit('close-reply')"
            >回复 {{ comment.reply_count }}</van-button
          >
        </div>
      </div>
      <div class="three">
        <van-icon
          @click="handlerLiking"
          :name="comment.is_liking ? 'good-job' : 'good-job-o'"
          :color="comment.is_liking ? '#1989fa' : ''"
        />
        <span>{{ comment.like_count == 0 ? '赞' : comment.like_count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { commentLikingsAjax, cancelCommentLikingsAjax } from '@/api/users';

export default {
  name: 'ArticleCommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentReplyShow: false,
    };
  },
  methods: {
    async handlerLiking() {
      if (this.comment.is_liking) {
        await cancelCommentLikingsAjax(this.comment.com_id);
        this.comment.is_liking = false;
        if (this.comment.like_count == 1) {
          this.comment.like_count = 0;
        }
        this.comment.like_count -= 1;
      } else {
        await commentLikingsAjax({
          target: this.comment.com_id,
        });
        this.comment.is_liking = true;
        this.comment.like_count += 1;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.article-comment-item {
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
