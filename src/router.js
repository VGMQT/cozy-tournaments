import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import Auth from './views/Auth.vue';
import Account from './views/Account.vue';
import Dashboard from './views/Dashboard.vue';
import Tennis from './views/Tennis';
import Football from './views/Football';
import Checkers from './views/Checkers';
import Hockey from './views/Hockey';
import NotFound from './views/NotFound';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        guest: true,
      },
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
        isAdmin: true,
      },
    },
    { path: '/tennis', component: Tennis },
    { path: '/football', component: Football },
    { path: '/checkers', component: Checkers },
    { path: '/hockey', component: Hockey },
    { path: '*', component: NotFound },
    {
      path: '/tournaments',
      name: 'tournaments',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tournaments.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      next({
        path: '/auth',
        params: { nextUrl: to.fullPath },
      });
    } else {
      let user = JSON.parse(localStorage.getItem('user'));

      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.isAdmin === true) {
          next();
        } else {
          next({ name: 'account' });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') === null) {
      next();
    } else {
      next({ name: 'account' });
    }
  } else {
    next();
  }
});

export default router;
