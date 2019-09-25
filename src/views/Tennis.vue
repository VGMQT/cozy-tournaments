<template>
  <div class="container">
    <h1>Table Tennis</h1>
    <leaders-table :leaders="leaders" />
  </div>
</template>

<script>
import content from '@/content.json';
import LeadersTable from '../components/LeaderTable/index';

export default {
  name: 'tennis',
  components: { LeadersTable },
  data: () => ({
    leaders: content.disciplines[0].leaders,
  }),
};
</script>
