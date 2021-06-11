import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const PAGE_TITLE = 'Flat of Blocks';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: `Strona główna - ${PAGE_TITLE}`
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: `Panel główny - ${PAGE_TITLE}`
    }
  },
  {
    path: '/flats',
    name: 'Flats',
    component: () => import('../views/Flats.vue'),
    meta: {
      title: `Mieszkania - ${PAGE_TITLE}`
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: `Ustawienia - ${PAGE_TITLE}`
    }
  },
  {
    path: '/tenants',
    name: 'Tenants',
    component: () => import('../views/Tenants.vue'),
    meta: {
      title: `Lokatorzy - ${PAGE_TITLE}`
    }
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
