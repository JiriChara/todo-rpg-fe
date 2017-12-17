import Vue from 'vue';
import Router from 'vue-router';

const Dashboard = () => import('@/pages/Dashboard');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
