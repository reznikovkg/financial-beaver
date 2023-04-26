<template>
  <table class="noselect deposit-info" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center">
        <span class="deposit-info__text">Вклад: "{{ name }}"</span>
      </td>
      <td align="center">
        <span class="deposit-info__text">Процент: до {{ percentage }}%</span>
      </td>
      <td align="center">
        <span class="deposit-info__text">Срок: {{ term }}</span>
      </td>
      <td align="right">
        <span class="deposit-info__text">Сумма: от {{ separateDigitsInNumber(minDepositSum) }}</span>
      </td>
    </tr>
    <tr>
      <td colspan="4" align="right">
        <RoundedButton class="deposit-info__calculate">Рассчитать доход</RoundedButton>
      </td>
    </tr>
  </table>
</template>

<script>
import RoundedButton from './RoundedButton.vue'

export default {
  name: 'DepositInfo',
  components: {
    RoundedButton
  },
  props: {
    name: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true
    },
    term: {
      type: String,
      required: true
    },
    minDepositSum: {
      type: Number,
      required: true
    }
  },
  methods: {
    separateDigitsInNumber (number, separator = '.') {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
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
