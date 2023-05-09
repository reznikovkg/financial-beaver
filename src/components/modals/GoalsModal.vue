<template>
  <div class="modal-content">
    <h3 class="modal-title">Задачи урока:</h3>
    <div class="modal__goals">
      <div class="modal__goal">
        <div class="modal__goal__icon">
          ✓
        </div>
        <div class="modal__goal__text">
          Проверить контрагента
        </div>
      </div>
      <div class="modal__goal">
        <div class="modal__goal__icon">
          ✓
        </div>
        <div class="modal__goal__text">
          Выбери депозит
        </div>
      </div>
      <div class="modal__goal">
        <div class="modal__goal__icon">
          ✓
        </div>
        <div class="modal__goal__text">
          Сравни доходность
        </div>
      </div>
    </div>
    <div class="modal__button">
      <div class="modal important-btn" @click="() => $emit('close')">ясно!</div>
    </div>
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
    // console.log(this)
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.modal{

  &-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    font-family: "Ubuntu";

    &-beaver {
      position: absolute;
      right: -78px;
      bottom: -22px;
      width: 200px;
      transform: rotate(-10deg);
    }
  }

  &__goals {
    padding: 18px 55px;
    flex: 1;
  }

  &__goal {
  display: flex;
  flex: 1;
  padding-top: 14px;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 28px;
      height: 28px;
      border: 2px solid #5c5cff;
      font-size: xx-large;
      color: #5c5cff;
    }

    &__text {
      display: flex;
      justify-content: center;
      padding-left: 40px;
      align-items: center;
      font-size: large;
    }
  }

  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto 0;
    font-size: x-large;
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
.important-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  padding: 7px 0;
  width: 170px;
  cursor: pointer;
  background-color: #5c5cff;
  color: #ffffff;
  border-radius: 6px;
  font-size: large;
}

</style>
