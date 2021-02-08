import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/informations',
    name: 'Informations',
    component: () => import(/* webpackChunkName: "about" */ '../views/Informations.vue'),
  },
  {
    path: '/informations/edition',
    name: 'EDIT Informations',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditInformations.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
