import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

export enum RouteName {
  DASHBOARD = 'DASHBOARD',
  INFORMATIONS = 'INFORMATIONS',
  INFORMATIONS_EDIT = 'INFORMATIONS_EDIT',
  DOCUMENTS = 'DOCUMENTS',
  LICENSEES = 'LICENSEES',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.DASHBOARD,
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/informations',
    name: RouteName.INFORMATIONS,
    component: () => import(/* webpackChunkName: "about" */ '../views/Informations/index.vue'),
  },
  {
    path: '/informations/edit',
    name: RouteName.INFORMATIONS_EDIT,
    component: () => import(/* webpackChunkName: "about" */ '../views/Informations/Edit.vue'),
  },
  {
    path: '/documents',
    name: RouteName.DOCUMENTS,
    component: () => import(/* webpackChunkName: "about" */ '../views/Documents/Detail.vue'),
  },
  {
    path: '/licensees',
    name: RouteName.LICENSEES,
    component: () => import(/* webpackChunkName: "about" */ '../views/Licensee.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
