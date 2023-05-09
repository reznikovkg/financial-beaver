<template>
  <div class="home">
    <MainSearcher />
  </div>
</template>

<script>
import MainSearcher from './../components/parts/search/MainSearcher'

export default {
  name: 'HomeView',
  components: {
    MainSearcher
  },
  mounted () {
    this.$openGoalsModal({ param2: '2' })
  }
}
</script>
