/* eslint-disable implicit-arrow-linebreak */

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '../store';

export enum RouteName {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  INFORMATIONS = 'INFORMATIONS',
  INFORMATIONS_EDIT = 'INFORMATIONS_EDIT',
  DOCUMENTS = 'DOCUMENTS',
  DOCUMENTS_DETAIL = 'DOCUMENTS_DETAIL',
  LICENSEES = 'LICENSEES',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.LOGIN,
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/accueil',
    name: RouteName.DASHBOARD,
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue'),
  },
  {
    path: '/informations',
    name: RouteName.INFORMATIONS,
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "Informations/index" */ '../views/Informations/index.vue'),
  },
  {
    path: '/informations/edit',
    name: RouteName.INFORMATIONS_EDIT,
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "Informations/Edit" */ '../views/Informations/Edit.vue'),
  },
  {
    path: '/documents',
    name: RouteName.DOCUMENTS,
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "Documents/index" */ '../views/Documents/index.vue'),
  },
  {
    path: '/documents/detail',
    name: RouteName.DOCUMENTS_DETAIL,
    component: () =>
      import(/* webpackChunkName: "Documents/Detail" */ '../views/Documents/Detail.vue'),
  },
  {
    path: '/licensees',
    name: RouteName.LICENSEES,
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "Licensee" */ '../views/Licensee.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = await store.getters['authenticatedUser/user'];
  console.log(currentUser);
  if (requiresAuth && !currentUser) {
    sessionStorage.setItem('redirectPath', to.path);
    next('/');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
