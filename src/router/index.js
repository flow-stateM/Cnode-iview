import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import TopicDetile from '@/components/TopicDetile/TopicDetile.vue'

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
      name: 'index',
      component:Home
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component:TopicDetile
    }
  ]
})
