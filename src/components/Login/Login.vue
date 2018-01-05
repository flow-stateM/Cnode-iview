<template>
<div v-if="!isLogin">
  <Head></Head>
  <Row type="flex"  justify="center" align='middle' style="marginTop:10px;height:600px;">
    <Col  :xs="22" :sm="21" :md="20" :lg="18">
      <Card style="paddingBottom:50px;textAlign:center">
        <p style="textAlign:center;fontSize:20px;" slot="title">登陆/注册</p>
        <p style="padding:15px;textAlign:center;">
          <Input size="large" style="width:75%;maxWidth:370px;" v-model="userNameVal" type="text" placeholder="请输入用户名"></Input>
        </p>
        <div style="padding:15px;textAlign:center;">
          <div style="display:inline-block;position:relative;width:75%;maxWidth:370px">
            <Input size="large" style="height:50px;" v-model="userAccesstokeVal" :type="!isEyeOpen?'text':'password'" placeholder="请输入accesstoken"></Input>
            <span class="passwordEye"  @click="isEyeOpenFn">
              <Icon  :size='25':type="isEyeOpen?'eye':'eye-disabled'"></Icon>
            </span>
          </div>
        </div>
        <Button @click="loginBtnFn" size="large" style="padding:5px 25px;" type="success">登陆</Button>
      </Card>
    </Col>
  </Row>
  <Footer></Footer>
</div>
</template>

<script>
import Head from '@/components/Header/Head.vue'
import Footer from '@/components/Footer/Footer.vue'
import {Row,Col,Input,Card,Icon,Button} from 'iview'


export default {
  name:'Login',
  data(){
    return {
      userNameVal:'',
      userAccesstokeVal:'',
      isEyeOpen:false,
      wait:null
    }
  },
  beforeRouteEnter(to,from,next){
    next((vm)=>{
      if(vm.$store.state.userLogin.isLogin){
        vm.$router.push('/')
        vm.$Message.info('已经登陆了，自动跳转')
      }
    });
  },
  components:{
    Head,
    Card,
    Input,
    Row,
    Col,
    Icon,
    Button,Footer
  },
  methods:{
    isEyeOpenFn(){
      this.isEyeOpen= !this.isEyeOpen
    },
    loginBtnFn(){
      if(this.userAccesstokeVal.trim()===''){
        return this.$Message.error('还没有填写哦！')
      }
      this.wait = this.$Message.loading({
                    content: '登录中...',
                    duration: 0
      });
      this.$store.dispatch('isAccesstokenTrue',this.userAccesstokeVal.trim())
    },
  },
  computed:{
    isLogin(){
      if(this.$store.state.userLogin.isLogin){
        // this.$router.push('/')
        this.$router.back()
        this.$Message.success('登陆成功！')
        this.wait();
      }
      return this.$store.state.userLogin.isLogin
    }
  }
}
</script>
<style>
  .passwordEye{
    position: absolute;
    right:10px;
    top:6px;
  }
</style>


