<template>
  <div class="container">
    <page-title :title="content.title" />
    <page-desc :desc="content.desc" />
    <disciplines-list :disciplines="disciplines" />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import PageDesc from '@/elements/PageDesc';
import DisciplinesList from '@/components/DisciplinesList';
import content from '@/content.json';

export default {
  name: 'homepage',
  components: {
    PageTitle,
    PageDesc,
    DisciplinesList,
  },
  data: () => ({
    disciplines: content.disciplines,
    content: content.homepage,
  }),
};
</script>
