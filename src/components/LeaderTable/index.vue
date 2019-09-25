<template>
  <table border="1">
    <caption>
      Leaders
    </caption>
    <tr>
      <th>Name</th>
      <th>Number of wins</th>
    </tr>
    <tr v-for="leader in leaders" :key="leader.name">
      <td>{{ leader.name }}</td>
      <td>{{ leader.wins }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'leaders-table',
  props: {
    leaders: Array,
  },
  methods: {
    getSortedData: leaders =>
      leaders.sort((leader1, leader2) =>
        leader1.wins > leader2.wins ? -1 : leader1.wins < leader2.wins ? 1 : 0
      ),
  },
  beforeMount() {
    this.getSortedData(this.leaders);
  },
};
</script>

<style src="./LeaderTable.module.scss" lang="scss" module />
