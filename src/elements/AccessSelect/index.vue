<template>
  <div class="access-select" :class="$style.select">
    <div
      @click="isOpen = !isOpen"
      class="input"
      :class="[$style.current, isOpen ? $style.open : '']"
    >
      {{ current }}
    </div>
    <ul :class="$style.list">
      <li v-for="(option, i) of options" :key="i" :class="$style.item">
        <input
          @focus="isOpen = true"
          @keydown.tab="isOpen = false"
          @click="choose(option, toCamelCase(option))"
          :class="$style.input"
          :id="toCamelCase(option)"
          type="radio"
          name="Discipline"
          :value="option"
        />
        <label :for="toCamelCase(option)" class="input" :class="$style.label">
          {{ option }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { toCamelCase } from '@/helpers';

export default {
  name: 'access-select',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    choose(option, optionId) {
      if (document.getElementById(optionId).checked) {
        this.current = option;
      }
    },
  },
  data: () => ({
    isOpen: false,
    current: 'Choose a Discipline',
    toCamelCase,
  }),
  updated() {
    // Close custom select list if click outside of it
    const thisVue = this;
    const collection = document.getElementsByClassName('access-select');

    document.addEventListener('click', function(e) {
      for (let i = 0; i < collection.length; i++) {
        const isClickedInside = collection[i].contains(e.target);

        if (!isClickedInside) {
          thisVue.isOpen = false;
        }
      }
    });
    //--
  },
};
</script>

<style src="./AccessSelect.module.scss" lang="scss" module />
