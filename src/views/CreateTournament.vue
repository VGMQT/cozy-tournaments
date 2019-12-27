<template>
  <div class="container">
    <page-title :title="content.title" />
    <create-tournament-form />
  </div>
</template>

<script>
import CreateTournamentForm from '@/components/CreateTournamentForm';
import PageTitle from '@/elements/PageTitle';
import content from '@/content.json';

export default {
  name: 'create-tournament',
  components: {
    CreateTournamentForm,
    PageTitle,
  },
  data: () => ({
    content: content.createTournament,
  }),
};
</script>
