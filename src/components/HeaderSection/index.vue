<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.logo">
          <router-link to="/" :class="$style.logo__link">
            <svg-icon name="logo" :className="$style.logo__svg" title="Logo" />
          </router-link>
        </div>
        <div :class="$style.menu">
          <button type="button" :class="$style.exit" class="hidden" id="logOut" @click="logOut">
            <svg-icon name="exit" :className="$style.exit__svg" title="Log out" />
          </button>
          <div :class="$style.account">
            <router-link to="/account" :class="$style.account__link">
              <svg-icon name="account" :className="$style.account__svg" title="Account" />
            </router-link>
          </div>
          <div :class="$style.navigation">
            <div :class="[$style.overlay, isOpen ? 'animation--slideDown' : 'hidden']"></div>
            <button
              @click="isOpen = !isOpen"
              class="hamburger hamburger--squeeze"
              :class="{ 'is-active': isOpen }"
              type="button"
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
import SvgIcon from '@/elements/SvgIcon';
import content from '@/content.json';

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
      document.getElementById('logOut').classList.add('hidden');

      if (this.$route.params.nextUrl !== undefined) {
        this.$router.push(this.$route.params.nextUrl);
      } else {
        this.$router.push('/').catch(err => {});
      }
    },
  },
  components: {
    SvgIcon,
  },
};
</script>

<style src="./HeaderSection.module.scss" lang="scss" module />
