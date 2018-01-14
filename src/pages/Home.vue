<template>
  <div>
    <trpg-hero :title="title"></trpg-hero>

    <div class="section">
      <div class="container">
        <div class="content">
          ...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TrpgHero from '@/components/layout/Hero';

  export default {
    name: 'home',

    components: {
      TrpgHero,
    },

    data() {
      return {
        title: 'Welcome Warrior!',
      };
    },
  };
</script>
