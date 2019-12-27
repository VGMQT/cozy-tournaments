<template>
  <form :class="$style.form" @submit="submit">
    <div class="fieldset">
      <label class="label" for="email">{{ content.accountForm[0] }}</label>
      <input v-model="user.email" class="input" id="email" type="email" autocomplete="email" />
    </div>
    <div class="fieldset">
      <label class="label" for="password">{{ content.accountForm[1] }}</label>
      <input
        v-model="user.password"
        class="input"
        id="password"
        type="password"
        autocomplete="current-password"
      />
    </div>
    <div class="fieldset fieldset_checkbox">
      <input v-model="user.isAdmin" class="checkbox" id="isAdmin" type="checkbox" />
      <label class="label label_checkbox" for="isAdmin">Are you an admin?</label>
    </div>
    <btn type="button" btnType="submit" :title="content.accountForm[2]" />
  </form>
</template>

<script>
import axios from 'axios';
import Btn from '@/elements/Btn';
import EventBus from '@/EventBus';
import content from '@/content.json';
import router from '../../router';

export default {
  name: 'auth-form',
  components: {
    Btn,
  },
  data: () => ({
    content: content.auth,
    user: {
      email: '',
      password: '',
      isAdmin: false,
    },
  }),
  methods: {
    submit(e) {
      e.preventDefault();

      if (this.user.password.length > 0) {
        axios
          .post('/api/auth', this.user)
          .then(response => {
            let isAdmin = response.data.isAdmin;

            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('jwt', response.headers['x-auth-token']);

            if (localStorage.getItem('jwt') !== null) {
              EventBus.$emit('logged-in');

              if (this.$route.params.nextUrl !== undefined) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (isAdmin === true) {
                  this.$router.push('dashboard');
                } else {
                  this.$router.push('account');
                }
              }
            }
          })
          .catch(error => {
            console.error('Cannot log in!', error.response);
          });
      }
    },
  },
};
</script>

<style src="./AuthForm.module.scss" lang="scss" module />
