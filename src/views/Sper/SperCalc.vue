<template>
  <div class="sper-calc">
    <SperLogo class="sper-calc__logo" />
    <div class="sper-calc__border" />
    <span class="noselect sper-calc__header">Калькулятор:</span>
    <table class="sper-calc__body" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td width="20%" align="center" class="noselect sper-calc__body__header">
          Сумма вклада (руб.)
        </td>
        <td width="20%" align="center" class="noselect sper-calc__body__header">
          Срок (мес.)
        </td>
        <td width="20%" align="center" class="noselect sper-calc__body__header">
          Ваша ставка (%)
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle-top">
          Итог:<br>{{ separateDigitsInNumber(this.deposit.minDepositSum + this.calculateIncome, ' ') }}
        </td>
      </tr>
      <tr>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          <RoundedTextInput v-model="minDepositSum" id="minDepositSum" />
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          <RoundedTextInput v-model="monthCount" id="monthCount" />
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          <RoundedTextInput v-model="percentage" id="percentage" />
        </td>
        <td align="center" class="sper-calc__body__item">
          Доход:<br>{{ separateDigitsInNumber(this.calculateIncome, ' ') }}
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <RoundedCheckbox v-model="auto_continue" id="auto-continue" notActiveColor="#2AB514">
            Автоматическое продление
          </RoundedCheckbox>
        </td>
        <td class="sper-calc__body__item sper-calc__body__item--cycle-bottom" />
      </tr>
    </table>
    <RoundedButton @click="() => openAdv()" class="order-button" button-shadow="" border-radius="15px">
      Оформить
    </RoundedButton>
  </div>
</template>

<script>
import SperLogo from './components/SperLogo.vue'
import RoundedButton from './components/RoundedButton.vue'
import RoundedTextInput from './components/RoundedTextInput.vue'
import RoundedCheckbox from './components/RoundedCheckbox.vue'
import { separateDigitsInNumber } from './utils'
import { mapGetters } from 'vuex'

export default {
  name: 'SperCalc',
  components: {
    SperLogo,
    RoundedButton,
    RoundedTextInput,
    RoundedCheckbox
  },
  computed: {
    ...mapGetters('sperDeposits', [
      'getDeposits'
    ]),
    deposit () {
      return this.getDeposits.find(e => e.id === this.id)
    },
    calculateIncome () {
      const monthsPerYear = 12
      return this.deposit.minDepositSum * this.deposit.percentage / 100 / monthsPerYear * this.deposit.monthCount
    },
    minDepositSum: {
      get () {
        return this.deposit.minDepositSum.toString()
      },
      set (value) {
        const parsedValue = parseInt(value, 10)
        this.deposit.minDepositSum = !isNaN(parsedValue)
          ? parsedValue
          : this.deposit.minDepositSum
      }
    },
    monthCount: {
      get () {
        return this.deposit.monthCount.toString()
      },
      set (value) {
        const parsedValue = parseInt(value, 10)
        this.deposit.monthCount = !isNaN(parsedValue)
          ? parsedValue
          : this.deposit.monthCount
      }
    },
    percentage: {
      get () {
        return this.deposit.percentage.toString()
      },
      set (value) {
        const parsedValue = parseInt(value, 10)
        this.deposit.percentage = !isNaN(parsedValue)
          ? parsedValue
          : this.deposit.percentage
      }
    }
  },
  setup () {
    return {
      separateDigitsInNumber
    }
  },
  data () {
    return {
      auto_continue: false,
      id: +this.$route.query.id,
      isShowAdv: false
    }
  },
  methods: {
    openAdv () {
      console.log(1)
      if (!this.isShowAdv) {
        this.isShowAdv = true
        this.$openAdvertisingModal({ param2: '2' })
        return 1
      }

      this.$router.push({ name: 'sper-contract' })
    }
  }
}
</script>

<style lang="less" scoped>
.sper-calc {
  padding: 32.5px;
  background-color: #F2F2F2;
  min-height: 100vh;
  box-sizing: border-box;

  &__border {
    padding-top: 13px;
    border-top: 2px solid #727272;
  }

  &__logo {
    margin-bottom: 13px;
  }

  &__header {
    font-family: "Prata";
    font-size: 32.5px;

    text-align: center;

    display: inline-block;
    width: 100%;
  }

  &__body {
    background: #D9D9D9;

    border-radius: 15px;
    border-collapse: separate;
    border-spacing: 32.5px 0px;

    padding: 13px 6.5px;
    margin: 32.5px 0px;

    &__header {
      font-family: "Prata";
      font-size: 21.12px;
    }

    &__item {
      font-family: "Prata";
      font-size: 21.12px;

      background: white;

      height: 55.25px;

      &--cycle {
        border-radius: 15px;
      }

      &--cycle-top {
        border-radius: 15px 15px 0px 0px;
      }

      &--cycle-bottom {
        border-radius: 0px 0px 15px 15px;
      }
    }
  }
}

.order-button {
  float: right;
  height: 65px;
}
</style>
