import ExampleModal from '../components/modals/ExampleModal.vue'
import BoberModal from '../components/modals/BoberModal.vue'

export default {
  install (Vue, options) {
    Vue.prototype.$openExampleModal = function (v) {
      this.$modal.show(ExampleModal, { param: 1, v }, { width: '300px' })
    }
    Vue.prototype.$openBoberModal = function (v) {
      this.$modal.show(BoberModal, { param: 1, v }, { width: '400px', class: 'modal-bober' })
    }
  }
}
