<template>
  <div :class="$style.desc" v-html="desc" />
</template>

<script>
export default {
  name: 'page-desc',
  props: {
    desc: String,
  },
};
</script>

<style src="./PageDesc.module.scss" lang="scss" module />
