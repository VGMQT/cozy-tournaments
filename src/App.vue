<template>
  <div id="app">
    <header-section></header-section>
    <router-view />
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection';

export default {
  components: {
    HeaderSection,
  },
};
</script>
