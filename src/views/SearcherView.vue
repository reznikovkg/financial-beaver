<template>
  <div class="root">
    <div class="title-container">
      <div class="title__content">
        <div class="search__name">
          Поисковик
          <span class="search__plus">+</span>
        </div>
        <div class="search-bar">
          <InputComponent value="Сравнить банки и счета" />
          <div class="search-bar__loupe">
            <span>&#128269;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bank-container">
      <div class="bank__content">
        <BankTab v-for="(item, index) in tabs" :key="index" :tab="item" />
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from '@/components/Input/Input.vue'
import BankTab from '@/components/BankTab/BankTab.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'SearcherView',
  computed: {
    ...mapGetters('tabsBank', [
      'getTabs'
    ]),
    tabs () {
      return this.getTabs
    }
  },
  components: { BankTab, InputComponent }
}
</script>

<style lang="less" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");

.root {
  color: F2F2F;
}
.title {
  &-container {
    display: flex;
    border-bottom: 3px solid gray;
    margin-top: 40px;
    padding-bottom: 40px;
    vertical-align: middle;
  }

  &__content {
    display: flex;
    margin-left: 23%;
  }
}
.search {
  &__name {
    font-size: 40px;
    font-family: "Yeseva One", cursive;

    &::first-letter {
      color: blue;
    }
  }
  &__plus {
    font-size: 80%;
  }

  &-bar {
    overflow: hidden;
    border: 2px solid #212940;
    border-radius: 40px;
    margin-left: 90px;
    display: flex;
    height: auto;

    &__text {
      font-family: "Ubuntu", sans-serif;
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 41px;
      color: #212940;
      margin-left: 25px;
      padding-right: 150px;
    }

    &__loupe {
      display: flex;
      align-items: center;
      border-left: 2px solid gray;
      min-height: 100%;

      span{
        margin-left: 20px;
        font-size: 25px;
        margin-right: 20px;
      }
    }
  }
}
.bank__content {
  margin-top: 40px;
  margin-left: 23%;
}
</style>
