<template>
  <div class="container">
    <page-title :title="content.title" />
    <page-desc :desc="content.desc" />
    <div v-for="discipline in disciplines" :key="discipline.title">
      <discipline :imageSrc="discipline.imgSrc" :link="discipline.link" :title="discipline.title" />
    </div>
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import PageDesc from '@/elements/PageDesc';
import Discipline from '@/components/Discipline';
import content from '@/content.json';

export default {
  name: 'homepage',
  components: {
    PageTitle,
    PageDesc,
    Discipline,
  },
  data: () => ({
    disciplines: content.disciplines,
    content: content.homepage,
  }),
};
</script>
