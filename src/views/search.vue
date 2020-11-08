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
        @focus="onFocus"
        @cancel="onCancel"
      />
    </form>

    <!-- 搜索历史 -->
    <search-history v-if="!searchText" />

    <!-- 搜索建议 -->
    <search-suggestion v-if="searchText && !isResultShow" />

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow" />
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
      isResultShow: false,
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
      this.isResultShow = true;
    },
    onCancel() {
      this.$toast('取消');
      this.isResultShow = false;
      this.$router.back();
    },
    onFocus() {
      this.isResultShow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  padding-top: 108px;
  .van-search__action {
    color: #fff;
  }
  .van-search {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
}
</style>
