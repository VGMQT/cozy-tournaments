<template>
  <form :class="$style.form" @submit="submit">
    <div class="fieldset">
      <custom-select :options="content.disciplines" />
    </div>
    <btn type="button" btnType="submit" :title="content.btn" />
  </form>
</template>

<script>
import Btn from '@/elements/Btn';
import CustomSelect from '@/elements/CustomSelect';
import content from '@/content.json';

export default {
  name: 'create-tournament-form',
  components: {
    Btn,
    CustomSelect,
  },
  data: () => ({
    content: content.createTournamentForm,
  }),
  methods: {
    submit(e) {
      e.preventDefault();

      console.log('Proceed');
    },
  },
};
</script>

<style src="./CreateTournamentForm.module.scss" lang="scss" module />
