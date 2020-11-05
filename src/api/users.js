import request from '@/utils/request';
import config from '@/config/url.config';

export function textAjax(data) {
  // return Promise.resolve(123);
  return request({
    url: config.apiGetBooks,
    method: 'POST',
    data,
  });
}

export const login = function(data) {
  return request({
    url: config.login,
    method: 'POST',
    data,
  });
};

export const smsCodes = function(mobile) {
  return request({
    url: config.smsCodes + mobile,
    method: 'GET',
  });
};

export const userChannels = () => {
  return request({
    url: config.userChannels,
    methods: 'GET',
  });
};

export const recommonArticle = (params) => {
  return request({
    url: config.articles,
    methods: 'GET',
    params,
  });
};
