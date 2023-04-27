<template>
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
      v-for="(i, index) in deposits"
      :key="index"
      :deposit="i"

      :bank-icon="i.bankIcon"
      :deposit-name="i.depositName"
      :bank-name="i.bankName"
      :license-number="i.licenseNumber"
      :rating="i.rating"
      :rate="i.rate"
      :period="i.period"
      :sum="i.sum"
      :is-button-disabled="i.isButtonDisabled"
    ></DepositPreviewComponent>
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
    ]),
    deposits () {
      return this.getDeposits
    }
  }
}
</script>

<style scoped lang="less">
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

.wrapping {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
