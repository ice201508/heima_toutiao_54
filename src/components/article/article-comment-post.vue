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
    <van-button :disabled="!commentMessage" @click="sendComment">发布</van-button>
  </div>
</template>

<script>
import { addCommentsAndRePlayAjax } from '@/api/users';

export default {
  name: 'ArticleCommentPost',
  props: {
    userId: {
      type: [Number, String, Object],
      required: true,
    },
  },
  data() {
    return {
      commentMessage: '',
    };
  },
  methods: {
    async sendComment() {
      const res = await addCommentsAndRePlayAjax({
        target: this.userId.toString(),
        content: this.commentMessage,
        // art_id: 文章id；  对文章的评论发表回复时需要
      });
      // 添加评论成功以后，需要将本地视图对应的数据进更新
      this.$emit('ADD-COMMENT-EVENT', res.data.new_obj);
    },
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
