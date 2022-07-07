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
  },
  {
    path: '/detail/:id',
    component: () => import('../views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
