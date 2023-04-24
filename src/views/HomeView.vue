<template>
  <div class="home">
    <p><router-link :to="{ name: 'btn' }">
      Btn
    </router-link></p>
    <p><router-link :to="{ name: 'banks' }">
      banks page
    </router-link></p>
    <router-link :to="{ name: 'search' }">
      Search page
    </router-link>
    <p>
      <button @click="() => openExampleModal()">Открыть модалку</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    openExampleModal () {
      this.$openExampleModal({ param2: '2' })
    }
  }
}
</script>
