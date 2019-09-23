<template>
  <div class="container">
    <page-title :title="content.title" />
    <page-desc :desc="content.desc" />
    <discipline :imageSrc="'./images/tt.png'" :link="'/'" :title="'Tennis'" />
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
    content: content.homepage,
  }),
};
</script>
