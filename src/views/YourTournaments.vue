<template>
  <div class="container">
    <page-title :title="content.title" />
    <btn :title="content.btn" />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import Btn from '@/elements/Btn';
import content from '@/content.json';

export default {
  name: 'your-tournaments',
  components: {
    PageTitle,
    Btn,
  },
  data: () => ({
    content: content.yourTournaments,
  }),
};
</script>
