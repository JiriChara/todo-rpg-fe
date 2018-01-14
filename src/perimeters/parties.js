import BasePerimeter from '@/perimeters/BasePerimeter';

export default new BasePerimeter({
  purpose: 'parties',

  can: {
    viewSingle() {
      return this.isLoggedIn();
    },

    viewList() {
      return this.isLoggedIn();
    },
  },
});
