import ExampleModal from '../components/modals/ExampleModal.vue'

export default {
  install (Vue, options) {
    Vue.prototype.$openExampleModal = function (v) {
      this.$modal.show(ExampleModal, { param: 1, v }, { width: '300px' })
    }
    // Для нового
    // Vue.prototype.$openExampleModal = function (v) {
    //   this.$modal.show(ExampleModal, { param: 1, v }, { width: '300px' })
    // }
  }
}
