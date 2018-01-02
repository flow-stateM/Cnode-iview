import axios from 'axios'

const topicList = {
  state: {
    type:'all',
    topics:[],
    page:1,
    loading:false
  },
  mutations: {
    changeList(state,newlist){
      state.topics = newlist.data;
      state.loading = false;
    }
  },
  actions:{
    gettopicslist({ commit,state }){
      state.loading = true;
      axios.get('/api/v1/topics',{
        params:{
          tab:state.type,
          page:state.page
        }
      }).then((data)=>{
        commit('changeList',data.data);
      }).catch(()=>{

      })
    }
  }
}
export default topicList