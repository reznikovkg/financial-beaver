<template>
  <div class="wrapper">
    <div class="wrapping">
      <div class="calc">
        <div class="calc__left">
          <div class="calc__filters">
            <div class="calc__filters__block">
              <div class="calc__filters__block__sum">
                Сумма
              </div>
            </div>
            <div class="calc__filters__block">
              <div class="calc__filters__block__title">
                Валюта
              </div>
              <div class="calc__filters__block__value">
                <span class="calc__filters__block__value__text">Рубли ₽</span>
                <img class="calc__filters__block__value__img" src="/img/select.png">
              </div>
            </div>
            <div class="calc__filters__block">
              <div class="calc__filters__block__title">
                Срок
              </div>
              <div class="calc__filters__block__value">
                <span class="calc__filters__block__value__text">Любой</span>
                <img class="calc__filters__block__value__img" src="/img/select.png">
              </div>
            </div>
          </div>
          <div class="calc__filters">
            <span class="calc__filters__item">Все фильтры</span>
            <span class="calc__filters__item">С пополнением</span>
            <span class="calc__filters__item">Частичное снятие</span>
            <span class="calc__filters__item">Онлайн открытие</span>
          </div>
        </div>
        <div>
          <div class="calc__filters">
            <span class="calc__btn">Показать</span>
          </div>
        </div>
      </div>
      <DepositPreviewComponent
        v-for="(i, index) in getDeposits"
        :key="index"
        :deposit="i"
      ></DepositPreviewComponent>
    </div>
  </div>
</template>

<script>
import DepositPreviewComponent from '@/components/DepositPreview/DepositPreviewComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'BanksPage',
  components: { DepositPreviewComponent },
  computed: {
    ...mapGetters('depositPreview', [
      'getDeposits'
    ])
  }
}
</script>

<style scoped lang="less">
.wrapper {
  margin: 0;
  background: linear-gradient(1deg, #dceeeb, white);
  min-height: 100vh;
}

.wrapping {
  width: 1000px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 8px;
  background-color: #ffffff;
  height: 100vh;
  box-sizing: border-box;
}
.calc {
  background-color: #3550cf;
  border-radius: 24px;
  margin-bottom: 29px;
  margin-top: 15px;
  display: flex;
  padding-bottom: 15px;
  font-family: 'Ubuntu';

  &__left {
    width: 75%;
  }

  &__filters {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;

    &__block {
      width: 192px;
      height: 54px;
      border-radius: 14px;
      background-color: #f2f2f2;

      &__sum {
        padding-top: 16px;
        padding-left: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #887d7d;
      }

      &__title {
        padding-top: 6px;
        padding-left: 14px;
        font-size: 15px;
        font-weight: 600;
        color: #887d7d;
      }

      &__value {
        display: flex;
        justify-content: space-between;

        &__text {
          padding-left: 14px;
          font-size: 20px;
          font-weight: 600;
          color: #000000;
        }

        &__img {
          margin-top: -15px;
          width: 38px;
          height: 38px;
          margin-right: 8px;
        }
      }
    }

    &__item {
      background-color: white;
      color: #061a76;
      border-radius: 26px;
      padding: 7px 10px;
      font-weight: 600;
    }
  }

  &__btn {
    background: white;
    border-radius: 18px;
    border: 0px;
    color: #3550cf;
    box-shadow: 3px 5px 2px 0px #3e3e3ed1;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 26px;
    line-height: 55px;
    font-weight: 700;
    margin-left: 32px;
  }
}
</style>
