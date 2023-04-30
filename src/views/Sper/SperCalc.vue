<template>
  <div class="sper-calc">
    <SperLogo class="sper-calc__logo" />
    <div class="sper-calc__border" />
    <span class="noselect sper-calc__header">Калькулятор:</span>
    <table class="sper-calc__body" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td width="15%" align="center" class="noselect sper-calc__body__header">
          Сумма вклада
        </td>
        <td width="15%" align="center" class="noselect sper-calc__body__header">
          Срок
        </td>
        <td width="15%" align="center" class="noselect sper-calc__body__header">
          Ваша ставка
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle-top">
          Итог:<br>{{ separateDigitsInNumber(this.deposit.minDepositSum + this.calculateIncome, ' ') }}
        </td>
      </tr>
      <tr>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          {{ separateDigitsInNumber(this.deposit.minDepositSum) }}р
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          {{ getPeriod(this.deposit.monthCount) }}.
        </td>
        <td align="center" class="sper-calc__body__item sper-calc__body__item--cycle">
          {{ this.deposit.percentage }}%
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
    <router-link :to="{ path: 'sper-contract' }">
      <RoundedButton class="order-button" :buttonShadow="false" borderRadius="15px">
        Оформить
      </RoundedButton>
    </router-link>
  </div>
</template>

<script>
import SperLogo from './components/SperLogo.vue'
import RoundedButton from './components/RoundedButton.vue'
import RoundedCheckbox from './components/RoundedCheckbox.vue'
import { separateDigitsInNumber, getPeriod } from './utils'
import { mapGetters } from 'vuex'

export default {
  name: 'SperCalc',
  components: {
    SperLogo,
    RoundedButton,
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
    }
  },
  setup () {
    return {
      separateDigitsInNumber,
      getPeriod
    }
  },
  data () {
    return {
      auto_continue: false,
      id: +this.$route.query.id
    }
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');

body {
  background-color: #F2F2F2;
}

.sper-calc {
  padding: 5vmin;

  &__border {
    padding-top: 2vmin;
    border-top: 2px solid #727272;
  }

  &__logo {
    margin-bottom: 2vmin;
  }

  &__header {
    font-family: "Prata";
    font-size: 5vmin;

    text-align: center;

    display: inline-block;
    width: 100%;
  }

  &__body {
    background: #D9D9D9;

    border-radius: 15px;
    border-collapse: separate;
    border-spacing: 5vmin 0vmin;

    padding: 2vmin 1vmin;
    margin: 5vmin 0vmin;

    &__header {
      font-family: "Prata";
      font-size: 3.25vmin;
    }

    &__item {
      font-family: "Prata";
      font-size: 3.25vmin;

      background: white;

      height: 8.5vmin;

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
  height: 10vmin;
}
</style>
