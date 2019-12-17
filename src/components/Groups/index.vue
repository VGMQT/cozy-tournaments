<template>
  <div :class="$style.groups">
    <div :class="$style.group">
      <regular-title title="Group A" />
      <div :class="$style.participants">
        <participant name="Artyom" points="4" />
        <participant name="Katya" points="2" />
        <participant name="Alexey" points="2" />
        <participant name="Roman" points="0" />
        <participant name="Chris" points="0" />
      </div>
    </div>
  </div>
</template>

<script>
import RegularTitle from '@/elements/RegularTitle';
import Participant from '@/elements/Participant';

export default {
  name: 'groups',
  components: {
    RegularTitle,
    Participant,
  },
};
</script>

<style src="./Groups.module.scss" lang="scss" module />
