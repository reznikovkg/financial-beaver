<template>
  <div class="modal-content">
    <h3 class="modal-title">Убедитесь, что это банк!</h3>
    <div class="modal-content-text">
      Для этого надо проверить, есть <br>
      ли у него лицензия Банка <br>
      России и является ли он <br>
      участником системы <br>
      страхования вкладов
    </div>
    <div class="modal__section">
      <div class="important-btn" @click="() => goTo()">перейти к проверке</div>
    </div>
    <div class="modal__button">
      <div class="close-btn" @click="() => $emit('close')">закрыть</div>
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
    goTo () {
      this.$router.push({ name: 'license-info-search' })
      this.$emit('close')
    }
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

    &-text {
      text-align: center;
      padding: 30px 27px;
    }

    &-beaver {
      position: absolute;
      left: -74px;
      bottom: -22px;
      width: 190px;
      transform: rotate(-10deg);
    }
  }

  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px auto 0;
    font-size: x-large;
  }

  &__section {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__button {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 6px;
  }
}
.important-btn {
  display: flex;
  justify-content: center;
  padding: 7px 0;
  width: 200px;
  height: 24px;
  cursor: pointer;
  background-color: #5c5cff;
  color: #ffffff;
  border-radius: 6px;
  font-size: large;
}
.close-btn {
  cursor: pointer;
  padding-bottom: 10px;
  color: #787474;
}

</style>
