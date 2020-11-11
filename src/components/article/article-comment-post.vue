<template>
  <div class="comment-post">
    <van-field
      v-model="commentMessage"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
    />
    <van-button>发布</van-button>
  </div>
</template>

<script>
export default {
  name: 'ArticleCommentPost',
  data() {
    return {
      commentMessage: '',
    };
  },
};
</script>

<style lang="less" scoped>
.comment-post {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  .van-cell {
    background-color: #ebedf0;
  }
  .van-button {
    width: 120px;
    padding-right: 0;
    border: 0;
    color: #6ba3d8;
  }
}
</style>
