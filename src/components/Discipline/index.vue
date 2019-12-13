<template>
  <li :class="$style.item">
    <a :class="$style.discipline" :href="link">
      <div :class="$style.wrapper">
        <div :class="[$style.pic, additionalClass]" />
      </div>
      <h2 :class="$style.title">{{ title }}</h2>
    </a>
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
