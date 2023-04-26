<template>
  <button :style="calculateButtonStyles" class="rounded-button">
    <span :style="calculateTextStyles" class="rounded-button__text">
      <slot>Default button text</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'RoundedButton',
  props: {
    backgroundColor: {
      type: String,
      default: '#17A600'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    },
    buttonShadow: {
      type: String,
      default: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
  },
  computed: {
    calculateButtonStyles () {
      return {
        background: this.backgroundColor,
        boxShadow: this.buttonShadow
      }
    },
    calculateTextStyles () {
      return {
        color: this.textColor
      }
    }
  }
}
</script>

<style lang="less">
.rounded-button {
  border: none;
  border-radius: 40px;

  padding: 0.5vmin 2.75vmin;

  cursor: pointer;

  &__text {
    font-family: 'Inter';
    font-size: 3.5vmin;
    font-weight: bold;
  }
}
</style>
