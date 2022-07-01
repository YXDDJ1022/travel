import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'styles@/reset.css' // 重置样式表
import 'styles@/border.css' // 解决移动端1px问题
import './assets/iconfont/iconfont.css' // icon字体图标
import fastclick from 'fastclick' // 解决移动端click点击事件300ms延迟问题

fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
