<template>
  <div :class="$style.bracket">
    <div :class="$style.branch">
      <regular-title title="Winner Bracket" />
      <div :class="$style.rounds">
        <div :class="$style.round">
          <div :class="$style.match">
            <participant name="Vova" points="1" />
            <participant name="Anna" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Irene" points="1" />
            <participant name="Alex" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Andrey" points="0" />
            <participant name="Elena" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Katya" points="2" />
            <participant name="Zhenya" points="1" />
          </div>
          <div :class="$style.match">
            <participant name="Vova" points="1" />
            <participant name="Anna" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Irene" points="1" />
            <participant name="Alex" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Andrey" points="0" />
            <participant name="Elena" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Katya" points="2" />
            <participant name="Zhenya" points="1" />
          </div>
        </div>
        <div :class="[$style.round, $style.round_2, $style['quarter-final']]">
          <div :class="$style.match">
            <participant name="Anna" points="1" />
            <participant name="Alex" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Elena" points="1" />
            <participant name="Katya" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Anna" points="2" />
            <participant name="Alex" points="0" />
          </div>
          <div :class="$style.match">
            <participant name="Elena" points="2" />
            <participant name="Katya" points="1" />
          </div>
        </div>
        <div :class="[$style.round, $style.round_3, $style['semi-final']]">
          <div :class="$style.match">
            <participant name="Alex" points="1" />
            <participant name="Katya" points="2" />
          </div>
          <div :class="$style.match">
            <participant name="Anna" points="1" />
            <participant name="Elena" points="2" />
          </div>
        </div>
        <div :class="[$style.round, $style.round_4, $style['grand-final']]">
          <div :class="$style.match">
            <participant name="Katya" points="1" />
            <participant name="Elena" points="2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegularTitle from '@/elements/RegularTitle';
import Participant from '@/elements/Participant';

export default {
  name: 'bracket',
  components: {
    RegularTitle,
    Participant,
  },
};
</script>

<style src="./Bracket.module.scss" lang="scss" module />
