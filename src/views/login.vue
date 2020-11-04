<template>
  <div>
    <van-nav-bar title="登录">
      <template #left>
        <van-icon name="cross" size="18" @click="$router.back()" />
      </template>
    </van-nav-bar>
    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        label="手机号"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
      >
        <i slot="left-icon" class="iconfont iconwode"></i>
      </van-field>
      <van-field
        v-model="code"
        type="number"
        name="code"
        label="验证码"
        left-icon="iconfont iconyanzhengma"
        placeholder="验证码"
        :rules="userFormRules.code"
      >
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>
        <template #button>
          <van-button
            native-type="button"
            v-if="!isCountDownShow"
            size="mini"
            type="primary"
            @click="sendCode"
            >发送验证码</van-button
          >
          <van-count-down :time="2 * 1000" format="ss s" @finish="isCountDownShow = false" v-else />
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, smsCodes } from '@/api/users';
import errorHandler from '@/utils/asyncErrorHandler';

export default {
  name: 'Login',
  data() {
    return {
      mobile: '13911111111',
      code: '246810',
      isCountDownShow: false,
      userFormRules: {
        mobile: [
          { required: true, message: '请填写电话' },
          // { pattern: /^1[3|5|6|7|8|9]\d{9}$/, message: '请填写11位数字电话' },
        ],
        code: [
          { required: true, message: '请填写验证码' },
          // { pattern: /^\d{6}$/, message: '请填写6位数字密码' },
        ],
      },
    };
  },
  methods: {
    async onSubmit() {
      const [err, res] = await errorHandler(login({ mobile: this.mobile, code: this.code }), {
        errmsg: '登录失败，请重试',
      });
      if (!err) {
        this.$store.commit('setItem', res.data);
        this.$router.push('/');
      }
      // try {
      //   const res = await login({ mobile: this.mobile, code: this.code }).catch((err) => {
      //     console.log(111, err.response);
      //   });
      // } catch (err) {
      //   console.log(22, err);
      // }
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true,
      // });
      // try {
      //   const res = await login({ mobile: this.mobile, code: this.code });
      //   this.$store.commit('setItem', res.data);
      //   // console.log(res);
      //   // window.localStorage.setItem('token', res.data)
      //   // this.$router.push('/user')
      //   this.$toast.success('登录成功');
      // } catch (err) {
      //   console.log(err);
      //   this.$toast.success(err.message);
      // }
    },
    sendCode() {
      this.$refs.loginForm.validate('mobile').then(async (res) => {
        console.log(res);
        if (!res) {
          this.isCountDownShow = true;
          try {
            await smsCodes(this.mobile);
            this.$toast.success('验证码已发送，请查收');
          } catch (err) {
            this.isCountDownShow = false;
            return console.log(err);
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
