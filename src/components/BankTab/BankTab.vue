<template>
  <router-link :to="tab.url ? { name: 'banks' } : {}">
    <div class="tab__container">
      <div class="tab__header">
        <div class="tab__image"></div>
        <div class="tab__urls">
          <div class="tab__domen">{{ tab.siteName }}</div>
          <div class="tab__url">{{ tab.siteUrl }}</div>
        </div>
      </div>
      <div class="tab__content">
        <div class="tab__title">{{ tab.linkTitle }}</div>
        <div class="tab__description">{{ tab.addInfo }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    tab: {}
  }
}
</script>

<style lang="less" scoped>
.tab {
  &__container {
    margin-top: 50px;
    width: 1000px;
  }
  &__header {
    display: flex;
  }
  &__urls {
    margin-left: 15px;
    margin-top: 2px;
  }
  &__image {
    width: 30px;
    height: 30px;
    background-color: #3532d980;
    border: 1px solid black;
    border-radius: 100%;
    max-width: 100%;
    margin-top: 5px;
  }
  &__domen {
    font-family: "Yeseva One";
    color: #212940;
  }
  &__url {
    font-family: "Yeseva One";
    color: #212940bf;
  }
  &__title {
    color: #3532d9;
    font-family: "Yeseva One";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 46px;
    margin-top: 3px;
  }
  &__description {
    font-family: "Yeseva One";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    width: 720px;
    margin-top: 5px;
    word-wrap: break-all;
    color: #212940bf;
  }
}
</style>
