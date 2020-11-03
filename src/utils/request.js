import axios from 'axios';
import config from '@/config/url.config';

const request = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/v1_0/',
  baseURL: config.baseURL,
});

export default request;
