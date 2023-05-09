<template>
  <div class="modal-content">
    <div class="modal-content__img__wrapper">
      <img class="modal-content__img" src="/img/advertising.png">
    </div>
    <div class="modal-content__btn__wrapper">
      <button class="modal-content__btn" @click="() => $emit('close')">Закрыть</button>
    </div>
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

<style lang="less">

.modal-content {
  font-family: "Ubuntu";

  &__img {
    width: 100%;

    &__wrapper {
      padding: 14px 14px 10px;
    }
  }

  &__btn {
    border-radius: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 4px 12px;
    font-weight: 600;

    &__wrapper {
      text-align: right;
      padding-right: 30px;
      padding-bottom: 20px;
    }
  }
}

</style>
