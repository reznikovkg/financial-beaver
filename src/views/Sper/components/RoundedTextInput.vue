<template>
  <input class="rounded-text_input"
    type="text"
    :id="id"
    :placeholder="placeholder"
    v-model="reactiveValue">
</template>

<script>
export default {
  name: 'RoundedTextInput',
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      defautl: ''
    }
  },
  computed: {
    reactiveValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="less">
.rounded-text_input {
    border-radius: 15px;
    border: none;
    outline: none;

    font-family: "Prata";
    font-size: 21.12px;

    background: white;
    text-align: center;
}
</style>
