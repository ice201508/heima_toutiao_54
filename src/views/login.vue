<template>
  <div>
    <van-nav-bar title="登录">
      <template #left>
        <van-icon name="cross" size="18" />
      </template>
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      >
        <i slot="left-icon" class="iconfont iconwode"></i>
      </van-field>
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        left-icon="iconfont iconyanzhengma"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      >
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" disabled native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style lang="less" scoped></style>
