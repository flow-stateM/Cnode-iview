import axios from 'axios'

const createTopic = {
  state:{
    createdId:''
  },
  mutations:{
    changeCreatedId(state,newID){
      // console.log()
      state.createdId = newID
    },
    createdError(state,error){
      this._vm.$Message.error(`${error.data.error_msg}`)
    }
  },
  actions:{
    commitNewTopic({commit,state},newTopic){
      axios.post('/api/v1/topics',{
        accesstoken:this.state.userLogin.accesstoken,
        title:newTopic.title,
        content:newTopic.content,
        tab:newTopic.nowType
      }).then((data)=>{
        commit('changeCreatedId',data.data.topic_id)
      }).catch((error)=>{
        commit('createdError',error.response)
      })
    }
  }
}

export default createTopic