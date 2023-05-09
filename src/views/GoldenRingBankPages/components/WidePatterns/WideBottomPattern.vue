<template>
  <img class="wide-pattern-bottom" src="../../../../assets/pattern.png" alt="Узор"/>
</template>

<script>
import router from '@/router'

export default {
  name: 'WideBottomPattern',
  props: {
    static: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onDepositContractClick () {
      router.push('')
    }
  }
}
</script>

<style lang="less" scoped>
@import "styles/styles.less";
</style>
