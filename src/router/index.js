import Vue from 'vue'
import Router from 'vue-router'
// import AppEmpty from '@/components/AppEmpty'
import Error from '@/views/Error'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  fallback: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})

export default router
