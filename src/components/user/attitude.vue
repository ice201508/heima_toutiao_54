<template>
  <div>
    <van-icon :name="attitude == 1 ? 'good-job' : 'good-job-o'" />
  </div>
</template>

<script>
export default {
  name: 'Attitude',
  props: {
    attitude: {
      type: Number,
      required: true,
    },
    userId: {
      type: [Number, String, Object],
      required: true,
    },
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
