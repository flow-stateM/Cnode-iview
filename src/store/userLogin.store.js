import axios from 'axios'

const userLogin = {
  state:{
    isLogin:false,
    accesstoken:'1c961036-5a12-4491-b5c9-c264685a0158',
    loginName:'',
    avatar_url:'',
    id:''
  },
  mutations:{
    logOut(state){
      state.isLogin=false
      state.loginName=""
      state.avatar_url=""
      state.id='',
      success=false
    },
    errorToken(){
      this._vm.$Message.error('accesstoken错误，请查验后再试试吧！')
    },
    successToken(state,data){
      state.isLogin=true
      state.id = data.id
      state.loginName = data.loginname
      state.avatar_url =data.avatar_url
      state.accesstoken=data.newToken
    }
  },
  actions:{
    isAccesstokenTrue({state,commit},newToken){
      axios.post('/api/v1/accesstoken',{
        accesstoken:newToken
      }).then((data)=>{
        commit('successToken',{...data.data,newToken})
      }).catch((code)=>{
        commit('errorToken')
      })
    }
  }
}

export default userLogin