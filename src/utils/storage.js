export const setItem = function(key, data) {
  let tmp = null;
  if (typeof data === 'object') {
    tmp = JSON.stringify(data);
  }
  localStorage.setItem(key, tmp);
};

export const getItem = function(key) {
  let tmp = localStorage.getItem(key);

  try {
    return tmp ? JSON.parse(tmp) : '';
  } catch (err) {
    return null;
  }
};
