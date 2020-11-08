import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/text',
    component: () => import('@/views/text'),
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        component: () => import('@/views/home'),
      },
      {
        path: 'qa',
        component: () => import('@/views/qa'),
      },
      {
        path: 'video',
        component: () => import('@/views/video'),
      },
      {
        path: 'my',
        component: () => import('@/views/my'),
      },
      {
        path: 'search',
        component: () => import('@/views/search'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
