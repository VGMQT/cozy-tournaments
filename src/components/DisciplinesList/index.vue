<template>
  <div :class="$style.wrapper">
    <ul :class="$style.disciplines">
      <discipline
        v-for="discipline in disciplines"
        :key="discipline.title"
        :link="discipline.link"
        :title="discipline.title"
        :additionalClass="discipline.additionalClass"
      />
    </ul>
  </div>
</template>

<script>
import Discipline from '@/components/Discipline';

export default {
  name: 'disciplines-list',
  components: {
    Discipline,
  },
  props: {
    disciplines: Array,
  },
};
</script>

<style src="./DisciplinesList.module.scss" lang="scss" module />
