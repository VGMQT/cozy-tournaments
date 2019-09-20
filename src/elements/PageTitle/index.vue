<template>
  <h1 :class="$style.title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    title: String,
  },
};
</script>

<style src="./PageTitle.module.scss" lang="scss" module />
