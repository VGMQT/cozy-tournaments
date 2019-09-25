<template>
  <div class="container">
    <page-title :title="content.title" />
    <account-form />
  </div>
</template>

<script>
import PageTitle from '@/elements/PageTitle';
import AccountForm from '@/components/AccountForm';
import content from '@/content.json';

export default {
  name: 'homepage',
  components: {
    PageTitle,
    AccountForm,
  },
  data: () => ({
    content: content.account,
  }),
};
</script>
