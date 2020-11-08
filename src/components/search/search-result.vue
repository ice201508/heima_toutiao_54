<template>
  <div class="search-result">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in list" :key="item" title="搜索结果" />
    </van-list>
  </div>
</template>

<script>
// 方法引入错误，报错 Object（...） is not a function'
import { searchResultAjax } from '@/api/users';

export default {
  name: 'SearchResult',
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pageNum: 1,
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    async onLoad() {
      try {
        const res = await searchResultAjax({
          page: this.pageNum,
          perpage: 10,
          q: this.searchText,
        });
        this.list.push(...[res.data.results]);

        this.loading = true;
        // if(res.data.results.length)
      } catch (err) {
        console.log(err);
      }

      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }

      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    },
  },
};
</script>

<style lang="less" scoped></style>
