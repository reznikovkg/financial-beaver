<template>
  <IvanoffBankBaseComponent button-text="Продолжить" :route-btn="{ name: 'result', query: { bank: 'ivanoff' } }">
    <div class="info-container">
      <div class="title-container">
        <div @click="() => back()" class="title__back-button">
          <img src="IvanoffBank/Vector.png" alt="arrow">
        </div>
        <div class="title__content">
          <div class="title__text">Заполните информацию</div>
          <div class="title__subtext">
            Заполняя форму, я принимаю <span style="color: #D97A07BF;"> условия передачи информации </span>
          </div>
        </div>
      </div>
      <div class="body-container">
        <div class="user-data">
          <div class="user-data__input__wrapper">
            <input class="user-data__input" placeholder="Фамилия, имя, отчество*"/>
          </div>
          <div class="user-data__inputs-small__wrapper">
            <input class="user-data__input-small" placeholder="Дата рождения*"/>
            <input class="user-data__input-small" placeholder="E-mail"/>
          </div>
          <div class="user-data__input__wrapper">
            <input class="user-data__input" placeholder="Мобильный телефон*"/>
          </div>
          <div class="user-data__input__wrapper">
            <input class="user-data__input" placeholder="Гражданство*"/>
          </div>
          <div class="user-data__guarantee">
            <div class="user-data__guarantee__img__wrapper">
              <img class="user-data__guarantee__img" src="IvanoffBank/guarantee.png">
            </div>
            <div class="user-data__guarantee__text">
              Мы гарантируем безопасность ваших данных
            </div>
          </div>
        </div>
        <div class="condition">
          <div class="condition__content">
              <div style="font-family: 'Inter';font-size: 12px; color: #260407ca;">Сумма вклада
                <input
                  v-model="amount"
                  type="text"
                  class="condition__value" />
              </div>
          </div>
          <div class="condition__content" style="margin-top: 20px">
            <div style="font-family: 'Inter';font-size: 12px; color: #260407ca;">Срок вклада
              <input
                v-model="amount2"
                type="text"
                class="condition__value" />
            </div>
          </div>
          <div class="asfasfasfas">
            <div>
              3 месяца
            </div>
            <div>
              12 месяцев
            </div>
          </div>
          <div class="condition__text-button__wrapper" style="margin-top: 8px; margin-bottom: 25px;">
            <div class="condition__text-button">
              Ставка в рублях станет выше, если выбрать срок от 12 месяцев
            </div>
          </div>
          <div class="condition__checkbox__wrapper">
            <label style="display:flex; align-items: center;">
              <input
                type="checkbox"
                value="yes"
                class="condition__checkbox"
              />
              <p class="dasdasd" style="font-family: 'Inter';">Повышенная ставка</p>
            </label>
            <div class="condition__checkbox__text">
              Деньги можно вносить только в течение первого месяца, но доходность выше
            </div>
          </div>
          <div class="condition__checkbox__wrapper" style="margin-top: 8px">
            <label style="display:flex; align-items: center;">
              <input
                type="checkbox"
                value="yes"
                class="condition__checkbox"
              />
              <p class="dasdasd" style="font-family: 'Inter';">Оставлять проценты</p>
            </label>
              <div class="condition__checkbox__text">
                Оставляйте проценты на вкладе, чтобы увеличить доходность
              </div>
          </div>
          <div class="condition__btn__wrapper" style="margin-top: 25px">
            <div class="condition__btn__img__wrapper">
              <img class="condition__btn__img" src="IvanoffBank/dogovor.png">
            </div>
            <router-link :to="{name: 'ivanoff-contract'}" tag="div" class="condition__btn__text">
                показать договор
            </router-link>
          </div>
          <div class="condition__text-button__wrapper" style="margin-top: 25px">
            <div class="condition__text-button">
              Нажимая “Продолжить”, я соглашаюсь с условиями, договором, даю согласие, разрешаю сделать запрос в бюро кредитных историй
            </div>
          </div>
        </div>
      </div>
    </div>
  </IvanoffBankBaseComponent>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'

export default {
  name: 'InformationPage',
  components: {
    IvanoffBankBaseComponent
  },
  data () {
    return {
      amount: '100 000Р',
      amount2: 12
    }
  },
  methods: {
    back () {
      this.$router.back()
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
    background-color:#f8f8f8;
    height: 8rem;
  }

  &__back-button{
    margin:30px;
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

  &__text {
    margin-left: 10px;
    font-size: 2.3rem;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    color:#260407;
    margin-top:2rem;
  }

  &__subtext {
    margin-left: 10px;
    font-size: 1.1rem;
    font-family: "Jost";
    font-style: normal;
    font-weight: 700;
    color:#260407BF;
    padding-bottom: 1rem;
  }
}

.body-container {
  display: flex;
    align-items: stretch;
  background-color: #eeeaea;
}

.user-data {
  display: flex;
  border-radius: 8px;
  width: 45%;
  background-color: #f8f8f8;
  margin: 30px 34px 16px;
  flex-direction: column;
  gap: 50px;
  padding: 28px;
  box-sizing: border-box;

  &__input {
    width: 100%;
    height: 50px;
    background: #E4E4E4;
    border-radius: 8px;
    padding-left: 14px;
    border: none;
    outline: none;
    font-family: 'Inter';
    &::placeholder {
      color: #260407ca;;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-small {
      width: 42%;
      height: 60px;
      background: #E4E4E4;
      border-radius: 8px;
      padding-left: 14px;
      border: none;
      outline: none;
      font-family: 'Inter';
      &::placeholder {
        color: #260407ca;;
      }
    }
  }

  &__inputs-small {

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &__guarantee {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 78%;
    height: 46px;
    background: #E4E4E4;
    border-radius: 8px;
    border: none;
    margin: 0 auto;

    &__text {
      color: #260407ca;
      font-family: 'Inter';
      font-size: 11px;
      font-weight: 500;
    }

    &__img {
      width: 26px;

      &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

}
.condition__checkbox
{
  width: 20px;
  height: 20px;
}
.condition__checkbox__wrapper {
  width: 100%;
}

.condition__value {
    width: 100%;
    font-size: 21px;
    font-weight: 700;
    height: 30px;
      font-family: 'Inter';
  }

.condition {
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 45%;
  background-color: #f8f8f8;
  margin: 30px 34px 16px;
  flex-direction: column;
  padding: 28px;
  box-sizing: border-box;

  &__content{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #E4E4E4;
    border-radius: 10px;

    overflow: hidden;

    div{
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      margin-bottom: 10px;
    }
    div:first-child{
      margin-top:0.5rem;
    }
  }

  &__value {
    border: none;
    outline: none;
    background-color: #E4E4E4;
  }

  &__btn {

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 55%;
      height: 50px;
      background-color: #d97a07bf;
      border-radius: 10px;
      cursor: pointer;
    }

    &__text {
      color: #F2F2F2;
      font-family: 'Inter';
      font-size: 18px;
    }

    &__img {
      width: 30px;
      height: 26px;

      &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &__text-button {
    color: #260407ca;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 500;
  }

  &__checkbox {

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__text {
      color: #260407ca;
      font-family: 'Inter';
      font-size: 12px;
      font-weight: 500;
    max-width: 50%;

      &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
      }
    }
  }
}
.dasdasd {
  margin-left:8px;
  margin-right: 10px;
  color: #260407;
  font-size: 12px;
}
.asfasfasfas {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #260407ca;
    font-family: 'Inter';
    font-size: 14px;
}
</style>
