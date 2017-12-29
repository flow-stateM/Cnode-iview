import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    type:'all',
    topics:[],
    loading:false
  },
  mutations: {
    changeList(state,newlist){
      state.topics = newlist.data;
      state.loading = false;
      console.log(state.topics);
    }
  },
  actions:{
    gettopicslist({ commit,state },newlist){
      state.loading = true;
      axios.get('/api/v1/topics',{
        params:{
          tab:state.type
        }
      }).then((data)=>{
        commit('changeList',data.data);
      }).catch(()=>{

      })
    }
  }
})

export default store