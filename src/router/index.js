import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import TopicDetile from '@/components/TopicDetile/TopicDetile.vue'
import Login from '@/components/Login/Login.vue'
import CreateTopic from '@/components/User/CreateTopic.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path:'/create',
      name:'create',
      component:CreateTopic
    }
  ]
})
