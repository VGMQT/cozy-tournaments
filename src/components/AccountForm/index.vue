<template>
  <form :class="$style.form" @submit="login">
    <div :class="$style.fieldset">
      <label class="label" for="email">{{ content.accountForm[0] }}</label>
      <input class="input" id="email" type="email" />
    </div>
    <div :class="$style.fieldset">
      <label class="label" for="password">{{ content.accountForm[1] }}</label>
      <input class="input" id="password" type="password" />
    </div>
    <div class="btn-wrapper">
      <button class="btn" type="submit">{{ content.accountForm[2] }}</button>
    </div>
  </form>
</template>

<script>
import content from '@/content.json';
import axios from 'axios';
import router from '../../router';

export default {
  name: 'account-form',
  data: () => ({
    content: content.account,
  }),
  methods: {
    login: e => {
      e.preventDefault();

      const login = () => {
        const data = {
          email: e.target.elements.email.value,
          password: e.target.elements.password.value,
        };

        axios
          .post('/api/auth', data)
          .then(response => {
            console.log('Logged in!');
            router.push('/');
          })
          .catch(errors => {
            console.log('Cannot log in!');
          });
      };

      login();
    },
  },
};
</script>

<style src="./AccountForm.module.scss" lang="scss" module />
