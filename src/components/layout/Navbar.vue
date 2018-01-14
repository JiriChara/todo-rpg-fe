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
            v-if="isVisible(item)"
            :to="item.link"
            :class="{ 'is-active': isActive(item.name, route) }"
            class="navbar-item">
            <b-icon :icon="item.icon"></b-icon>
            {{ item.title }}
          </router-link>
        </div>

        <div class="navbar-end">
          <router-link
            v-for="item in menu.right"
            :key="item.name"
            v-if="isVisible(item)"
            :to="item.link"
            :class="{ 'is-active': isActive(item.name, route) }"
            class="navbar-item">
            <b-icon :icon="item.icon"></b-icon>
            {{ item.title }}
          </router-link>

          <a
            v-if="$logout.isAllowed('logout')"
            href="javascript:void(0);"
            class="navbar-item"
            @click="onLogout">
            <b-icon icon="logout"></b-icon>
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import router from '@/router';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
  import {
    inventoriesPerimeter,
    loginPerimeter,
    logoutPerimeter,
    partiesPerimeter,
    questsPerimeter,
  } from '@/perimeters';

  export default {
    name: 'trpg-navbar',

    computed: {
      ...mapState('navbar', [
        'menu',
        'isMobileMenuActive',
      ]),

      ...mapGetters('navbar', [
        'isActive',
      ]),

      ...mapState([
        'route',
      ]),
    },

    perimeters: [
      inventoriesPerimeter,
      loginPerimeter,
      logoutPerimeter,
      partiesPerimeter,
      questsPerimeter,
    ],

    methods: {
      ...mapMutations('navbar', [
        'toggleMobileMenu',
      ]),

      ...mapActions('me', [
        'logout',
      ]),

      isVisible(item) {
        return this[`$${item.permissions.name}`].isAllowed(item.permissions.action);
      },

      async onLogout() {
        await this.logout();

        router.push({ name: 'home' });

        this.$snackbar.open({
          message: 'Successfully logged out',
          type: 'is-success',
        });
      },
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
            &:hover {
              & > .icon {
                color: $theme-color-4;
              }
            }
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
