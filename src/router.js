import Vue from 'vue';
import Router from 'vue-router';
import Homepage from './views/Homepage.vue';
import Auth from './views/Auth.vue';
import YourTournaments from './views/YourTournaments.vue';
import CreateTournament from './views/CreateTournament.vue';
import Dashboard from './views/Dashboard.vue';
import TableTennis from './views/TableTennis';
import TableFootball from './views/TableFootball';
import AirHockey from './views/AirHockey';
import Checkers from './views/Checkers';
import MK11 from './views/MK11';
import Tekken7 from './views/Tekken7';
import NotFound from './views/NotFound';

// Lazy Routes
const Tournament = () => import('./views/Tournament.vue');

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
      path: '/your-tournaments',
      name: 'your-tournaments',
      component: YourTournaments,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/create-your-tournament',
      name: 'create-your-tournament',
      component: CreateTournament,
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
    {
      path: '/table-tennis',
      name: 'table-tennis',
      component: TableTennis,
    },
    {
      path: '/table-football',
      name: 'table-football',
      component: TableFootball,
    },
    {
      path: '/air-hockey',
      name: 'air-hockey',
      component: AirHockey,
    },
    {
      path: '/checkers',
      name: 'checkers',
      component: Checkers,
    },
    {
      path: '/mk11',
      name: 'mk11',
      component: MK11,
    },
    {
      path: '/tekken7',
      name: 'tekken7',
      component: Tekken7,
    },
    {
      path: '/tournament',
      name: 'tournament',
      component: Tournament,
    },
    {
      path: '*',
      component: NotFound,
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
