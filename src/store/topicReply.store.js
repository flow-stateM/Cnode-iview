import axios from 'axios'

const topicReply = {
  actions:{
    postReply({state,commit},ReplyVal){
      // console.log(this.state.topicDetileContent.getId)
      axios.post(`/api/v1/topic/${this.state.topicDetileContent.getId}/replies`,{
        accesstoken:this.state.userLogin.accesstoken,
        content :ReplyVal
      }).then(()=>{
        this.dispatch('getTopicDetile')
      })
    }
  }
}
export default topicReply