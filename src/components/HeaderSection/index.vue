<template>
  <header :class="$style.header">
    <div class="container">
      <div :class="$style.wrapper">
        <div :class="$style.logo">
          <a :class="$style.logo__link" href="/">
            <img :class="$style.logo__img" src="@/assets/logo.svg" alt="Logo" />
          </a>
        </div>
        <div :class="$style.menu">
          <div :class="[$style.overlay, isOpen ? 'animation--opacityIn' : 'hidden']"></div>
          <button
            @click="isOpen = !isOpen"
            class="hamburger hamburger--slider"
            :class="{ 'is-active': isOpen }"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <nav :class="[$style.nav, isOpen ? 'animation--opacityIn' : 'hidden']">
            <ul>
              <li>
                <router-link
                  to="/"
                  @click.native="isOpen = false"
                  :class="$style.link"
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  @click.native="isOpen = false"
                  :class="$style.link"
                >
                  About
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-section',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./HeaderSection.module.scss" lang="scss" module />
