import { Toast } from 'vant';

export default function(promise, erorProp) {
  return promise
    .then((data) => {
      return [null, data];
    })
    .catch((err) => {
      let msg = erorProp ? erorProp.errmsg : err.response;
      Toast(msg);
      return [err.response, null];
    });
}
