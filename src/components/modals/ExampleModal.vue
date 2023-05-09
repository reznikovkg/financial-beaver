<template>
  <div>
    Модалка

    <button @click="() => $emit('close')">Закрыть</button>

    {{ param }}
  </div>
</template>

<script>
export default {
  name: 'ExModal',
  props: {
    param: Number
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // console.log(this)
  },
  methods: {
  }
}
</script>

<style></style>
