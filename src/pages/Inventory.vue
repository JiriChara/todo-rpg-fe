<template>
  <main>
    <trpg-hero
      :title="menuItem.title"
      :icon="menuItem.icon">
    </trpg-hero>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TrpgHero from '@/components/layout/Hero';

  export default {
    name: 'inventory',

    components: {
      TrpgHero,
    },

    computed: {
      ...mapGetters('navbar', [
        'getNavItem',
      ]),

      menuItem() {
        return this.getNavItem('inventory');
      },
    },
  };
</script>
