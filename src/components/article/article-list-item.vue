<template>
  <div class="article-list-item">
    <van-cell center :title="articleItem.title" border>
      <div slot="label">
        <div class="label-top" v-if="articleItem.cover.images.length == 3">
          <div class="image-wrap" v-for="(item, index) in articleItem.cover.images" :key="index">
            <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </div>
        </div>
        <div class="label-bottom">
          <span>{{ articleItem.aut_name }}</span>
          <span>{{ articleItem.comm_count }}评论</span>
          <span>{{ articleItem.pubdate | relativeFilter }}</span>
        </div>
      </div>
      <div slot="default" v-if="articleItem.cover.images.length == 1">
        <van-image width="100" height="100" fit="contain" :src="articleItem.cover.images[0]" />
      </div>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    articleItem: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style lang="less" scoped>
.article-list-item {
  .label-top {
    display: flex;
    .image-wrap {
      flex: 1;
      height: 140px;
      margin-right: 6px;
      padding: 10px 0 20px;
    }
  }
}
</style>
