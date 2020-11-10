export default {
  // token本地储存关键字 常量
  toutiao_token: 'TOUTIAO_TOKEN',
  // baseURL: 'http://www.liulongbin.top:3006',
  baseURL: 'http://ttapi.research.itcast.cn',
  // 图书类请求, 获取图书列表
  apiGetBooks: '/app/v1_0/api/getbooks',
  // 用户登录
  login: '/app/v1_0/authorizations',
  // 获取验证码
  smsCodes: '/app/v1_0/sms/codes/',
  // 获取频道新闻推荐
  articles: '/app/v1_1/articles',
  // 获取我的频道列表
  userChannels: '/app/v1_0/user/channels',
  // 获取所有频道列表 --- 可以据此推算出推荐频道
  allChannels: '/app/v1_0/channels',
  // 添加 用户频道
  addUserChannels: '/app/v1_0/user/channels',
  // 删除 用户频道
  deleteUserChannels: '/app/v1_0/user/channels/',

  // =========================
  // 搜索建议接口
  searchSuggestion: '/app/v1_0/suggestion',
  // 获取用户搜索结果
  searchResult: '/app/v1_0/search',

  // 获取文章详情
  articleDetail: '/app/v1_0/articles/',

  // 关注用户
  userFollowings: '/app/v1_0/user/followings',
  // 取消关注用户
  cancelUserFollowings: '/app/v1_0/user/followings/',
  // 收藏文章
  articleCollections: '/app/v1_0/article/collections',
  // 取消收藏文章
  cancelArticleCollections: '/app/v1_0/article/collections/',
};
