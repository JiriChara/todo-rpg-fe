export default {
  namespaced: true,

  state: {
    isMobileMenuActive: false,
    menu: {
      left: [
        {
          name: 'quests',
          title: 'Quests',
          link: {
            name: 'quests',
          },
          icon: 'sword-cross',
          isActive(route) {
            return route.name === 'quests';
          },
        },

        {
          name: 'inventory',
          title: 'Inventory',
          link: {
            name: 'inventory',
          },
          icon: 'sword',
          isActive(route) {
            return route.name === 'inventory';
          },
        },

        {
          name: 'party',
          title: 'Party',
          link: {
            name: 'party',
          },
          icon: 'account-multiple',
          isActive(route) {
            return route.name === 'party';
          },
        },
      ],

      right: [],
    },
  },

  actions: {
    toggleMobileMenu({ commit }) {
      commit('toggleMobileMenu');
    },

    hideMobileMenu({ commit }) {
      commit('hideMobileMenu');
    },
  },

  mutations: {
    toggleMobileMenu(state) {
      state.isMobileMenuActive = !state.isMobileMenuActive;
    },

    hideMobileMenu(state) {
      state.isMobileMenuActive = false;
    },
  },

  getters: {
    getNavItem(state) {
      return name => state.menu.left.find(i => i.name === name) ||
        state.menu.right.find(i => i.name === name);
    },
  },
};
