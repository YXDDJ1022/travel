import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles@/reset.css' // 重置样式表
import 'styles@/border.css' // 解决移动端1px问题
import './assets/iconfont/iconfont.css' // icon字体图标
import fastclick from 'fastclick' // 解决移动端click点击事件300ms延迟问题
import swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'spacingjs/dist/bundle'

fastclick.attach(document.body)
Vue.use(swiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
