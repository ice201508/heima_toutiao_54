<template>
  <div class="article-container">
    <van-nav-bar title="黑马头条" left-arrow @click-left="$router.back()" />

    <!-- 文章详情 -->
    <div class="detail-error" v-if="!isLoading">
      <van-loading size="24px" vertical>加载中1...</van-loading>
    </div>
    <div class="detail" v-else-if="isLoading && articleDetail">
      <div class="d-title">{{ articleDetail.title }}</div>
      <div class="d-qita clearfix">
        <van-image class="img-btn" round fit="cover" :src="articleDetail.aut_photo" />
        <div class="author">
          <div class="author-name">{{ articleDetail.aut_name }}</div>
          <div class="author-time">{{ articleDetail.pubdate | relativeFilter }}</div>
        </div>
        <van-button
          @click="setUserFollowings(articleDetail)"
          class="guanzhu-btn"
          :icon="articleDetail.is_followed ? '' : 'plus'"
          :loading="guanzhuLoading"
          :loading-text="articleDetail.is_followed ? '取消关注中...' : '关注中...'"
          :type="articleDetail.is_followed ? 'default' : 'info'"
          round
        >
          <van-loading v-if="guanzhuLoading"></van-loading>
          <span v-else>{{ articleDetail.is_followed ? '已关注' : '关注' }}</span></van-button
        >
      </div>
      <div ref="articleDetail" class="d-detail markdown-body" v-html="articleDetail.content"></div>
    </div>
    <div v-else-if="isLoading && errorStatus == 404">
      <van-empty image="error" description="文章没有找到" />
    </div>
    <div v-else>
      <van-empty image="network" description="网络失败" />
    </div>

    <!-- 评论部分 -->
    <div class="comment-bottom" v-if="articleDetail">
      <div class="cb-write-comment">写评论</div>
      <div>
        <van-icon
          name="comment-o"
          :badge="articleDetail.recomments.length == 0 ? '' : articleDetail.recomments.length"
        />
      </div>
      <div>
        <collected
          :is_collected="articleDetail.is_collected"
          :userId="articleDetail.art_id"
          @Collected-Event="collectedEventHandler"
        />
      </div>
      <div>
        <attitude :attitude="articleDetail.attitude" :userId="articleDetail.art_id" />
      </div>
      <div>
        <van-icon name="share-o" @click="showShare = true" />
      </div>
    </div>

    <!-- 分享结构 -->
    <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
  </div>
</template>

<script>
import { articleDetailAjax, userFollowingsAjax, cancelUserFollowingsAjax } from '@/api/users';
import { ImagePreview } from 'vant';
import Collected from '@/components/user/collected.vue';
import Attitude from '@/components/user/attitude.vue';

export default {
  name: 'Article',
  props: {
    articleId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      articleDetail: null,
      isLoading: false,
      errorStatus: 0,
      showShare: false,
      guanzhuLoading: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    };
  },
  components: {
    Collected,
    Attitude,
  },
  created() {
    this.getArticleDetails();
  },
  methods: {
    async getArticleDetails() {
      try {
        // throw new Error('自己抛出一个错误');
        const res = await articleDetailAjax(this.articleId);
        this.articleDetail = res.data;

        this.$nextTick(() => {
          this.preview();
        });
      } catch (err) {
        if (err.response && err.response.status === 404) {
          this.errorStatus = 404;
        }
      }
      this.isLoading = true;
    },
    preview() {
      const el = this.$refs.articleDetail;
      let imgArr = [];
      el.querySelectorAll('img').forEach((item, index) => {
        // console.log(item.src, index);
        imgArr.push(item.src);
        item.addEventListener('click', function() {
          ImagePreview({
            images: imgArr,
            // closeable: true,
            startPosition: index,
          });
        });
      });
    },
    async setUserFollowings(val) {
      this.guanzhuLoading = true;
      if (val.is_followed) {
        try {
          await cancelUserFollowingsAjax(val.aut_id);
          // 取消关注成功
          val.is_followed = false;
        } catch (err) {
          if (err.response && err.response.status == 400) {
            this.$toast('用户不能关注自己');
          }
        }
      } else {
        try {
          await userFollowingsAjax({
            target: val.aut_id,
          });
          // 关注成功
          val.is_followed = true;
        } catch (err) {
          if (err.response && err.response.status == 400) {
            this.$toast('用户不能关注自己');
          }
        }
      }
      this.guanzhuLoading = false;
    },
    collectedEventHandler(val) {
      console.log(val);
      this.articleDetail.is_collected = val;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../style/github-markdown.css';

.article-container {
  .detail {
    height: 84vh;
    overflow-y: auto;
    // padding: 92px 0 90px;
    padding: 16px 30px;
    .d-title {
      margin: 16px 0;
      font-size: 40px;
      font-weight: 700;
    }
    .d-qita {
      height: 84px;
      font-size: 30px;
      margin: 30px 0;
      .img-btn {
        width: 84px;
        height: 84px;
        float: left;
      }
      .author {
        float: left;
        font-size: 24px;
        margin-left: 20px;
        .author-time {
          margin-top: 18px;
          color: #d8d8d8;
        }
      }
      .guanzhu-btn {
        float: right;
        height: 60px;
        padding: 0 60px;
        margin-top: 12px;
      }
    }
    /deep/.d-detail {
      font-size: 30px;
      img {
        width: 100%;
      }
    }
  }
}
.detail-error {
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.clearfix::after {
  content: ' ';
  display: block;
  height: 0;
  font-size: 0;
  clear: both;
  visibility: hidden;
}

.comment-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 88px;
  border-top: 1px solid #d8d8d8;
  .cb-write-comment {
    width: 282px;
    height: 46px;
    color: #bab8b8;
    border: 1px solid #e2e2e2;
    font-size: 30px;
    border-radius: 46px;
    text-align: center;
    cursor: pointer;
    &:active {
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
  .van-icon {
    color: #bab8b8;
    font-size: 40px;
  }
}
</style>
