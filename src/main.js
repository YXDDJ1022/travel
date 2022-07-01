import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastclick from 'fastclick'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
