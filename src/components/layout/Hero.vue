<template functional>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title" v-if="props.title">
          <b-icon v-if="props.icon" :icon="props.icon"></b-icon>
          {{ props.title }}
        </h1>

        <h2 class="subtitle" v-if="props.subtitle">
          {{ props.subtitle }}
        </h2>

        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'trpg-hero',

    functional: true,

    props: {
      title: {
        type: String,
      },

      subtitle: {
        type: String,
      },

      icon: {
        type: String,
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/variables';

  h1 {
    color: $theme-color-2;
  }
</style>
