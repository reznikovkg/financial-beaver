<template>
  <div>
    <ul class="deposit-preview">
      <li>
        <img :src="bankIcon" alt="BankIcon" class="deposit-preview__image" />
      </li>
      <li class="deposit-preview__block">
        <div style="font-size: xx-large; font-weight: bold;">{{ depositName }}</div>
        <div class="deposit-preview__flex">
          <div style="opacity: 75%; font-weight: bold; font-size: x-large;">{{ bankName }}</div>
          <div style="opacity: 75%;">лиц. №{{ licenseNumber }}</div>
          <div style="opacity: 50%;">★ {{ rating }}</div>
        </div>
      </li>
      <li style="font-size: large;">
        <div style="font-weight: bold;">Ставка</div>
        <div style="font-size: small;">До {{ rate }}%</div>
      </li>
      <li style="font-size: large;">
        <div style="font-weight: bold;">Срок</div>
        <div style="font-size: medium;">От {{ period }}</div>
      </li>
      <li style="font-size: large;">
        <div style="font-weight: bold;">Сумма</div>
        <div style="font-size: medium;">от {{ sum }}₽</div>
      </li>
      <li>
        <button style="font-size: x-large; font-weight: bold;" class="deposit-preview__button"
          :class="{ 'deposit-preview__button--disabled': isButtonDisabled }" :disabled="isButtonDisabled">Выбрать</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DepositPreview',
  props: {
    bankIcon: String,
    depositName: String,
    bankName: String,
    licenseNumber: String,
    rating: Number,
    rate: Number,
    period: String,
    sum: String,
    isButtonDisabled: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.deposit-preview {
  margin: 0px;
  background: #4E63D926;
  border: 5px;
  border-radius: 30px;
  padding: 10px;
  display: table;
  justify-content: left;
  align-items: center;
  height: 100px;
  width: calc(100% - 20px);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  color: #212940;
  margin: 20px;

  & ul {
    display: table-row;
  }

  & li {
    display: table-cell;
    text-align: left;
    height: 100px;
    vertical-align: middle;

    &.left {
      text-align: left;
      white-space: nowrap;
    }

    &.right {
      text-align: right;
      white-space: nowrap;
    }
  }

  &__block {
    display: block;
    padding: inherit;
  }

  &__flex {
    display: flex;
    padding-top: 10px;
    &>* {
      margin-right: 10px;
    }
  }

  &__image {
    height: 100%;
    width: auto;
    border-radius: 50%;
  }

  &__button {
    background: #4E63D9;
    height: 70%;
    border-radius: 20px;
    border: 0px;
    color: rgb(216, 216, 216);
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    &:hover {
      background: #3a4aa4;
    }
    &--disabled {
      background: #4d4d4deb;
    }
  }
}</style>
