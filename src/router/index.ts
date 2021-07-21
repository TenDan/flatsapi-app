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
      title: 'Strona główna',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../layouts/Dashboard.layout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard Index',
        component: () => import('../views/Dashboard/Index.vue'),
        meta: {
          title: 'Panel główny',
        },
      },
      {
        path: 'flats',
        name: 'Flats',
        component: () => import('../views/Dashboard/Flats.vue'),
        meta: {
          title: 'Mieszkania',
        },
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('../views/Dashboard/Settings.vue'),
        meta: {
          title: 'Ustawienia',
        },
      },
      {
        path: 'tenants',
        name: 'Tenants',
        component: () => import('../views/Dashboard/Tenants.vue'),
        meta: {
          title: 'Lokatorzy',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Log In',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: 'Sign Up',
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} - ${PAGE_TITLE}`;
  });
});

export default router;
