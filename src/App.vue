<template>
  <div id="app">
    <trpg-navbar></trpg-navbar>

    <main>
      <router-view/>
      <vue-progress-bar></vue-progress-bar>
    </main>
  </div>
</template>

<script>
  import TrpgNavbar from '@/components/layout/Navbar';

  export default {
    name: 'app',

    components: {
      TrpgNavbar,
    },

    created() {
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start();

        next();
      });

      this.$router.afterEach(() => {
        this.$Progress.finish();
      });
    },

    mounted() {
      this.$Progress.finish();
    },
  };
</script>
