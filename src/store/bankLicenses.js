import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    licenses: [
      {
        code: 'Б П С',
        regNumber: '34522',
        govRegNumber: '18923678259543',
        name: 'ЗАО "Спербанк"',
        address: '403118, г. Урюпинск, ул. Зои Космодемьянской, д. 14/8 '
      }
    ],
    selectedLicense: null
  },
  getters: {
    getLicenses: (state) => state.licenses,
    getSelectedLicense: (state) => state.selectedLicense
  },
  mutations: {
    setSelectedLicense: (state, payload) => {
      state.selectedLicense = payload
    }
  },
  actions: {
    selectLicense: (ctx, payload) => {
      ctx.commit('setSelectedLicense', payload)
    }
  }
}
