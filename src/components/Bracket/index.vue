<template>
  <div :class="$style.bracket">
    <div :class="$style.branch">
      <div :class="$style.round">
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Vova</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">5</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Anna</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">6</span>
            </div>
          </div>
        </div>
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Irene</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">4</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">8</span>
            </div>
          </div>
        </div>
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Vova</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">5</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Anna</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">6</span>
            </div>
          </div>
        </div>
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Irene</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">4</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">8</span>
            </div>
          </div>
        </div>
      </div>
      <div :class="[$style.round, $style.round_2]">
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Anna</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">10</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">9</span>
            </div>
          </div>
        </div>
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Anna</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">10</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">9</span>
            </div>
          </div>
        </div>
      </div>
      <div :class="[$style.round, $style.round_3]">
        <div :class="$style.match">
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">9</span>
            </div>
          </div>
          <div :class="$style.participant">
            <span :class="$style.name">Alex</span>
            <div :class="$style['points-wrapper']">
              <span :class="$style.points">9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bracket',
};
</script>

<style src="./Bracket.module.scss" lang="scss" module />
