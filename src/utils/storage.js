import config from '@/config/url.config';

export const setItem = function(data) {
  let tmp = null;
  if (typeof data === 'object') {
    tmp = JSON.stringify(data);
  }
  localStorage.setItem(config.toutiao_token, tmp);
};

export const getItem = function() {
  let tmp = localStorage.getItem(config.toutiao_token);

  try {
    return tmp ? tmp : '';
  } catch (err) {
    console.log(err);
    return tmp ? JSON.parse(tmp) : '';
  }
};
