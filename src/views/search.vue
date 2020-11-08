<template>
  <div class="search">
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        background="#3296fa"
        clearable
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <!-- 搜索历史 -->
    <search-history />

    <!-- 搜索建议 -->
    <search-suggestion />

    <!-- 搜索结果 -->
    <search-result />
  </div>
</template>

<script>
import SearchHistory from '../components/search/search-history.vue';
import SearchSuggestion from '../components/search/search-suggestion.vue';
import SearchResult from '../components/search/search-result.vue';

export default {
  name: 'SearchIndex',
  data() {
    return {
      searchText: '',
    };
  },
  components: {
    SearchHistory,
    SearchSuggestion,
    SearchResult,
  },
  methods: {
    onSearch(val) {
      this.$toast(val);
    },
    onCancel() {
      this.$toast('取消');
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .van-search__action {
    color: #fff;
  }
}
</style>
