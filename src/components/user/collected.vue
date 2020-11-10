<template>
  <div>
    <van-icon @click="collected" :name="is_collected ? 'star' : 'star-o'" />
  </div>
</template>

<script>
import { articleCollectionsAjax, cancelArticleCollectionsAjax } from '@/api/users';

export default {
  name: 'Collected',
  props: {
    is_collected: {
      type: Boolean,
      required: true,
    },
    userId: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    async collected() {
      if (!this.is_collected) {
        try {
          await articleCollectionsAjax({ target: parseInt(this.userId, 10) });
          this.$emit('Collected-Event', true);
        } catch (err) {
          console.log('失败');
        }
      } else {
        try {
          await cancelArticleCollectionsAjax(this.userId);
          this.$emit('Collected-Event', false);
        } catch (err) {
          console.log('失败');
        }
      }
    },
  },
  watch: {
    is_collected(newV) {
      console.log(11, newV);
    },
  },
};
</script>

<style lang="less" scoped></style>
