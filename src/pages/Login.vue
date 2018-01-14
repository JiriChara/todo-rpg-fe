<template>
  <div>
    <trpg-hero
      :title="menuItem.title"
      :icon="menuItem.icon">
    </trpg-hero>

    <section class="section">
      <div class="container">
        <trpg-login-form @submit="onSubmit">
        </trpg-login-form>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import router from '@/router';
  import TrpgLoginForm from '@/components/login/Form';
  import TrpgHero from '@/components/layout/Hero';

  export default {
    name: 'login',

    components: {
      TrpgLoginForm,
      TrpgHero,
    },

    computed: {
      ...mapGetters('navbar', [
        'getNavItem',
      ]),

      menuItem() {
        return this.getNavItem('login');
      },
    },

    methods: {
      ...mapActions('tokens', {
        createToken: 'create',
      }),

      onSubmit(auth) {
        this.$Progress.start();

        return this.createToken({ data: { auth } })
          .then(() => {
            router.push({ name: 'quests' });

            this.$snackbar.open({
              message: 'Successfully logged in.',
              type: 'is-success',
            });

            this.$Progress.finish();
          })
          .catch(() => {
            this.$snackbar.open({
              message: 'Can\'t login',
              type: 'is-danger',
            });

            this.$Progress.fail();
          });
      },
    },
  };
</script>
