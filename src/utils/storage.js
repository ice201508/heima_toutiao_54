export const setItem = function(data) {
  let tmp = null;
  if (typeof data === 'object') {
    tmp = JSON.stringify(data);
  }
  localStorage.setItem('token', tmp);
};

export const getItem = function() {
  let tmp = localStorage.getItem('token');

  try {
    return localStorage.getItem('token') ? localStorage.getItem('token') : '';
  } catch (err) {
    console.log(err);
    return localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';
  }
};
