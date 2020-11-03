import Vue from 'vue';
import Vuex from 'vuex';
import { getItem, setItem } from '@/utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getItem(),
  },
  mutations: {
    setItem(state, payload) {
      state.token = payload;
      setItem(payload);
    },
  },
  actions: {},
  modules: {},
});
