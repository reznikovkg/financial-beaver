import ExampleModal from '../components/modals/ExampleModal.vue'
import BoberModal from '../components/modals/BoberModal.vue'
import GoalsModal from '../components/modals/GoalsModal.vue'
import AdvertisingModal from '../components/modals/AdvertisingModal .vue'
import GoldenRingModal from '@/components/modals/GoldenRingModal.vue'

export default {
  install (Vue, options) {
    Vue.prototype.$openExampleModal = function (v) {
      this.$modal.show(ExampleModal, { param: 1, v }, { width: '300px' })
    }
    Vue.prototype.$openBoberModal = function (v) {
      if (!localStorage.infoPageOpened) {
        this.$modal.show(BoberModal, { param: 1, v }, { width: '400px', class: 'modal-bober' })
      }
    }
    Vue.prototype.$openGoalsModal = function (v) {
      this.$modal.show(GoalsModal, { param: 1, v }, { width: '400px', class: 'modal-bober' })
    }
    Vue.prototype.$openAdvertisingModal = function (v) {
      this.$modal.show(AdvertisingModal, { param: 1, v }, { width: '900px', height: 'auto', class: 'modal-adv' })
    }
    Vue.prototype.$openGoldenRingModal = function (v) {
      this.$modal.show(GoldenRingModal, { param: 1, v }, { width: '1200px', height: 'auto', class: 'modal-adv' })
    }
  }
}
