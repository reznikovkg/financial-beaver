<template>
  <div class="wrapper">
    <div class="wrapping">
      <div class="calc">
        <div class="calc__left">
          <div class="calc__filters">
            <span class="calc__filters__item">Все фильтры</span>
            <span class="calc__filters__item">С пополнением</span>
            <span class="calc__filters__item">Частичное снятие</span>
            <span class="calc__filters__item">Онлайн открытие</span>
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

  &__left {
    width: 75%;
  }

  &__filters {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;

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
    border-radius: 20px;
    border: 0px;
    color: #3550cf;
    box-shadow: 3px 5px 2px 0px #3e3e3ed1;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 26px;
    line-height: 55px;
    font-weight: 700;
  }
}
</style>
