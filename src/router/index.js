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
    path: '/golden-ring',
    name: 'golden-ring',
    component: () => import(/* webpackChunkName: "golden-ring" */ '@/views/GoldenRingBankPages/GoldenRingPage.vue')
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
  },
  {
    path: '/ivanoff-info',
    name: 'ivanoff-info',
    component: () => import(/* webpackChunkName: "ResultPage" */ '../views/IvanoffBankPage/InformationPage.vue')
  },
  {
    path: '/ivanoff-contract',
    name: 'ivanoff-contract',
    component: () => import(/* webpackChunkName: "ResultPage" */ '../views/IvanoffBankPage/IvanoffBankContractPage.vue')
  },
  {
    path: '/golden-ring-deposit',
    name: 'golden-ring-deposit',
    component: () => import(/* webpackChunkName: "GoldenRingDeposit" */ '../views/GoldenRingBankPages/GoldenRingDepositPage.vue')
  },
  {
    path: '/golden-ring-contract',
    name: 'golden-ring-contract',
    component: () => import(/* webpackChunkName: "GoldenRingDeposit" */ '../views/GoldenRingBankPages/GoldenRingContract.vue')
  },
  {
    path: '/calculation-ivanoff',
    name: 'calculation-page-temp',
    component: () => import(/* webpackChunkName: "GoldenRingDeposit" */ '../views/IvanoffBankPage/CalculationPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
