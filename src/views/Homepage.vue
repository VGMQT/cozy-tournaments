<template>
  <div class="container">
    <page-title :title="content.title" />
    <page-desc :desc="content.desc" />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import PageDesc from '@/elements/PageDesc';
import content from '@/content.json';

export default {
  name: 'homepage',
  components: {
    PageTitle,
    PageDesc,
  },
  data: () => ({
    content: content.homepage,
  }),
};
</script>
