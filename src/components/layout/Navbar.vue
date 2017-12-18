<template>
  <nav class="navbar has-shadow is-fixed-top is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1 class="title is-3">
            <span>T</span>oD<span>o</span> RP<span>G</span>
          </h1>
        </router-link>

        <button
          class="button navbar-burger is-primary"
          :class="{ 'is-active': isMobileMenuActive }"
          @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': isMobileMenuActive }">
        <div class="navbar-start">
          <router-link
            v-for="item in menu.left"
            :key="item.name"
            :to="item.link"
            :class="{ 'is-active': item.isActive(route) }"
            class="navbar-item">
            <b-icon :icon="item.icon"></b-icon>
            {{ item.title }}
          </router-link>
        </div>

        <div class="navbar-end">
          <router-link to="/" class="navbar-item">
            <b-icon icon="bell-ring"></b-icon>
          </router-link>

          <router-link to="/" class="navbar-item">
            <b-icon icon="account-settings-variant"></b-icon>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'trpg-navbar',

    computed: {
      ...mapState('navbar', [
        'menu',
        'isMobileMenuActive',
      ]),

      ...mapState([
        'route',
      ]),
    },

    methods: {
      ...mapMutations('navbar', [
        'toggleMobileMenu',
      ]),
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/variables';

  .navbar {
    &.is-primary {
      h1 {
        font-family: 'Berkshire Swash';
        color: $theme-color-3;
        & > span {
          color: $theme-color-4;
        }
      }

      .navbar-menu {
        .navbar-start, .navbar-end {
          & > .navbar-item {
            &.is-active {
              color: $theme-color-3;
              & > .icon {
                color: $theme-color-4;
              }
            }
          }
        }
      }
    }
  }
</style>
