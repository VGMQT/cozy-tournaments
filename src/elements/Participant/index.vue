<template>
  <div :class="$style.participant">
    <span :class="$style.name">{{ name }}</span>
    <div :class="$style['points-wrapper']">
      <span :class="$style.points">{{ points }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'participant',
  props: {
    name: String,
    points: String,
  },
};
</script>

<style src="./Participant.module.scss" lang="scss" module />
