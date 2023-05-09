<template>
  <img class="wide-pattern-top" src="../../../../assets/pattern.png" alt="Узор"/>
</template>

<script>
export default {
  name: 'WideTopPattern',
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
