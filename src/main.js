import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import AppCars from './pages/AppCars.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/cars' },
  { path: '/cars', component: AppCars, name: 'cars' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
