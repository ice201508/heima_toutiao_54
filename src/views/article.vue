<template>
  <div class="article-container">
    <van-nav-bar title="黑马头条" left-arrow @click-left="$router.back()" />

    <!-- 文章详情 -->
    <div class="title">文章标题</div>
    <div class="qita">头像及作者</div>
    <div class="detail">文章详情-正文</div>

    <!-- 评论部分 -->
    <div class="comment-bottom">
      <div class="cb-write-comment">写评论</div>
      <div>
        <i class="iconfont iconpinglun"></i>
      </div>
      <div>
        <i class="iconfont iconshoucang"></i>
      </div>
      <div>
        <i class="iconfont icondianzan2"></i>
      </div>
      <div>
        <i class="iconfont iconfenxiang"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { articleDetailAjax } from '@/api/users';

export default {
  name: 'Article',
  props: {
    articleId: {
      type: String,
      required: true,
    },
  },
  created() {
    console.log(this.$route.params.articleId, this.articleId);
    // this.getArticleDetails();
  },
  methods: {
    async getArticleDetails() {
      const res = await articleDetailAjax(this.articleId);
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
.comment-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 88px;
  border-top: 1px solid #d8d8d8;
  .cb-write-comment {
    width: 282px;
    height: 46px;
    color: #bab8b8;
    border: 1px solid #e2e2e2;
    font-size: 30px;
    border-radius: 46px;
    text-align: center;
    cursor: pointer;
    &:active {
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
  i.iconfont {
    color: #bab8b8;
    font-size: 32px;
  }
}
</style>
