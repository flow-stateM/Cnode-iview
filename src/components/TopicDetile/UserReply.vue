<template>
  <Card :padding="0" dis-hover style="marginBottom:20px">
    <p slot="title">添加回复</p>
    <Input style="border:none" v-model="value" type="textarea" :rows="4" :placeholder="isLogin?'写点东西吧！':'请先登录后再回复！'" :disabled="!isLogin" :autosize="{minRows: 6,maxRows: 15}"></Input>
    <p style="textAlign:right;"><Button @click="replypost" :disabled="!isLogin"  style="margin:10px;" type="primary">回复</Button></p>
  </Card>
</template>
<script>
import {Card,Row,Col,Input,Button} from 'iview'
export default {
  name:'UserReply',
  components:{
    Card,
    Row,
    Col,
    Input,
    Button
  },
  data(){
    return {
      value:'',
    }
  },
  computed:{
    isLogin(){
      return this.$store.state.userLogin.isLogin
    }
  },
  methods:{
    replypost(){
      this.$store.dispatch('postReply',this.value).then(()=>{this.value=''})
    }
  }
}
</script>
<style>

</style>


