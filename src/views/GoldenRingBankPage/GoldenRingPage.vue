<template>
  <div class="wrapper">
    <WideTopPattern/>
    <div class="content-wrapper">
      <div class="text-container">
        <span class="title block">Банк Золотое Кольцо</span>
        <span class="subtitle block">Банк для людей, которые хотят</span>
        <span class="subtitle--red block">ЖИТЬ ЛУЧШЕ</span>
        <div class="open-button"><span class="subtitle">Открыть вклад под <span class="subtitle--red">13%</span> годовых</span>
        </div>
      </div>
      <img class="pattern" src="../../assets/hohloma.png" alt="Хохлома"/>
    </div>
    <WideBottomPattern/>
  </div>
</template>

<script>
import WideTopPattern from '@/views/GoldenRingBankPage/components/WidePatterns/WideTopPattern.vue'
import WideBottomPattern from '@/views/GoldenRingBankPage/components/WidePatterns/WideBottomPattern.vue'

export default {
  name: 'GoldenRingPage',
  components: { WideBottomPattern, WideTopPattern }
}
</script>

<style lang="less">
@import "styles/styles.less";
</style>
