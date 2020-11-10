import axios from 'axios';
import JsonBigint from 'json-bigint';
import store from '@/store';
import config from '@/config/url.config';
import { getItem } from '@/utils/storage';
import router from '../router';

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  baseURL: config.baseURL,
  transformResponse: [
    function(data) {
      try {
        return JsonBigint.parse(data);
      } catch (err) {
        return data;
      }
    },
  ],
});

request.interceptors.request.use(
  function(configAxios) {
    if (getItem(config.toutiao_token)) {
      configAxios.headers.Authorization = 'Bearer ' + getItem(config.toutiao_token).token;
    }
    return configAxios;
  },
  function(error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    // 响应失败的拦截器，上面是请求成功的拦截器
    // console.dir(error.response);
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.statusText == 'UNAUTHORIZED'
    ) {
      console.log(123);
      axios({
        url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
        method: 'PUT',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer ' + getItem(config.toutiao_token).refresh_token,
        },
      }).then((res) => {
        store.commit('setItem', {
          token: res.data.data.token,
          refresh_token: getItem(config.toutiao_token).refresh_token,
        });
        console.log(111, res, error.config);
        router.go(0);
        return request(error.config);
      });
    }
    return Promise.reject(error);
  }
);

export default request;
