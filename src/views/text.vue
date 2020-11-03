<template>
  <div>
    <button @click="getAjax">发请求，测试封装好不好</button>
  </div>
</template>

<script>
import { textAjax } from '@/api/users';

export default {
  name: 'Test',
  methods: {
    async getAjax() {
      const res = await textAjax();
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped></style>
