<template>
  <div>
    <van-nav-bar :title="currentComment.reply_count + '条回复'">
      <van-icon name="cross" slot="left" @click="$emit('close')"></van-icon>
    </van-nav-bar>

    <!-- 当前评论项 -->
    <article-comment-item :comment="currentComment" />
    <van-cell title="全部回复"></van-cell>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-comment-item v-for="(item, index) in list" :key="index" :comment="item" />
    </van-list>
  </div>
</template>

<script>
import ArticleCommentItem from '@/components/article/article-comment-item.vue';
import { commentsAndRePlayAjax } from '@/api/users';

export default {
  name: 'ArticleCommentReply',
  props: {
    currentComment: {
      type: Object,
      required: true,
    },
  },
  components: {
    ArticleCommentItem,
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    console.log(this.currentComment);
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
  },
};
</script>

<style lang="less" scoped></style>
