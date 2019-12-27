<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.logo">
          <router-link to="/" :class="$style.logo__link">
            <div v-emoji>🏟️</div>
          </router-link>
        </div>
        <div :class="$style.menu">
          <button
            type="button"
            :class="[$style.exit, loggedIn ? '' : 'hidden']"
            title="Log out"
            @click="logOut"
          >
            <div v-emoji>🚪</div>
          </button>
          <div :class="$style.account">
            <router-link
              to="/your-tournaments"
              :class="$style.account__link"
              title="Your Tournaments"
            >
              <div v-emoji>🎟️</div>
            </router-link>
          </div>
          <div :class="$style.navigation">
            <div :class="[$style.overlay, isOpen ? 'animation--slideDown' : 'hidden']"></div>
            <button
              @click="isOpen = !isOpen"
              class="hamburger hamburger--squeeze"
              :class="{ 'is-active': isOpen }"
              type="button"
              title="Menu"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner" />
              </span>
            </button>
            <nav :class="[$style.nav, isOpen ? 'animation--opacityIn' : 'hidden']">
              <ul>
                <li v-for="(value, key) in content.nav" :key="key" :class="$style.item">
                  <router-link :to="value" @click.native="isOpen = false" :class="$style.link">
                    {{ key }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import content from '@/content.json';
import EventBus from '@/EventBus';

export default {
  name: 'header-section',
  data: () => ({
    isOpen: false,
    loggedIn: false,
    content,
  }),
  methods: {
    logOut(e) {
      e.preventDefault();

      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      this.loggedIn = false;

      if (this.$route.params.nextUrl !== undefined) {
        this.$router.push(this.$route.params.nextUrl);
      } else {
        this.$router.push('/').catch(err => {});
      }
    },
  },
  mounted() {
    EventBus.$on('logged-in', () => {
      this.loggedIn = true;
    });
  },
};
</script>

<style src="./HeaderSection.module.scss" lang="scss" module />
