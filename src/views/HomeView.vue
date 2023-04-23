<template>
  <div class="home">
    <p><router-link :to="{ name: 'btn' }">
      Btn
    </router-link></p>
    <p><router-link :to="{ name: 'banks' }">
      banks page
    </router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
