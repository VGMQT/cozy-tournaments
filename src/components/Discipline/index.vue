<template>
  <li :class="$style.item">
    <router-link :to="link" :class="$style.discipline">
      <div :class="$style.wrapper">
        <div :class="[$style.pic, additionalClass]" />
      </div>
      <h2 :class="$style.title">{{ title }}</h2>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'discipline',
  props: {
    link: String,
    title: String,
    image: String,
    additionalClass: String,
  },
};
</script>

<style src="./Discipline.module.scss" lang="scss" module />
