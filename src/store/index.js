import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/config/url.config';
import { getItem, setItem } from '@/utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getItem(config.toutiao_token),
    channels: [],
  },
  mutations: {
    setItem(state, payload) {
      state.token = payload;
      setItem(config.toutiao_token, payload);
    },
  },
  actions: {},
  modules: {},
});
