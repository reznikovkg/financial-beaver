import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'

import modals from './plugins/modals'

Vue.config.productionTip = false
Vue.use(VModal)
Vue.use(modals)

new Vue({
  data () {
    return {
      modals: []
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
