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
];

const router = new VueRouter({
  routes,
});

export default router;
