<template>
  <IvanoffBankBaseComponent button-text="Оформить онлайн">
    <IvanoffBankContentComponent/>
  </IvanoffBankBaseComponent>
</template>

<script>
import IvanoffBankBaseComponent from './components/IvanoffBankBaseComponent.vue'
import IvanoffBankContentComponent from './components/IvanoffBankContentComponent.vue'

export default {
  name: 'IvanoffBankPage',
  components: { IvanoffBankBaseComponent, IvanoffBankContentComponent },
  mounted () {
    this.$openBoberModal({ param2: '2' })
  }
}
</script>

<style lang="less" scoped>
</style>
