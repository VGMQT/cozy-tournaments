<template>
  <div class="container">
    <page-title :title="content.title" />
    <auth-form />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import AuthForm from '@/components/AuthForm';
import content from '@/content.json';

export default {
  name: 'auth',
  components: {
    PageTitle,
    AuthForm,
  },
  data: () => ({
    content: content.account,
  }),
};
</script>
