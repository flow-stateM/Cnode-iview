<template>
    <div>
        <Head></Head>
        <Row type="flex"  justify="center" align='middle' style="marginTop:10px;height:600px;">
            <Col :xs="22" :sm="21" :md="20" :lg="18">
                <Card>
                    <p slot="title">发表新话题</p>
                    <div>选择板块：<Select v-model="model1" style="width:200px">
                        <Option v-for="item in type" :value="item" :key="item" :disabled="item === '测试'?false:true">{{ item }}</Option>
                    </Select></div>
                </Card>
            </Col>
        </Row> 
    </div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import {Row,Col,Select,Card,Option} from 'iview'

export default {
  name:'CreateTopic',
  data(){
      return {
        type:['精华','分享','问答','招聘','测试']
      }
  },
  beforeRouteEnter(to,from,next){
    next((vm)=>{
      if(!vm.$store.state.userLogin.isLogin){
        vm.$router.push('/login')
        vm.$Message.info('还未登陆，请先登陆！')
      }
    });
  },
  components:{
    Head,
    Row,
    Col,
    Select,
    Card,
    Option
    }
}
</script>
<style>

</style>


