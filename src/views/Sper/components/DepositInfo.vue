<template>
  <table class="noselect deposit-info" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center">
        <span class="deposit-info__text">Вклад: "{{ deposit.name }}"</span>
      </td>
      <td align="center">
        <span class="deposit-info__text">Процент: до {{ deposit.percentage }}%</span>
      </td>
      <td align="center">
        <span class="deposit-info__text">Срок: {{ deposit.monthCount }}мес</span>
      </td>
      <td align="right">
        <span class="deposit-info__text">Сумма: от {{ separateDigitsInNumber(deposit.minDepositSum) }}</span>
      </td>
    </tr>
    <tr>
      <td colspan="4" align="right">
        <router-link :to="{ path: 'sper-calc', query: { id: deposit.id } }">
          <RoundedButton class="deposit-info__calculate">
            Рассчитать доход
          </RoundedButton>
        </router-link>
      </td>
    </tr>
  </table>
</template>

<script>
import RoundedButton from './RoundedButton.vue'
import { separateDigitsInNumber } from '../utils'

export default {
  name: 'DepositInfo',
  components: {
    RoundedButton
  },
  props: {
    deposit: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      percentage: {
        type: Number,
        required: true
      },
      monthCount: {
        type: Number,
        required: true
      },
      minDepositSum: {
        type: Number,
        required: true
      }
    }
  },
  setup () {
    return {
      separateDigitsInNumber
    }
  }
}
</script>

<style lang="less">
.deposit-info {
  padding: 2.25vmin;

  background: #D9D9D9;
  border-radius: 25px;

  &__text {
    font-family: 'Inter';
    font-weight: bold;
    font-size: 4.5vmin;
    text-shadow: 1px 0 1px #B9B9B9,
      0 1px 1px #B9B9B9,
      -1px 0 1px #B9B9B9,
      0 -1px 1px #B9B9B9;

    color: white;
  }

  &__calculate {
    margin-top: 1vmin;
  }
}
</style>
