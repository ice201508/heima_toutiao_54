import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/keepalive',
    name: 'keepalive1',
    component: () => import('@/views/keepalive'),
    children: [
      {
        path: 'test1',
        name: 'test1',
        meta: {
          keepAlive: true,
        },
        component: () => import('@/views/text1'),
      },
      {
        path: 'test2',
        name: 'test2',
        component: () => import('@/views/text2'),
      },
    ],
  },
  // {
  //   path: '/test1',
  //   name: 'test1',
  //   meta: {
  //     keepAlive: true,
  //   },
  //   component: () => import('@/views/text1'),
  // },
  // {
  //   path: '/test2',
  //   name: 'test2',
  //   component: () => import('@/views/text2'),
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search'),
  },
  {
    path: '/article/:articleId',
    props: true,
    name: 'article',
    component: () => import('@/views/article'),
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home22',
        meta: {
          keepAlive: true,
        },
        component: () => import('@/views/home'),
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa'),
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video'),
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    // //scrollBehavior方法接收to，form路由对象
    // //第三个参数savedPosition当且仅当在浏览器前进后退按钮触发时才可用
    // //该方法会返回滚动位置的对象信息，如果返回false，或者是一个空的对象，那么不会发生滚动
    // //我们可以在该方法中设置返回值来指定页面的滚动位置，例如：
    //  return {x:0,y:0}
    // //表示在用户切换路由时让是所有页面都返回到顶部位置
    // //如果返回savedPosition,那么在点击后退按钮时就会表现的像原生浏览器一样，返回的页面会滚动过到之前按钮点击跳转的位置，大概写法如下：
    //  if(savedPosition){
    //     return savedPosition
    //  }else{
    //    return {x:0,y:0}
    //  }
    //  //如果想要模拟滚动到锚点的行为:
    //  if(to.hash){
    //    return {
    //      selector:to.hash
    //    }
    //  }
  },
});

export default router;
