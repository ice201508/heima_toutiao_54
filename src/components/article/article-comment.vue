<template>
  <div class="article-comment">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-comment-item v-for="(item, index) in list" :key="index" :comment="item" />
    </van-list>
  </div>
</template>

<script>
import { commentsAndRePlayAjax } from '@/api/users';
import ArticleCommentItem from '@/components/article/article-comment-item.vue';

export default {
  name: 'ArticleComment',
  props: {
    userId: {
      type: [Number, String, Object],
      required: true,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ArticleCommentItem,
  },
  data() {
    return {
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
        this.$emit('on-success-event', res.data.total_count);

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

<style lang="less" scoped></style>
