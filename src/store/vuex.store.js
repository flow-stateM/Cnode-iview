import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import topicDetile from '@/store/topicDetile.store.js'
import topicList from '@/store/topicList.store.js'

Vue.use(Vuex)


let store = new Vuex.Store({
  modules:{
    topicDetileContent: topicDetile,
    topicList:topicList
  }
})

export default store