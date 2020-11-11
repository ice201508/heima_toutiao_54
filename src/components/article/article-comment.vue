<template>
  <div class="article-comment">
    <div class="item clearfix" v-for="item in 7" :key="item">
      <van-image class="one" round fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div class="two">
        <div class="t-title">张三</div>
        <div class="t-content">评论正文内容部分</div>
        <div class="time">
          <span>三天前</span>
          <van-button type="default" round>回复0</van-button>
        </div>
      </div>
      <div class="three">
        <van-icon name="good-job-o" />
        <span>赞</span>
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
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ebe5e5;
    .one.van-image {
      width: 72px;
      height: 72px;
      float: left;
    }
    .two {
      float: left;
      margin-left: 20px;
      font-size: 24px;
      .t-title {
        color: cornflowerblue;
        font-size: 32px;
      }
      .t-content {
        font-size: 28px;
        margin: 30px 0;
        color: #000;
      }
      .time {
        .van-button {
          margin-left: 20px;
          font-size: 24px;
          height: 44px;
        }
      }
    }
    .three {
      float: right;
      font-size: 30px;
      .van-icon {
        font-size: 36px;
      }
      span {
        margin-left: 8px;
        position: relative;
        top: -6px;
      }
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
