<template>
  <div class="modal-content">
    <h3 class="text-center">Убедитесь, что это банк!</h3>

    <div class="modal-contemt-text">
      rrwerewr
    </div>

    <div class="text-center close-btn" @click="() => $emit('close')">закрыть</div>
    <img class="modal-content-beaver" src="/img/beaver.png">
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
    console.log(this)
  },
  methods: {
  }
}
</script>

<style lang="less">
.modal-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  &-beaver {
    position: absolute;
    left: -66px;
    bottom: -22px;
    width: 200px;
    transform: rotate(-10deg);
  }
}
.modal-contemt-text {
  padding: 25px 90px;
  flex: 1;
}
.close-btn {
  cursor: pointer;
  margin-bottom: 16px;
}
</style>
