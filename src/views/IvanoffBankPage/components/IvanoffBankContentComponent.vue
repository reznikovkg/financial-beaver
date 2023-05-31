<template>
  <div class="ivanoff-cont">
    <div class="ivanoff-cont__top">
      <div class="ivanoff-cont__top-horizontal" style="margin: 30px;">
        <router-link :to="{ name: 'banks' }">
          <div class="ivanoff-cont__back-button">
            <img src="IvanoffBank/Vector.png" alt="arrow">
          </div>
        </router-link>
        <div style="margin: auto; font-size: xxx-large; font-weight: bold;">
          Вклад "Копилка +"
        </div>
      </div>
      <div class="ivanoff-cont__bet">
        Повышенная ставка на сбережения
      </div>
    </div>
    <div>
      <div class="ivanoff-cont__horizontal">
        <div class="ivanoff-cont__info-field" style="width: 150px;">
          до 7% годовых
        </div>
        <div class="ivanoff-cont__info-field" style="width: 150px;">
          от 100.000₽
        </div>
        <div class="ivanoff-cont__info-field" style="width: 150px;">
          от 3 месяцев
        </div>
        <div class="ivanoff-cont__info-field" style="width: 150px;">
          <div style="margin: auto;">с пополнением</div>
          <div style="margin: auto;">без снятия</div>
        </div>
      </div>
    </div>
    <div class="ivanoff-cont__horizontal-botton">
      <div style="margin: auto;">
        <router-link :to="{ name: 'ivanoff-contract'}" tag="div">
          <div class="ivanoff-cont__info-field" style="width: 400px; font-size: xx-large; font-weight: 200; cursor: pointer;">
            условия вклада
            <div class="ivanoff-cont__down-button" style="margin-left: auto; margin-right: 0px;">
              <img src="IvanoffBank/Vector2.png" alt="arrow">
            </div>
          </div>
        </router-link>
        <div class="ivanoff-cont__info-field" style="width: 400px; font-size: xx-large; font-weight: 200;">
          подробности
          <div class="ivanoff-cont__down-button" style="margin-left: auto; margin-right: 0px;">
            <img src="IvanoffBank/Vector2.png" alt="arrow">
          </div>
        </div>
        <div class="ivanoff-cont__info-field" style="width: 400px; font-size: xx-large; font-weight: 200;">
          вопросы и ответы
          <div class="ivanoff-cont__down-button" style="margin-left: auto; margin-right: 0px;">
            <img src="IvanoffBank/Vector2.png" alt="arrow">
          </div>
        </div>
      </div>
      <div class="ivanoff-cont__info-field" style="width: 400px; font-weight: bold; font-size: xx-large; height: 215px;">
        <div class="ivanoff-cont__info-field__title">
          Преимущества вкладов
        </div>
        <div class="ivanoff-cont__small-info-field" style="width: 350px; margin-top: 0; font-size: large;">
          <img src="IvanoffBank/lock.png" alt="lock" style="width: 26px;">
          вклад застрахован АСВ
        </div>
        <div class="ivanoff-cont__small-info-field" style="width: 350px; margin-top: 0; font-size: large;">
          <img src="IvanoffBank/world.png" alt="world" style="width: 26px;">
          онлайн управление
        </div>
        <div class="ivanoff-cont__small-info-field" style="width: 350px; margin-top: 0; font-size: large;">
          <img src="IvanoffBank/user-octagon.png" alt="user" style="width: 26px;">
          персональные условия
        </div>
      </div>

    </div>
    <div class="ivanoff-cont__bottom">
      <router-link :to="{name: 'calculation-page-temp'}">
        <button class="ivanoff-cont__button">Рассчитать доход</button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvanoffBankContentComponent',
  props: {
    buttonText: String
  },
  methods: {
    redirectToCalculation () {
      this.$router.push('/calculation-ivanoff')
    }
  }
}
</script>

<style scoped lang="less">
.ivanoff-cont {
  background: transparent;
  font-family: "Jost";

  &__top {
    background-color: #ffffff;
    padding: 2px 30px 30px 0;

    &-horizontal {
      display: flex;
      align-items: center;
    }
  }

  &__bottom {
    display: flex;
    background-color: #eeeaea;
    padding-top: 14px;
    justify-content: center;
    cursor: pointer;
  }

  &__horizontal {
    display: flex;
    align-items: center;
    padding-top: 18px;
    background-color: #eeeaea;

    &-botton {
      display: flex;
      align-items: center;
      background-color: #eeeaea;
    }
  }

  &__button {
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 40px;
    border-radius: 10px;
    border: 0px;
    background: #D97A07E5;
    color: white;
    font-size: large;
    font-weight: bold;
    cursor: pointer;
  }

  &__back-button {
    background: #D9232380;
    width: 15px;
    height: 15px;
    padding: 10px;
    border-radius: 50%;
    border: black solid 2px;

    & img {
      width: 80%;
      height: 100%;
    }
  }

  &__down-button {
    background: #D97A0780;
    width: 10px;
    height: 10px;
    padding: 7px;
    border-radius: 50%;
    border: black solid 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 80%;
      height: 80%;
    }
  }

  &__bet {
    background: #D97A0726;
    font-size: x-large;
    margin-left: auto;
    margin-right: auto;
    font-weight: bold;
    text-align: center;
    width: 500px;
    padding: 10px;
    border-radius: 5px;
    color: #260407CC;
  }

  &__info-field {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 10px;
    padding: 10px 25px 10px 25px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.24);
    background-color: white;
    border-radius: 5px;
    font-size: large;
    font-weight: bold;
    text-align: center;
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &__title {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      font-size: large;
      font-weight: 700;
      padding-left: 22px;
    }
  }

  &__small-info-field {
    margin: auto;
    padding: 5px;
    background: #EFEFEF;
    border-radius: 5px;
    font-size: large;
    display: flex;
    flex-wrap: wrap;

    & img {
      margin-left: 10px;
      margin-right: 15px;
    }
  }
}
</style>
