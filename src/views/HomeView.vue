<template>
  <div class="home">
    <p><router-link :to="{ name: 'btn' }">
        Btn
      </router-link></p>
    <p><router-link :to="{ name: 'banks' }">
        Banks page
      </router-link></p>
    <p><router-link :to="{ name: 'search' }">
        Search page
      </router-link></p>
    <p><router-link :to="{ name: 'mainSearch' }">
        MainSearch
    </router-link></p>
    <p><button @click="() => openExampleModal()">Открыть модалку</button></p>
    <p><router-link :to="{ name: 'result' }">
        Result Page
      </router-link></p>
    <p><router-link :to="{ name: 'license-info-search' }">
      License Information Page
    </router-link></p>
      <p><router-link :to="{ name: 'ivanoff' }">
        Ivanoff page
      </router-link></p>
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
