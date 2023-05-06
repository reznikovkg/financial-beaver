<template>
  <div class="ivanoff-page">
    <div class="ivanoff-page__up">
      <div class="ivanoff-page__horizontal ivanoff-page__left" style="float: left;">
        <img src="bankIcons/Ivanoff.png" alt="bank image" class="ivanoff-page__image">
        <h1>Ivanoff</h1>
      </div>
      <div class="ivanoff-page__horizontal ivanoff-page__right" style="float: right;">
        <img src="IvanoffBank/keyhole.png" alt="keyhole image" class="ivanoff-page__image">
        <div>
          <div class="ivanoff-page__menu-bar"></div>
          <div class="ivanoff-page__menu-bar"></div>
          <div class="ivanoff-page__menu-bar"></div>
        </div>
      </div>
    </div>
    <div class="ivanoff-page__slot">
      <slot></slot>
    </div>
    <div class="ivanoff-page__bottom">
      <div class="ivanoff-page__horizontal ivanoff-page__left" style="margin: 15px;">
        <img src="IvanoffBank/down_left.png" alt="flags/contact">
      </div>
      <button class="ivanoff-page__button">{{ buttonText }}</button>
      <div class="ivanoff-page__right" style="margin: 15px; display: flex; justify-content: center; flex-direction: column; text-align: center;">
        <img src="bankIcons/Ivanoff.png" alt="bank image" style="width: 50%; height: auto; margin-left: auto; margin-right: auto;">
        <h3 style="margin: 0;">Ivanoff</h3>
        <p style="margin: 0;">8800***4821</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IvanoffBankBaseComponent',
  props: {
    buttonText: String
  }
}
</script>

<style scoped lang="less">
.ivanoff-page {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(rgb(255, 255, 255) 42%, rgb(229, 229, 229) 40%) no-repeat;

  &__slot {
    min-height: 100px;
    margin: 15px;
  }

  &__up {
    display: flex;
    border-bottom: 2px solid black;
  }

  &__bottom {
    display: flex;
  }

  &__horizontal {
    display: flex;
    align-items: center;
  }

  &__menu-bar {
    width: 45px;
    height: 8px;
    background-color: rgb(194, 4, 4);
    margin: 6px 0;
    border-radius: 10px;
    margin: 10px;
  }

  &__image {
    width: 100%;
    height: auto;
    margin-left: 15px;
    margin-right: 15px;
  }

  &__right {
    margin-right: 0px;
    margin-left: auto;
  }

  &__left {
    margin-right: auto;
    margin-left: 0px;
  }
  &__button {
    margin: auto;
    width: 400px;
    height: 50px;
    border-radius: 15px;
    border: 0px;
    background-color: red;
    color: white;
    font-size: xx-large;
    font-weight: bold;
  }
}
</style>
