<template>
  <footer :class="$style.footer">
    <div class="container">
      <div :class="$style.wrapper">
        <span>&lt;/&gt; with</span>
        <span class="sprite sprite-vue" />
        <span>and</span>
        <span class="sprite sprite-heart" />
      </div>
    </div>
  </footer>
</template>

<script>
import content from '@/content.json';

export default {
  name: 'footer-section',
  data: () => ({
    isOpen: false,
    content,
  }),
};
</script>

<style src="./FooterSection.module.scss" lang="scss" module />
