<template>
  <div class="article-list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :success-text="refreshSuccessText">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <article-list-item v-for="(item, index) in articleList" :key="index" :articleItem="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { recommonArticle } from '@/api/users';
import ArticleListItem from '@/components/article/article-list-item.vue';

export default {
  name: 'ArticleList',
  props: ['channel'],
  components: {
    ArticleListItem,
  },
  data() {
    return {
      articleList: [],
      loading: false,
      finished: false,
      refreshing: false,
      timestamp: +new Date(),
      refreshSuccessText: '',
    };
  },
  methods: {
    async onLoad() {
      try {
        const res = await recommonArticle({
          channel_id: this.channel.id,
          timestamp: this.timestamp,
          with_top: 1,
        });
        if (res.data.results && res.data.results.length === 0) {
          this.finished = true;
        } else {
          this.timestamp = res.data.pre_timestamp;
        }

        if (this.refreshing) {
          this.refreshing = false;
          this.refreshSuccessText = `成功刷新了${res.data.results.length}条数据`;
        }

        this.articleList.unshift(...res.data.results);
        this.loading = false;
      } catch (err) {
        console.dir(err);
        this.loading = false;
        this.refreshing = false;
      }
      // setTimeout(() => {

      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //   this.loading = false;

      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.timestamp = Date.now();
      this.articleList = [];
      this.onLoad();
    },
  },
};
</script>

<style lang="less" scoped>
.article-list {
  height: 79vh;
  overflow: auto;
}
</style>
