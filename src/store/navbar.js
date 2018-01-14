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
          permissions: {
            name: 'quests',
            action: 'viewList',
          },
        },

        {
          name: 'inventory',
          title: 'Inventory',
          link: {
            name: 'inventory',
          },
          icon: 'sword',
          permissions: {
            name: 'inventories',
            action: 'viewSingle',
          },
        },

        {
          name: 'party',
          title: 'Party',
          link: {
            name: 'party',
          },
          icon: 'account-multiple',
          permissions: {
            name: 'parties',
            action: 'viewSingle',
          },
        },
      ],

      right: [
        {
          name: 'login',
          title: 'Login',
          link: {
            name: 'login',
          },
          icon: 'login',
          permissions: {
            name: 'login',
            action: 'login',
          },
        },
      ],
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

    isActive(state, getters) {
      return (name, route) => getters.getNavItem(name).name === route.name;
    },
  },
};
