<template>
  <div :class="$style['btn-wrapper']">
    <button v-if="type" :type="btnType ? 'submit' : 'button'" :class="$style.btn">
      <span>{{ title }}</span>
    </button>
    <router-link v-else to="/create-your-tournament" :class="$style.btn">
      <span>{{ title }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    type: String,
    btnType: String,
    title: String,
  },
};
</script>

<style src="./Btn.module.scss" lang="scss" module />
