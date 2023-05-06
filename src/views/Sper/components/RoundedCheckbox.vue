<template>
  <div>
    <label class="noselect rounded-checkbox">
      <input type="checkbox" :id="id" :checked="value" @change="checkboxClicked">
      <span :style="calculateCheckboxStyles" class="rounded-checkbox__mark" />
      <span class="rounded-checkbox__text">
        <slot>Default checkbox text</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'RoundedCheckbox',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      required: true
    },
    activeColor: {
      type: String,
      default: '#2AB514'
    },
    notActiveColor: {
      type: String,
      default: '#D4D7DC'
    },
    fillBackground: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    calculateCheckboxStyles () {
      const style = {
        border: `2px solid ${this.value ? this.activeColor : this.notActiveColor}`
      }

      if (this.value) {
        style.background = `${this.activeColor} url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIxMiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTIgOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHBhdGggZD0iTTQuNTc1IDguOTc3cy0uNDA0LS4wMDctLjUzNi0uMTY1TC4wNTcgNS42NGwuODI5LTEuMjI3TDQuNDcgNy4yNjggMTAuOTIxLjA4NmwuOTIzIDEuMTAzLTYuODYzIDcuNjRjLS4xMzQtLjAwMy0uNDA2LjE0OC0uNDA2LjE0OHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+) 50% 40% no-repeat`
      } else if (this.fillBackground) {
        style['background-color'] = this.notActiveColor
      }

      return style
    }
  },
  methods: {
    checkboxClicked () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="less" scoped>
.rounded-checkbox {
  position: relative;
  margin-right: 1rem;
  padding-left: 1.75rem;

  &__mark {
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: 0;
    top: -2px;

    border-radius: 3px;
  }

  &__text {
    font-family: "Prata";
    font-size: 3vmin;
  }
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}
</style>
