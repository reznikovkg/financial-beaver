<template>
  <img class="wide-pattern-bottom" src="../../../../assets/pattern.png" alt="Узор"/>
</template>

<script>

export default {
  name: 'WideBottomPattern',
  props: {
    static: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import "styles/styles.less";
</style>
