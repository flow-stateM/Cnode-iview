<template>
  <Col :xs="0" :sm="18" :md="18" :lg="19">
    <div style="position:absolute;width:100%;height:100%;backgroundColor:rgba(255,255,255,0.7);left:0;top:0;" v-if="isload"></div>
    <div  v-if="isload" class="loading"></div>
    <ul>
      <li v-for="item in topiclist" :key="item.id" class="topicsItem">
        <Avatar :src="item.author.avatar_url" @error='imgError' ></Avatar>
        <div style="paddingLeft:10px;height:50px;width:70%;display:inline-block;">
          <div class="topicTitle"><Tag :color="tagColor(item)" style="cursor:default;">{{tagType(item)}}</Tag><span class="titleName">{{item.title}}</span></div>
          <div class="topicAuthor">{{item.author.loginname}}发表于{{item.create_at.substr(0,10)}}</div>
        </div>
        <div style="width:6%;"></div>
        <div style="color:#c0c0c0"><span>回复:{{item.reply_count}}</span><span style="borderLeft:1px solid #c0c0c0;marginLeft:5px;paddingLeft:5px;">访问:{{item.visit_count}}</span></div>
      </li>
    </ul>
  </Col>

</template>

<script>
import {Row,Col,Avatar,Tag,Spin} from 'iview';

export default {
  name:'Topiclist',
  computed:{
    isload(){
      return this.$store.state.loading;
    },
    topiclist(){
      return this.$store.state.topics
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
    imgError(){
      return '../../static/favicon.ico' 
    }
  },
  components:{Row,Col,Avatar,Tag,Spin}
}
</script>

<style>
  .topicsItem{
    transition: 0.5s;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom:1px solid #f0f1f2;
  }
  .topicsItem:hover{
    box-shadow:0 0 7px 0 rgba(0,0,0,0.5);
    position: relative;
    z-index: 1;
  }
  .topicTitle{
    line-height:26px;
    font-size:15px;
    width: 100%;
    display: inline-block;
  }
  .titleName{
    max-width: 80%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: top;
  }
  .topicTitle:hover .titleName{
    text-decoration: underline;
    cursor: pointer;
  }
  .topicAuthor{
    line-height:24px;
    font-size:14px;
    color:#c1c1c1
  }
  .loading{
    position: absolute;
    left:50%;
    width: 100px;
    height: 100px;
    margin-left: -50px;
    /* background-color: rgba(45,140,240,1); */
    border-radius: 50%;
    z-index: 5;
    animation: ani-demo-spin 1s linear infinite;

  }
  .loading:after{
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    content:'';
    background-color: #08c0c2;
    transform:translateX(-50%) translateY(-50%);
    border-radius:50%;
  }
  @keyframes ani-demo-spin {
    from { transform:rotate(0)}
    50%  { transform:rotate(180deg)}
    to   {  transform:rotate(360deg)}
  }
</style>