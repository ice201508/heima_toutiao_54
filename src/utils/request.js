import axios from 'axios';

const request = axios.create({
  baseUrl: 'http://ttapi.research.itcast.cn/app/v1_0/',
});

export default request;
