import axios from 'axios'

const userLogin = {
  state:{
    isLogin:true,
    accesstoken:'1c961036-5a12-4491-b5c9-c264685a0158',
    userName:'flow-state',
    avatar_url:''
  },
  mutations:{
    logOut(state){
      state.isLogin=false
      state.accesstoken=''
    }
  },
  actions:{
    isAccesstokenTrue({state,commit}){
      console.log(1)
    }
  }
}

export default userLogin