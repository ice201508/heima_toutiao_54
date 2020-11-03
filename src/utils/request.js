import axios from 'axios';
import config from '@/config/url.config';

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  baseURL: config.baseURL,
});

request.interceptors.request.use(
  function(configAxios) {
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
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
