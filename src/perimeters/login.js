import BasePerimeter from '@/perimeters/BasePerimeter';

export default new BasePerimeter({
  purpose: 'login',

  can: {
    login() {
      return !this.isLoggedIn();
    },
  },
});
