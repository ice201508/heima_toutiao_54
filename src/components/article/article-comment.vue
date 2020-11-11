<template>
  <div class="article-comment">
    <div class="item">
      <div class="left">
        <van-image round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleComment',
};
</script>

<style lang="less" scoped>
.article-comment {
  .item {
    .van-image {
      width: 72px;
      height: 72px;
    }
  }
}
.clearfix::after {
  content: ' ';
  display: block;
  clear: both;
  height: 0;
  visibility: 0;
  font-size: 0;
}
</style>
