import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/city',
    component: () => import('../views/city/City.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
