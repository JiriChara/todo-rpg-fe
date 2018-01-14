import BasePerimeter from '@/perimeters/BasePerimeter';

export default new BasePerimeter({
  purpose: 'logout',

  can: {
    logout() {
      return this.isLoggedIn();
    },
  },
});
