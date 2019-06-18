import Vue from 'vue'
// router, vuex, i18n
import router from './router'
import store from './store'
import i18n from './i18n'
// component
import App from './App.vue'
import './plugins/element.js'
import Components from './components'
// style
import './assets/css/main.scss'

Vue.config.productionTip = false

Vue.use(Components)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
