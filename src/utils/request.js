import axios from 'axios';
import config from '@/config/url.config';
import { getItem } from '@/utils/storage';

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  baseURL: config.baseURL,
});
console.log(getItem(config.toutiao_token).token);

request.interceptors.request.use(
  function(configAxios) {
    configAxios.headers.Authorization = 'Bearer ' + getItem(config.toutiao_token)?.token;
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
    // console.log(error.response);
    return Promise.reject(error);
  }
);

export default request;
