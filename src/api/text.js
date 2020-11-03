import request from '@/utils/request';
import config from '@/config/url.config';

export function textAjax() {
  // return Promise.resolve(123);
  return request({
    url: config.apiGetBooks,
    method: 'GET',
  });
}

export default {
  textAjax,
};
