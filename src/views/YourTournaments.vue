<template>
  <div class="container">
    <page-title :title="content.title" />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import content from '@/content.json';

export default {
  name: 'your-tournaments',
  components: {
    PageTitle,
  },
  data: () => ({
    content: content.yourTournaments,
  }),
};
</script>
