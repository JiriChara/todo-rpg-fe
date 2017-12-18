<template>
  <div id="app">
    <trpg-navbar></trpg-navbar>

    <router-view/>
  </div>
</template>

<script>
  import TrpgNavbar from '@/components/layout/Navbar';

  export default {
    name: 'app',
    components: {
      TrpgNavbar,
    },
  };
</script>
