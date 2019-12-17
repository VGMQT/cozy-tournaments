<template>
  <div class="container">
    <page-title :title="content.title" />
    <bracket />
    <groups />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import Bracket from '@/components/Bracket';
import Groups from '@/components/Groups';
import content from '@/content.json';

export default {
  name: 'tournament',
  components: {
    PageTitle,
    Bracket,
    Groups,
  },
  data: () => ({
    content: content.tournament,
  }),
};
</script>
