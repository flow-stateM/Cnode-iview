<template>
  <Row style="marginTop:10px;minHeight:500px;" type='flex' justify="center">
    <Col style="maxWidth:1150px;marginRight:15px;" :xs="22" :sm="15" :md="15" :lg="15" >
    <div style="minHeight:300px;position:absolute;width:100%;height:100%;backgroundColor:rgba(255,255,255,0.7);left:0;top:0;" v-if="isload"></div>
    <div v-if="isload" class="loading"></div>
    <Card :padding="0" dis-hover style="marginBottom:20px">
      <div style="padding:10px;borderBottom:1px solid #c5c5c5">
        <div style="fontSize:20px;fontWeight:bold;marginBottom:5px;"><Tag :color="tagColor(topicContent)" style="cursor:default;">{{tagType(topicContent)}}</Tag>{{topicContent.title}}</div>
        <div style="color:#c1c1c1">
          <span class="dotTag" style="">发布于 {{topicContent.create_at.substr(0,10)}}</span>
          <span class="dotTag" style="display:inline-block;height:20px;lineHeight:20px;">作者 {{topicContent.author.loginname}}</span>
          <span class="dotTag" style="display:inline-block;height:20px;lineHeight:20px;">浏览 {{topicContent.visit_count}}次</span>
        </div>
      </div>
      <div class='markdown-body' v-html="content"></div>
    </Card>
    <TopicDetileReply></TopicDetileReply>
    <UserReply></UserReply>
    </Col>
    <Col style="maxWidth:400px;" :xs="0" :sm="6" :md="6" :lg="6">
      <Card style="marginBottom:20px">
        <p slot="title">作者信息</p>
        <div>
          <Avatar :src='topicContent.author.avatar_url' shape="square" size="large" icon="person"></Avatar>
          <span>{{topicContent.author.loginname}}</span>
        </div>
        <p style="padding:5px;">积分{{userInfo.score}}</p>
        <p style="fontStyle:italic">这家伙很懒，什么都没有留下</p>
      </Card>
      <Card>
        <p slot="title">作者其他话题</p>
        <p v-for="item in recent_topics" style="color:#c6c6c6;padding:5px;overflow:hidden;textOverflow:ellipsis;whiteSpace: nowrap;"><router-link :to="`/topic/${item.id}`">{{item.title}}</router-link></p>
        <p v-if="!recent_topics.length">此用户没有其他任何话题哦！</p> 
      </Card>
    </Col>
  </Row>
</template>
<script>
import {Row,Col,Card,Avatar,Tag} from 'iview'
import TopicDetileReply from '@/components/TopicDetile/TopicDetileReply.vue'
import UserReply from "@/components/TopicDetile/UserReply.vue"
import 'github-markdown-css'

export default {
  name:'TopicDetileContent',
  computed:{
    recent_topics(){
      if(this.$store.state.topicDetileContent.userInfo.recent_topics.length){
        return this.$store.state.topicDetileContent.userInfo.recent_topics.filter((item,index)=>{return item.id!==this.$store.state.topicDetileContent.topicInfo.id}).slice(0,5)
        }else {
          return '';
        }
    },
    userInfo(){
      return this.$store.state.topicDetileContent.userInfo
    },
    topicContent(){
      return this.$store.state.topicDetileContent.topicInfo
    },
    isload(){
      return this.$store.state.topicDetileContent.loading
    },
    content(){
      return this.$store.state.topicDetileContent.topicInfo.content
    }
  },  
  methods:{
    tagColor(item){
      return item.top?'green':'blue'
    },
    tagType(item){
      if(item.top){
        return '置顶'
      }
      if(item.good){
        return '精华'
      }
      if(item.tab==='ask'){
        return '问答'
      }
      if(item.tab==='job'){
        return '招聘'
      }
      return '分享'
    },
  },
  created(){
    this.$store.state.topicDetileContent.getId = this.$router.currentRoute.params.id
    this.$store.dispatch('getTopicDetile')
  },
  components:{
    Row,Col,Card,Avatar,Tag,TopicDetileReply,UserReply
  }
}
</script>
<style>
 .markdown-body{
   padding:16px;
 }
 .dotTag{
   display:inline-block;
   height:20px;
   line-height:20px;
   margin-right: 5px;
 }
 .dotTag:before{
   content:'';
   display: inline-block;
   vertical-align: middle;
   position: relative;
   top: -1px;
   margin-right: 2px;
   height: 5px;
   width: 5px;
   background-color: #c0c0c0;
   border-radius: 50%
 }
 a{
   color:inherit;
 }
</style>


