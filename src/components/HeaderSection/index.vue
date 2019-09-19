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
          <div :class="[$style.overlay, isOpen ? 'animation--slideDown' : 'hidden']"></div>
          <button
            @click="isOpen = !isOpen"
            class="hamburger hamburger--squeeze"
            :class="{ 'is-active': isOpen }"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <nav :class="[$style.nav, isOpen ? 'animation--opacityIn' : 'hidden']">
            <ul>
              <li
              v-for="(value, key) in content.nav"
              :key="key"
              :class="$style.item" >
                <router-link
                  :to="value"
                  @click.native="isOpen = false"
                  :class="$style.link"
                >
                  {{ key }}
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
import content from '@/content.json';

export default {
  name: 'header-section',
  data: () => ({
    isOpen: false,
    content,
  }),
};
</script>

<style src="./HeaderSection.module.scss" lang="scss" module />
