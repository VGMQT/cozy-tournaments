<template>
  <form :class="$style.form" action="/" method="post">
    <div :class="$style.fieldset">
      <label class="label" for="email">{{ content.registerForm[0] }}</label>
      <input class="input" id="email" type="email" />
    </div>
    <div :class="$style.fieldset">
      <label class="label" for="password">{{ content.registerForm[1] }}</label>
      <input class="input" id="password" type="password" />
    </div>
    <div class="btn-wrapper">
      <button class="btn" type="submit">{{ content.registerForm[2] }}</button>
    </div>
  </form>
</template>

<script>
import content from '@/content.json';

export default {
  name: 'register-form',
  data: () => ({
    content: content.account,
  }),
};
</script>

<style src="./RegisterForm.module.scss" lang="scss" module />
