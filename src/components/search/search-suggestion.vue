<template>
  <div class="search-suggestion">
    <van-cell
      v-for="(item, index) in suggestionList"
      :key="index"
      icon="search"
      @click="goResult(item)"
    >
      <div slot="title" v-html="highlightKeyword(item)"></div>
    </van-cell>
  </div>
</template>

<script>
import { searchSuggestionAjax } from '@/api/users';
import { debounce } from 'lodash';

export default {
  name: 'SearchSuggestion',
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      suggestionList: [],
    };
  },
  methods: {
    highlightKeyword(val) {
      let str = `<span class="active">${this.searchText}</span>`;
      let regexp = new RegExp(this.searchText, 'ig');

      return val.replace(regexp, str);
    },
    goResult(val) {
      this.$emit('GO_RESULT_EVENT', val);
    },
  },
  watch: {
    searchText: {
      handler: debounce(async function(newV, oldV) {
        // console.log(newV, oldV, this.searchText);
        const res = await searchSuggestionAjax({ q: newV });
        this.suggestionList = res.data.options;
      }, 300),
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.search-suggestion {
  /deep/span.active {
    color: red;
  }
}
</style>
