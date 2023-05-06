<template>
  <div class="ivanoff-page">
    <IvanoffCalcutionComponent/>
  </div>
</template>

<script>
import IvanoffCalcutionComponent from './IvanoffBankPage/components/IvanoffCalcutionComponent.vue'
export default {
  name: 'CalculationPage',
  components: { IvanoffCalcutionComponent }
}
</script>

<style scoped lang="less">
.ivanoff-page {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
}
</style>
