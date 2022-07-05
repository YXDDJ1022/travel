import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles@/reset.css' // 重置样式表
import 'styles@/border.css' // 解决移动端1px问题
import './assets/iconfont/iconfont.css' // icon字体图标
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'spacingjs/dist/bundle'

Vue.use(swiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
