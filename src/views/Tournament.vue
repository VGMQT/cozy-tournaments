<template>
  <div class="container">
    <page-title :title="content.title" />
    <bracket />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import Bracket from '@/components/Bracket';
import content from '@/content.json';

export default {
  name: 'tournament',
  components: {
    PageTitle,
    Bracket,
  },
  data: () => ({
    content: content.tournament,
  }),
};
</script>
