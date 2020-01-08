<template>
  <div class="custom-select" :class="$style.select">
    <div
      class="input"
      :class="[$style.current, isOpen ? $style.open : '']"
      @click="isOpen = !isOpen"
    >
      {{ current }}
    </div>
    <div :class="$style.list">
      <div v-for="(option, i) of options" :key="i" :class="$style.item">
        <input
          @focus="isOpen = true"
          @keydown.tab="isOpen = false"
          @click="choose(option, toCamelCase(option))"
          :class="$style.input"
          :id="toCamelCase(option)"
          type="radio"
          name="group"
          :value="option"
        />
        <label :for="toCamelCase(option)" class="input" :class="$style.label">
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { toCamelCase } from '@/helpers';

export default {
  name: 'custom-select',
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
    const collection = document.getElementsByClassName('custom-select');

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

<style src="./CustomSelect.module.scss" lang="scss" module />
