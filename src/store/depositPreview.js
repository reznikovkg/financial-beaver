import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    deposits: [
      {
        bankIcon: 'bankIcons/Ivanoff.png',
        depositName: 'Копилка +',
        bankName: 'Ivanoff',
        licenseNumber: '014889',
        rating: 5.0,
        rate: 7,
        period: 'от 90 дней',
        sum: 'от 100 000',
        isButtonDisabled: false,
        url: 'ivanoff'
      },
      {
        bankIcon: 'bankIcons/UBRIR.png',
        depositName: 'Хит сезона',
        bankName: 'УБРиР',
        licenseNumber: '743202',
        rating: 4.5,
        rate: 8.25,
        period: '390 дней',
        sum: 'от 100 000',
        isButtonDisabled: true,
        url: ''
      },
      {
        bankIcon: 'bankIcons/Sper.png',
        depositName: 'Легкий',
        bankName: 'Спёрбанк',
        licenseNumber: '139428',
        rating: 2.2,
        rate: 40,
        period: 'от 90 дней',
        sum: 'от 30 000',
        isButtonDisabled: false,
        url: 'sper-page'
      },
      {
        bankIcon: 'bankIcons/Vigoda.png',
        depositName: 'Выгода',
        bankName: 'Золотое кольцо',
        licenseNumber: '923045',
        rating: 3.9,
        rate: 20,
        period: 'от 90 дней',
        sum: 'от 50 000',
        isButtonDisabled: false,
        url: 'golden-ring'
      },
      {
        bankIcon: 'bankIcons/Gazprombank.png',
        depositName: 'Управляй процентом',
        bankName: 'Газпромбанк',
        licenseNumber: '354345',
        rating: 4.3,
        rate: 10,
        period: 'от 1 дня',
        sum: '1 - 1 500 000',
        isButtonDisabled: true,
        url: ''
      }
    ]
  },
  getters: {
    getDeposits: (state) => state.deposits
  }
}
