<template>
  <div class="wrapper">
    <IvanoffBankBaseComponent button-text="Оформить онлайн">
    </IvanoffBankBaseComponent>
  </div>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'

export default {
  name: 'IvanoffBankPage',
  components: { IvanoffBankBaseComponent }
}
</script>

<style lang="less">
body {
  margin: 0;
  background-color: rgb(255, 248, 235);
}
</style>
