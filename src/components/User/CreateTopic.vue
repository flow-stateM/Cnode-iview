<template>
    <div>
        <Head></Head>
        <Row type="flex"  justify="center" align='top' style="marginTop:10px;height:600px;">
            <Col :xs="22" :sm="21" :md="20" :lg="18">
                <Card>
                    <p slot="title">发表新话题</p>
                    <div>选择板块：<Select v-model="newTopic.nowType" style="width:200px">
                        <Option v-for="(val,key) in type" :value="key" :key="key" :disabled="key === 'dev'?false:true">{{ val }}</Option>
                    </Select></div>
                    <div style="marginTop:10px">
                      <Input v-model="newTopic.title" placeholder="标题字数十个字以上" style="width: 80%"></Input>
                    </div>
                    <div style="marginTop:10px;">
                      <Input type="textarea" :autosize="{minRows:6}" placeholder="写点东西吧！" v-model="newTopic.content"></Input>
                    </div>
                    <div style="marginTop:10px;textAlign:right;"><Button @click="commit" type="primary" size="large">提交</Button></div>
                </Card>
            </Col>
        </Row> 
    </div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import {Row,Col,Select,Card,Option,Input,Button} from 'iview'

export default {
  name:'CreateTopic',
  data(){
      return {
        type:{good:'精华',share:'分享',ask:'问答',job:'招聘',dev:'测试'},
        newTopic:{nowType:'',title:'',content:''}
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
    Option,
    Input,
    Button
  },
  methods:{
    commit(){
      if(this.newTopic.nowType!=="dev"){
        return this.$Message.error({content:'请选择测试板块(由于目前官方只支持测试版块发布测试内容，否则被封号一周)',
          duration: 4
        })
      }
      if(this.newTopic.title.trim().length<10){
        return this.$Message.error({
          content:'请填写大于十个字的标题',
          duration: 3,
          })
      }
      if(!this.newTopic.content.trim().length){
        return this.$Message.error({
          content:'内容不能为空',
          duration: 3,
          })
      }
      this.$store.dispatch('commitNewTopic',this.newTopic)
    }
  },
  computed:{
    changecreated(){
      return this.$store.state.createTopic.createdId
    }
  },
  watch:{
    changecreated(val){
      this.$router.push(`/topic/${val}`)
    }
  }
}
</script>
<style>

</style>


