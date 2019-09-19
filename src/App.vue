<template>
  <div id="app">
    <header-section />
    <router-view />
    <footer-section />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection';
import FooterSection from '@/components/FooterSection';

export default {
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>
