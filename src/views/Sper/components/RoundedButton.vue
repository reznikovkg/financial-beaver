<template>
  <button @click="() => $emit('click')" :style="calculateButtonStyles" class="rounded-button">
    <span :style="calculateTextStyles" class="noselect rounded-button__text">
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
    },
    borderRadius: {
      type: String,
      default: '40px'
    }
  },
  computed: {
    calculateButtonStyles () {
      return {
        background: this.backgroundColor,
        boxShadow: this.buttonShadow,
        borderRadius: this.borderRadius
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

<style lang="less" scoped>
.rounded-button {
  border: none;

  padding: 3.25px 17.88px;

  cursor: pointer;

  &__text {
    font-family: 'Inter';
    font-size: 22.75px;
    font-weight: bold;
  }
}
</style>
