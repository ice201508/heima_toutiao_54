import Vue from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);
// console.log(dayjs());
// console.log(dayjs().to(dayjs('2020-11-07T17:39:07')));

Vue.filter('relativeFilter', (value) => {
  return dayjs().to(dayjs(value));
});
