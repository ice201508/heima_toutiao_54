<template>
  <div class="channel-edit">
    <!-- 我的频道 -->
    <van-cell title="我的频道">
      <template #default>
        <van-button class="edit-btn" size="mini" type="danger" round plain @click="mychannelEdit">{{
          showEditIcon ? '完成' : '编辑'
        }}</van-button>
      </template>
    </van-cell>
    <van-grid :gutter="10" direction="horizontal">
      <van-grid-item
        class="my-channel"
        :class="{ 'show-edit-icon': showEditIcon && item.id != 0, active: item.id == active }"
        v-for="item in channels"
        :key="item.id"
        :text="item.name"
        icon="clear"
        @click="changeChannel(item)"
      />
    </van-grid>
    <!-- 推荐频道 -->
    <van-cell title="推荐频道"></van-cell>
    <van-grid :gutter="10" direction="horizontal">
      <van-grid-item
        class="recommend-channel"
        v-for="item in recommendChannel"
        :key="item.id"
        :text="item.name"
        icon="plus"
        @click="addChannel(item)"
      />
    </van-grid>
  </div>
</template>

<script>
import { allChannelsAjax, addUserChannelsAjax, deleteUserChannelsAjax } from '@/api/users';
import { mapState } from 'vuex';
import { setItem } from '@/utils/storage';

export default {
  name: 'channelEdit',
  // props: ['channels']
  props: {
    channels: {
      type: Array,
      required: true,
    },
    active: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      showEditIcon: false,
      allChannels: [],
    };
  },
  created() {
    this.getAllChannels();
  },
  methods: {
    async getAllChannels() {
      try {
        const res = await allChannelsAjax();
        this.allChannels = res.data.channels;
      } catch (err) {
        this.$toast('所有频道请求失败，请重试');
      }
    },
    mychannelEdit() {
      this.showEditIcon = !this.showEditIcon;
    },
    async addChannel(val) {
      if (this.token) {
        try {
          await addUserChannelsAjax({
            id: val.id,
            seq: this.channels.length,
          });
          this.channels.push(val);
        } catch (err) {
          this.$toast('添加频道失败');
        }
      } else {
        // 未登录
        this.channels.push(val);
        setItem('TOUTIAO_CHANNELS', this.channels);
      }
    },
    async deleteChannel(id) {
      // 已登录发请求储存在服务器
      // 未登录储存在本地
      if (this.token) {
        try {
          await deleteUserChannelsAjax(id);
        } catch (err) {
          console.dir(err);
        }
      } else {
        setItem('TOUTIAO_CHANNELS', this.channels);
      }
    },
    changeChannel(val) {
      // 如果编辑状态为true，那么这里的操作就是删除频道
      // 如果编辑的状态为false，那么这里的操作就是切换频道
      if (this.showEditIcon) {
        let index = this.channels.findIndex((item) => item.id == val.id);
        if (index == 0) return null;
        if (index == this.channels.length - 1 && this.active == val.id) {
          this.$emit('CHANGE_CHANNEL_EVENT', {
            id: this.channels[index - 1].id,
            flag: true,
          });
        }
        this.channels.splice(index, 1);
        deleteUserChannelsAjax(val.id);
      } else {
        this.$emit('CHANGE_CHANNEL_EVENT', {
          id: val.id,
          flag: false,
        });
      }
    },
  },
  computed: {
    ...mapState(['token']),
    recommendChannel() {
      return this.allChannels.filter((item) => {
        let index = this.channels.findIndex((childItem) => {
          return item.id === childItem.id;
        });
        return index === -1;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.channel-edit {
  padding-top: 100px;
  /deep/.van-grid {
    .van-grid-item .van-grid-item__content {
      background-color: #f4f5f6;
      height: 86px;
      .van-grid-item__text {
        color: #000;
        font-size: 26px;
      }
    }
    .my-channel {
      .van-grid-item__icon {
        position: absolute;
        top: -8px;
        right: -8px;
        z-index: 2;
        font-size: 26px;
        color: #ccc;
        display: none;
      }
      &.show-edit-icon .van-grid-item__icon {
        display: block;
      }
      &.active .van-grid-item__text {
        color: red;
      }
    }
    .recommend-channel {
      .van-icon.van-grid-item__icon {
        font-size: 28px;
      }
    }
  }
  .van-cell::after {
    border-bottom: none;
  }
  .edit-btn {
    padding: 0 20px;
  }
}
</style>
