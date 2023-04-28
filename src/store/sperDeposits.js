import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    deposits: [
      {
        id: 1,
        name: 'Легкий',
        percentage: 40,
        monthCount: 3,
        minDepositSum: 30000
      },
      {
        id: 2,
        name: 'Вверх!',
        percentage: 50,
        monthCount: 3,
        minDepositSum: 50000
      }
    ]
  },
  getters: {
    getDeposits: (state) => state.deposits
  }
}
