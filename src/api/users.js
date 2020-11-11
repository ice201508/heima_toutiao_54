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

// 获取搜索建议的接口
export const searchSuggestionAjax = (params) => {
  return request({
    url: config.searchSuggestion,
    method: 'GET',
    params,
  });
};

// 获取搜索建议的接口
export const searchResultAjax = (params) => {
  return request({
    url: config.searchResult,
    method: 'GET',
    params,
  });
};

// 获取文章详情
export const articleDetailAjax = (article_id) => {
  return request({
    url: config.articleDetail + article_id,
    method: 'GET',
  });
};

// 关注用户
export const userFollowingsAjax = (data) => {
  return request({
    url: config.userFollowings,
    method: 'POST',
    data,
  });
};

// 取消关注用户
export const cancelUserFollowingsAjax = (id) => {
  return request({
    url: config.cancelUserFollowings + id,
    method: 'DELETE',
  });
};

// 收藏用户
export const articleCollectionsAjax = (data) => {
  return request({
    url: config.articleCollections,
    method: 'POST',
    data,
  });
};

// 取消收藏用户
export const cancelArticleCollectionsAjax = (id) => {
  return request({
    url: config.cancelArticleCollections + id,
    method: 'DELETE',
  });
};

// 获取评论
export const commentsAndRePlayAjax = (params) => {
  return request({
    url: config.commentsAndRePlay,
    method: 'GET',
    params,
  });
};
