<template>
  <div>
    <div class="title-container">
      <div class="title__back-button" @click="redirectToIvanoff">
        <img src="IvanoffBank/Vector.png" alt="arrow">
      </div>
      <div class="title__content">
        <div class="title__text">Рассчитаем ваш доход</div>
      </div>
    </div>
    <div class="ivanoffcontract__content">
      <div class="ivanoffcontract__content__text">
        <p><b>БАНК и ВКЛАДЧИК заключили настоящий договор о нижеследующем</b></p>
        <p>1. Предмет договора</p>
        <p>Вкладчик помещает в Банк средства в <b>сумме</b> «XXX» рублей для хранения в форме депозита <b>на срок</b> с
          (число, месяц, год) по (число, месяц, год) с получением дохода из расчета <b>«%» годовых</b></p>
        <p>2. Обязанности Банка</p>
        <p>Банк обязуется <b>открыть счёт</b> для хранения депозита, <b>обеспечить сохранность</b> депозита и
          <b>выплачивать доход</b> по нему в полном соответствии с договором. Банк обязуется <b>возвратить</b> Вкладчику
          сумму депозита и начисленные на неё проценты.
        </p>
        <p>Банк гарантирует <b>тайну</b> депозита.</p>
        <p>3. Обязанности Вкладчика</p>
        <p>Вкладчик обязуется <b>внести сумму</b> «ХХХ» рублей на счёт Банка.</p>
        <p>Вкладчик должен <b>уведомить</b> Банк о прекращении или пролонгации договоpa.</p>
        <p>4. Условия действия договора</p>
        <p>Действие договора начинается с момента внесения Вкладчиком суммы депозита на счет Банка. Договор считается
          заключенным с момента подписания его сторонами и действует до истечения указанного в нем срока. При достижении
          даты окончания срока договора Вкладчик имеет право на полное изъятие депозита и начисленных на него процентов. В
          случае пролонгации договора стороны должны согласовать новые условия и сроки действия договора. Банк вправе
          удержать из депозита Вкладчика сумму, достаточную для покрытия задолженности Вкладчика перед Банком по другим
          договорам, если таковые имеются.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvanoffBankContractComponent',
  methods: {
    redirectToIvanoff () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.title {
  &-container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    background-color: white;
    height: 8rem;
  }

  &__text {
    margin-left: 10px;
    font-size: 2.3rem;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    color: #260407;
  }

  &__back-button {
    margin: 30px;
    background: #D9232380;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
    border: black solid 2px;
    cursor: pointer;

    & img {
      width: 80%;
      height: 100%;
    }
  }
}

.ivanoffcontract {
  &__content {
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 27rem;
    overflow-y: auto;
    padding: 0px 110px;

    &__text {
      font-size: 1.7rem;
      font-family: "Jost";
      font-style: normal;
      color: #260407;
    }
  }
}
</style>
