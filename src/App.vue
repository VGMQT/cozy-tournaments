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
import EventBus from '@/EventBus';

export default {
  mounted: function() {
    if (localStorage.getItem('jwt') !== null) {
      EventBus.$emit('logged-in');
    }
  },
  components: {
    HeaderSection,
    FooterSection,
  },
};
</script>
