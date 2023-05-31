<template>
  <IvanoffBankBaseComponent>
    <IvanoffBankContractComponent />
  </IvanoffBankBaseComponent>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'
import IvanoffBankContractComponent from './components/IvanoffBankContractComponent.vue'

export default {
  name: 'IvanoffBankContractPage',
  components: {
    IvanoffBankBaseComponent,
    IvanoffBankContractComponent
  }
}
</script>

<style scoped lang="less">
</style>
