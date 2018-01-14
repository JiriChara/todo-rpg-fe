import BasePerimeter from '@/perimeters/BasePerimeter';

export default new BasePerimeter({
  purpose: 'inventories',

  can: {
    viewSingle() {
      return this.isLoggedIn();
    },

    viewList() {
      return this.isLoggedIn();
    },
  },
});
