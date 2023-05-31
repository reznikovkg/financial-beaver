<template>
  <IvanoffBankBaseComponent button-text="Оформить онлайн" :route-btn="{ name: 'ivanoff-info' }">
    <IvanoffCalcutionComponent/>
  </IvanoffBankBaseComponent>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'
import IvanoffCalcutionComponent from './../IvanoffBankPage/components/IvanoffCalcutionComponent.vue'
export default {
  name: 'CalculationPage',
  components: {
    IvanoffCalcutionComponent,
    IvanoffBankBaseComponent
  }
}
</script>

<style scoped lang="less">
</style>
