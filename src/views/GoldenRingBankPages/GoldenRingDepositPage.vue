<template>
  <div class="wrapper">
    <WideTopPattern/>
    <div class="content" style="position: relative;">
      <span class="title">Вклад "Выгода"</span>
      <RedLine/>
      <div class="text-line">
        <div>
          Минимальный срок:
        </div>
        <div>
          90 дней
        </div>
      </div>
      <RedLine/>
      <div class="text-line">
        <div>
          Минимальная сумма:
        </div>
        <div>
          30000 р
        </div>
      </div>
      <RedLine/>
      <div class="text-line">
        <div>
          Ставка:
        </div>
        <div>
          13%
        </div>
      </div>
      <RedLine style="position: static"/>
      <div class="buttons-container">
        <button class="button" @click="() => onIncomeCalculate()">Рассчитать доход</button>
        <button class="button" @click="() => onOpenDeposit()">Показать договор</button>
        <router-link :to="{ name: 'result', query: { bank: 'gk' } }">
          <button class="button" style="border: solid red 4px">Оформить вклад</button>
        </router-link>
      </div>
    </div>
    <WideBottomPattern/>
  </div>
</template>

<script>
import WideTopPattern from '@/views/GoldenRingBankPages/components/WidePatterns/WideTopPattern.vue'
import WideBottomPattern from '@/views/GoldenRingBankPages/components/WidePatterns/WideBottomPattern.vue'
import RedLine from '@/views/GoldenRingBankPages/components/Separator/RedLine.vue'
import router from '@/router'

export default {
  name: 'GoldenRingPage',
  components: { RedLine, WideBottomPattern, WideTopPattern },
  methods: {
    onOpenDeposit () {
      router.push('/golden-ring-contract')
    },
    onIncomeCalculate () {
      this.$openGoldenRingModal()
    }
  }
}
</script>

<style lang="less" scoped>
@import "styles/styles.less";

.content {
  text-align: center;
  padding-top: 19vmin;
}

.title {
  font-family: 'Lobster', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 9vmin;
  color: #E1B61C;
}

.text-line {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: Lobster, serif;
  font-size: 6vmin;
  font-weight: 400;
  margin-left: 25vmin;

  & div:first-child {
    text-align: left;
    width: 60%;
  }
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 4vmin 0;
}
</style>
