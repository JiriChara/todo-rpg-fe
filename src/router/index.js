import Vue from 'vue';
import Router from 'vue-router';

import store from '@/store';

const Quests = () => import('@/pages/Quests');
const Inventory = () => import('@/pages/Inventory');
const Party = () => import('@/pages/Party');

Vue.use(Router);

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'quests',
      component: Quests,
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

router.beforeEach((to, from, next) => {
  // Hide mobile menu when changing route
  store.dispatch('navbar/hideMobileMenu');

  next();
});

export default router;
