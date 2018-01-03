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
    },
    userInfo:{
      loginname:'',
      avatar_url:'',
      githubUsername:'',
      create_at:'',
      score:'',
      recent_topics:[],
      recent_replies:[]
    }
  },
  mutations:{
    changeUserInfo(state,userInfo){
      state.userInfo={...userInfo.data}
      console.log(state.userInfo)
    },
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
      state.userInfo={
        loginname:'',
        avatar_url:'',
        githubUsername:'',
        create_at:'',
        score:'',
        recent_topics:{},
        recent_replies:{}
      }
    }
  },
  actions:{
    getUserInfo({commit,state},userName){
      axios.get(`/api/v1/user/${userName}`).then((data)=>{
        commit('changeUserInfo',data.data)
      })
    },
    getTopicDetile({dispatch,commit,state}){
      commit('reInit')
      state.loading = true,
      axios.get(`/api/v1/topic/${state.getId}`,
      ).then((data)=>{
        state.loading=false;
        commit('changeTopicDetile',data.data);
        dispatch('getUserInfo',data.data.data.author.loginname)
      }).catch(()=>{
        state.loading=false;
      })
    }
  }

}
export default topicDetile