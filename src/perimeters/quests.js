import BasePerimeter from '@/perimeters/BasePerimeter';

export default new BasePerimeter({
  purpose: 'quests',

  can: {
    route() {
      return this.isLoggedIn();
    },

    viewSingle() {
      return this.isLoggedIn();
    },

    viewList() {
      return this.isLoggedIn();
    },
  },
});
