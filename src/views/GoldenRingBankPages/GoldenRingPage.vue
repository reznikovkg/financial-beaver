<template>
  <div class="wrapper">
    <WideTopPattern/>
    <div class="content-wrapper">
      <div class="text-container">
        <span class="title block licenz">Банк Золотое Кольцо</span>
        <span class="subtitle block">Банк для людей, которые хотят</span>
        <span class="subtitle--red block">ЖИТЬ ЛУЧШЕ</span>
        <div class="open-button"><span class="subtitle" @click="() => onOpenDeposit()">Открыть вклад под <span class="subtitle--red">13%</span> годовых</span>
        </div>
      </div>
      <img class="pattern" src="../../assets/hohloma.png" alt="Хохлома"/>
    </div>
    <WideBottomPattern/>
  </div>
</template>

<script>
import WideTopPattern from '@/views/GoldenRingBankPages/components/WidePatterns/WideTopPattern.vue'
import WideBottomPattern from '@/views/GoldenRingBankPages/components/WidePatterns/WideBottomPattern.vue'
import router from '@/router'

export default {
  name: 'GoldenRingPage',
  components: { WideBottomPattern, WideTopPattern },
  mounted () {
    this.$openBoberModal({ param2: '2' })
  },
  methods: {
    onOpenDeposit () {
      router.push('/golden-ring-deposit')
    }
  }
}
</script>

<style lang="less" scoped>
@import "styles/styles.less";
</style>
