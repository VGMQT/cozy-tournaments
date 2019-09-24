<template>
  <a :class="$style.discipline" :href="link">
    <img :class="$style.discipline_img" :src="require(`@/assets/${image}.png`)" alt="" />
    <h2>{{ title }}</h2></a
  >
</template>

<script>
export default {
  name: 'discipline',
  props: {
    link: String,
    title: String,
    image: String,
  },
};
</script>

<style src="./Discipline.module.scss" lang="scss" module />
