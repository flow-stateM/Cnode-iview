// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css'
import store from '@/store/vuex.store.js'
import {Message} from  'iview'

Vue.prototype.$Message = Message
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
})
