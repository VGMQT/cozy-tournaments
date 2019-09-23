<template>
  <div class="container">
    <page-title :title="content.title" />
    <register-form />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import RegisterForm from '@/components/RegisterForm';
import content from '@/content.json';

export default {
  name: 'homepage',
  components: {
    PageTitle,
    RegisterForm,
  },
  data: () => ({
    content: content.account,
  }),
};
</script>
