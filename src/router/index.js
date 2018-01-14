import Vue from 'vue';
import Router from 'vue-router';
import { createSandbox } from 'vue-kindergarten';

import store from '@/store';
import child from '@/child';
import localStore from '@/utils/localStore';
import RouteGoverness from '@/governesses/RouteGoverness';
import { questsPerimeter } from '@/perimeters';

const Home = () => import('@/pages/Home');
const Inventory = () => import('@/pages/Inventory');
const Login = () => import('@/pages/Login');
const Party = () => import('@/pages/Party');
const Quests = () => import('@/pages/Quests');

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'quests',
      component: Quests,
      meta: {
        perimeter: questsPerimeter,
      },
    },

    {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory,
    },

    {
      path: '/party',
      name: 'party',
      component: Party,
    },
  ],
});

const protectRoute = (routeRecord, to, form, next) => {
  const { meta } = routeRecord;
  const { perimeter } = meta;
  const Governess = meta.governess || RouteGoverness;
  const action = meta.perimeterAction || 'route';

  if (perimeter) {
    const sandbox = createSandbox(child(store), {
      governess: new Governess(),

      perimeters: [
        perimeter,
      ],
    });

    const guard = () => sandbox.guard(action, { next });

    return guard();
  }

  return next();
};

router.beforeEach((to, from, next) => {
  // Hide mobile menu when changing route
  store.dispatch('navbar/hideMobileMenu');

  to.matched.some((routeRecord) => {
    if (!child(store) && localStore.get('jwt')) {
      return store.dispatch('me/fetch')
        .then(() => protectRoute(routeRecord, to, from, next))
        .catch(() => {
          store.dispatch('me/logout');
          next('/');
        });
    }

    return protectRoute(routeRecord, to, from, next);
  });
});

export default router;
