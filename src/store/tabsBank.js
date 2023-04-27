import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    tabs: [
      {
        img: 'img_theme',
        url: true,
        siteName: 'sait.ru',
        siteUrl: 'https://sait.ru',
        linkTitle: 'Сравнить все банки и счета',
        addInfo:
          'Расчет и сравнение вкладов.Калькуляторы вкладов.Выгодное оформление договора,рейтинги банков,отзывы клиентов.Выберите лучшие условия по онлайн вкладам...'
      },
      {
        img: 'img_theme',
        siteName: 'ringring.ru',
        siteUrl: 'https://ringring.ru',
        linkTitle: 'Сравнение вкладов в банке - Зол...',
        addInfo:
        'Открыть вклад под максимальный процент в Золотом Кольце.Процентная ставка...Банковские продукты и выгодные условия на официальном сайте Золотого кольца.'
      },
      {
        img: 'img_theme',
        siteName: 'tochnoneobman.kz',
        siteUrl: 'https://tochnoneobman.kz',
        linkTitle: 'Сформление микрозаймов в один клик',
        addInfo:
          'Деньги.Быстро.Легко.Микрозаймы до 50 тысяч рублей под залог автомобиля.Оформление без паспорта'
      },
      {
        img: 'img_theme',
        siteName: 'banki.com',
        siteUrl: 'https://banki.com',
        linkTitle: 'Как закатывать банки на зиму?Ответ эксперта',
        addInfo:
        'Зная как правильно закатывать банки с соленьями,вы значительно упростите себе жизнь!Интервью с ведущими специалистами по консервации...'
      },
      {
        img: 'img_theme',
        siteName: 'openmoney.com',
        siteUrl: 'https://openmoney.com',
        linkTitle: 'Открыть счет-очень легко! Простые способы',
        addInfo: ''
      }
    ]
  },
  getters: {
    getTabs: (state) => state.tabs
  },
  mutations: {},
  actions: {}
}
