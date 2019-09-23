<template>
  <div :class="$style.discipline">
    <img :class="$style.discipline_img" :src="imageSrc" alt="" />
    <a :class="$style.description" :href="link"
      ><h2>{{ title }}</h2></a
    >
  </div>
</template>

<script>
export default {
  name: 'discipline',
  props: {
    link: String,
    title: String,
    imageSrc: String,
  },
};
</script>

<style src="./Discipline.module.scss" lang="scss" module />
