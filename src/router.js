import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import Account from './views/Account.vue';
import Tennis from './views/Tennis';
import Football from './views/Football';
import Checkers from './views/Checkers';
import Hockey from './views/Hockey';
import NotFound from './views/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
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
