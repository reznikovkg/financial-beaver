<template>
  <div class="wrapper">
    <div class="ivanoff-page">
      <div class="ivanoff-page__up">
        <div class="ivanoff-page__horizontal ivanoff-page__left" style="float: left;">
          <img src="bankIcons/Ivanoff.png" alt="bank image" class="ivanoff-page__image">
          <h1>Ivanoff</h1>
        </div>
        <div v-if="withNumber" class="ivanoff-page__horizontal ivanoff-page__number">
          лиц. №014889
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
        <router-link v-if="buttonText" class="ivanoff-page__button-link" :to="routeBtn">
          <button class="ivanoff-page__button">{{ buttonText }}</button>
        </router-link>
        <div class="ivanoff-page__right" style="margin: 15px; display: flex; justify-content: center; flex-direction: column; text-align: center;">
          <img src="bankIcons/Ivanoff.png" alt="bank image" style="width: 50%; height: auto; margin-left: auto; margin-right: auto;">
          <h3 style="margin: 0; font-family: 'Jost';">IVANOFF</h3>
          <p style="margin: 0;">8800***4821</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IvanoffBankBaseComponent',
  props: {
    buttonText: String,
    default: null,
    routeBtn: Object,
    withNumber: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  margin: 0;
  background: linear-gradient(1deg, #efcec3, white);
  min-height: 100vh;
}
.ivanoff-page {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;

  &__slot {
    min-height: 100px;
  }

  &__up {
    display: flex;
    border-bottom: 2px solid black;
    background-color: #ffffff;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeaea;
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
    padding-left: 56px;
  }

  &__left {
    margin-left: 0px;
  }

  &__number {
    font-family: 'Open Sans';
    font-weight: 600;
    opacity: 0.75;
    font-size: 16px;
    padding-left: 10px;
    color: #212940;
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
    cursor: pointer;

    &-link {
      text-decoration: none;
    }
  }
}
</style>
