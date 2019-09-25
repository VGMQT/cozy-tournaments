<template>
  <div :class="$style.disciplines">
    <discipline
      v-for="discipline in disciplines"
      :key="discipline.title"
      :image="discipline.imgSrc"
      :link="discipline.link"
      :title="discipline.title"
    />
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
