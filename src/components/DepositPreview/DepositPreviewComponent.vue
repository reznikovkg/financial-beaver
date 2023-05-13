<template>
  <div>
    <ul class="deposit-preview">
      <li style="width: 12%;">
        <div class="deposit-preview__img">
          <img :src="deposit.bankIcon" alt="BankIcon" class="deposit-preview__image" />
        </div>
      </li>
      <li style="width: 40%;" class="deposit-preview__block">
        <div style="font-size: 26px; font-weight: bold;">{{ deposit.depositName }}</div>
        <div class="deposit-preview__flex">
          <div style="opacity: 75%; margin-right:10px; font-weight: bold; font-size: 18px;">{{ deposit.bankName }}</div>
          <div style="opacity: 75%; margin-right: 10px; font-size: 18px;">лиц. №{{ deposit.licenseNumber }}</div>
          <div style="opacity: 50%; font-size: 18px">★ {{ deposit.rating }}</div>
        </div>
      </li>
      <li class="deposit-preview__block" style="width: 10%;">
        <div style="font-weight: bold;">Ставка</div>
        <div style="font-size: medium;">До {{ deposit.rate }}%</div>
      </li>
      <li class="deposit-preview__block" style="width: 12%;">
        <div style="font-weight: bold;">Срок</div>
        <div style="font-size: medium;">{{ deposit.period }}</div>
      </li>
      <li class="deposit-preview__block" style="width: 14%;">
        <div style="font-weight: bold;">Сумма</div>
        <div style="font-size: medium;">{{ deposit.sum }}₽</div>
      </li>
      <li>
        <router-link :to="{ name: deposit.url }">
          <button
            style="font-size: x-large; font-weight: bold;"
            class="deposit-preview__button"
            :disabled="deposit.isButtonDisabled"
          >
            Выбрать
          </button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DepositPreview',
  props: {
    deposit: Object
  }
}
</script>

<style lang="less" scoped>
.deposit-preview {
  margin: 0px;
  background: #4E63D926;
  border: 5px;
  border-radius: 30px;
  padding: 0px;
  display: table;
  justify-content: left;
  align-items: center;
  height: 120px;
  width: 100%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  color: #212940;
  margin-bottom: 20px;
  font-family: 'Ubuntu';
  & ul {
    display: table-row;
  }
  & li {
    display: table-cell;
    text-align: left;
    height: 100px;
    vertical-align: middle;

    &:last-child {
      text-align: right;
      white-space: nowrap;
    }
  }
  &__block>* {
    margin-bottom: 6px;
    font-size: large;
  }
  &__flex {
    display: flex;
    &>* {
      margin-right: 10px;
    }
  }

  &__img {
    width: 74px;
    height: 74px;
    margin-left: 20px;
    background-color: #f2f2f2;
    border-radius: 100%;
  }

  &__image {
    height: auto;
    width: 72px;
    border-radius: 50%;
    margin-left: 2px;
    margin-top: 2px;
  }
  &__button {
    background: #4E63D9;
    height: 68px;
    border-radius: 20px;
    border: 0px;
    color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    padding-left: 25px;
    padding-right: 25px;
    margin-right: 25px;
    cursor: pointer;
    &:hover {
      background: #3a4aa4;
    }
    &:disabled {
      background: #4d4d4deb;
      cursor: default;
    }
  }
}
</style>
