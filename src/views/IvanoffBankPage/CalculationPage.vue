<template>
  <div class="ivanoff-page">
    <IvanoffBankBaseComponent button-text="Оформить онлайн">
      <IvanoffCalcutionComponent/>
    </IvanoffBankBaseComponent>
  </div>
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
.ivanoff-page {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
</style>
