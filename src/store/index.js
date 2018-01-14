import Vue from 'vue';
import Vuex from 'vuex';

import navbar from '@/store/navbar';
import users from '@/store/users';
import me from '@/store/me';
import tokens from '@/store/tokens';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  modules: {
    navbar,
    users,
    me,
    tokens,
  },
});
