import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/btn',
    name: 'btn',
    component: () => import(/* webpackChunkName: "btn" */ '../views/HomeView.vue')
  },
  {
    path: '/banks',
    name: 'banks',
    component: () => import(/* webpackChunkName: "btn" */ '../views/BanksView.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "btn" */ '../views/SearcherView.vue')
  },
  {
    path: '/mainsearch',
    name: 'mainSearch',
    component: () => import(/* webpackChunkName: "btn" */ '../views/MainSearcherView.vue')
  },
  {
    path: '/golden-ring',
    name: 'golden-ring',
    component: () => import(/* webpackChunkName: "golden-ring" */ '../views/GoldenRingBankPage/GoldenRingPage.vue')
  },
  {
    path: '/sper-page',
    name: 'sper-page',
    component: () => import(/* webpackChunkName: "SperPage" */ '../views/Sper/SperPage.vue')
  },
  {
    path: '/sper-calc',
    name: 'sper-calc',
    component: () => import(/* webpackChunkName: "SperCalc" */ '../views/Sper/SperCalc.vue')
  },
  {
    path: '/sper-contract',
    name: 'sper-contract',
    component: () => import(/* webpackChunkName: "SperContract" */ '../views/Sper/SperContract.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "ResultPage" */ '../views/Result/ResultPage.vue')
  },
  {
    path: '/license-info-search',
    name: 'license-info-search',
    component: () => import(/* webpackChunkName: "LicenseInfoSearchPage" */ '../views/LicenseInformationPage/LicenseSearchPage.vue')
  },
  {
    path: '/license-info',
    name: 'license-info',
    component: () => import(/* webpackChunkName: "LicenseInformationPage" */ '../views/LicenseInformationPage/LicenseCheckPage.vue')
  },
  {
    path: '/ivanoff',
    name: 'ivanoff',
    component: () => import(/* webpackChunkName: "ResultPage" */ '../views/IvanoffBankPage/IvanoffBankPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
