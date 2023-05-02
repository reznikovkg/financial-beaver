<template>
  <div class="wrapper">
    <IvanoffBankBaseComponent button-text="Оформить онлайн">
      <IvanoffBankContentComponent/>
    </IvanoffBankBaseComponent>
  </div>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'
import IvanoffBankContentComponent from './components/IvanoffBankContentComponent.vue'

export default {
  name: 'IvanoffBankPage',
  components: { IvanoffBankBaseComponent, IvanoffBankContentComponent }
}
</script>

<style lang="less">
body {
  margin: 0;
  background-color: rgb(255, 248, 234);
}
</style>
