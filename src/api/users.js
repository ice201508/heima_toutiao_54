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
export const recommonArticle = (params) => {
  return request({
    url: config.articles,
    method: 'GET',
    params,
  });
};

// 获取用户频道的接口
export const userChannels = () => {
  return request({
    url: config.userChannels,
    method: 'GET',
  });
};

// 获取所有频道接口
export const allChannelsAjax = () => {
  return request({
    url: config.allChannels,
    method: 'GET',
  });
};

// 添加用户频道接口
export const addUserChannelsAjax = (channels) => {
  return request({
    url: config.addUserChannels,
    method: 'PATCH',
    data: {
      channels: [channels],
    },
  });
};

// 删除用户频道接口
export const deleteUserChannelsAjax = (id) => {
  return request({
    url: config.deleteUserChannels + id,
    method: 'DELETE',
  });
};
