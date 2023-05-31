<template>
  <div id="app">
    <RouterView />
    <div class="panel">
      <button v-if="!showPanel" @click="showPanel = true">Показать</button>
      <div v-else class="panel__block">
        <p>
          <router-link :to="{ name: 'home' }">
            Main Search
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'search' }">
            Search Result
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'banks' }">
            Banks List
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'golden-ring' }">
            Golden Page
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'sper-page' }">
            Sper Page
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'ivanoff' }">
            Ivanoff page
          </router-link>
        </p><p>
          <router-link :to="{ name: 'ivanoff-info' }">
            Ivanoff Info page
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'license-info-search' }">
            License Information Page
          </router-link>
        </p>
        <p>
          <router-link :to="{ name: 'result' }">
            Result Page
          </router-link>
        </p>
        <p>
          <button @click="() => openBoberModal()">Открыть предупреждение</button>
        </p>
        <p>
          <button @click="() => openGoalsModal()">Открыть цели</button>
        </p>
        <p>
          <button @click="() => openAdvertisingModal()">Открыть модалку рекламы</button>
        </p>
        <button @click="showPanel = false">Скрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showPanel: false
    }
  },
  methods: {
    openBoberModal () {
      this.$openBoberModal({ param2: '2' })
    },
    openGoalsModal () {
      this.$openGoalsModal({ param2: '2' })
    },
    openAdvertisingModal () {
      this.$openAdvertisingModal({ param2: '2' })
    }
  }
}
</script>

<style style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@600;700&family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300&family=Jost:wght@600&family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@600&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@700&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@600&family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Prata&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800');

body {
  margin: 0;
  padding: 0;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.modal-bober .vm--modal {
  border: 3px solid #5c5cff;
  border-radius: 28px;
  overflow: visible;
}

.modal-adv .vm--modal {
  border-radius: 28px;
  overflow: visible;
  background-color: #5b6172;
}

.text-center {
  text-align: center;
}

.panel {
  position: fixed;
  right: 10px;
  bottom: 10px;

  &__block {
    background-color: white;
    border: 1px solid gray;
    padding: 10px;
  }
}
</style>
