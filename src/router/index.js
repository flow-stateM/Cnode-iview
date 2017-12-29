import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Home',
      component:Home
    }
  ]
})
