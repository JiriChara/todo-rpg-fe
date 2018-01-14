import Vue from 'vue';
import Buefy from 'buefy';
import VueKindergarten from 'vue-kindergarten';
import Vuelidate from 'vuelidate';
import VueProgressBar from 'vue-progressbar';
import { sync } from 'vuex-router-sync';

import App from '@/App';
import router from '@/router';
import store from '@/store';
import child from '@/child';

import '@/css/main.scss';

Vue.config.productionTip = false;

sync(store, router);

/**
 * Plugins
 */
Vue.use(Buefy);

Vue.use(VueKindergarten, {
  child,
});

Vue.use(Vuelidate);

Vue.use(VueProgressBar, {
  color: '#41bee6',
  thickness: '3px',
});

const app = new Vue({
  template: '<App/>',
  components: { App },
  router,
  store,
});

router.onReady(() => {
  app.$mount('#app');
});
