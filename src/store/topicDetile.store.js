import axios from 'axios'

const topicDetile = {
  state:{
    getId:'',
    loading:false,
    topicInfo:{
      author: {},
      author_id: '',
      content: '',
      create_at: '',
      good: false,
      replies: [],
      id: '',
      is_collect: false,
      last_reply_at: '',
      tab: '',
      title: '',
      top: false,
      visit_count: ''
    }
  },
  mutations:{
    changeTopicDetile(state,topicdetiles){
      state.topicInfo = {...topicdetiles.data}
      console.log(state)
    },
    reInit(state){
      state.topicInfo={    
        author: {},
        author_id: '',
        content: '',
        create_at: '',
        good: false,
        replies: [],
        id: '',
        is_collect: false,
        last_reply_at: '',
        tab: '',
        title: '',
        top: false,
        visit_count: ''
      }
    }
  },
  actions:{
    getTopicDetile({commit,state}){
      commit('reInit')
      state.loading = true,
      axios.get(`/api/v1/topic/${state.getId}`,
      ).then((data)=>{
        state.loading=false;
        commit('changeTopicDetile',data.data);
      }).catch(()=>{

      })
    }
  }

}
export default topicDetile