import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    licenses: [
      {
        code: 'отз.',
        regNumber: '139428',
        govRegNumber: '18923678259543',
        name: 'ЗАО "Спербанк"',
        address: '403118, г. Урюпинск, ул. Зои Космодемьянской, д. 14/8 ',
        urlName: 'sper-page'
      },
      {
        code: 'Б П С',
        regNumber: '923045',
        govRegNumber: '18923678259543',
        name: 'ЗАО "Золотое кольцо РФ"',
        address: '152025, г. Переславль-Залесский, проспект Мира, д. 177 ',
        urlName: 'golden-ring'
      },
      {
        code: 'Б П С',
        regNumber: '014889',
        govRegNumber: '18923678259543',
        name: 'Ivanoff РФ (АО)',
        address: '117420, г. Москва, ул. Пушкина, д. 15 ',
        urlName: 'ivanoff'
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
