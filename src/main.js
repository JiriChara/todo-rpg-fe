import Vue from 'vue';
import Buefy from 'buefy';
import { sync } from 'vuex-router-sync';

import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/css/main.scss';

Vue.config.productionTip = false;

sync(store, router);

/**
 * Plugins
 */
Vue.use(Buefy);

const app = new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
});

router.onReady(() => {
  app.$mount('#app');
});
