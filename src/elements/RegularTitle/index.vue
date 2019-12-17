<template>
  <h2 :class="$style.title" v-html="title" />
</template>

<script>
export default {
  name: 'regular-title',
  props: {
    title: String,
  },
};
</script>

<style src="./RegularTitle.module.scss" lang="scss" module />
