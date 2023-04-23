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
    path: '/golden-ring',
    name: 'golden-ring',
    component: () => import(/* webpackChunkName: "golden-ring" */ '../views/GoldenRingBankPage/GoldenRingPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
