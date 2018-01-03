<template>
  <Card :padding="0" dis-hover style="marginBottom:20px">
    <div slot='title'>{{replie.length}} 回复</div>
    <div v-for="(item,index) of replie" style="padding:10px;position:relative;">
      <div>
        <Avatar :src="item.author.avatar_url" shape="square" style="marginRight:6px;" icon='person'></Avatar>
        <span style="fontWeight:bold;">{{item.author.loginname}}</span>
        <span style="color:blue;marginLeft:5px;">{{index+1}}楼</span>
        <p style="color:#c1c1c1;cursor:default;" class="up" slot="extra"><Icon color="#c3c3c3" type="thumbsup" style="marginRight:5px;"></Icon>{{item.ups.length}}</p>
      </div>
        <div class="markdown-body" style="marginTop:5px;textIndent:16px;" v-html="item.content"></div>
    </div>
  </Card>
</template>
<script>
import {Row,Col,Card,Avatar,Tag,Icon} from 'iview'
export default {
  name:'TopicDetileReply',
  computed:{
    replie(){
      return  this.$store.state.topicDetileContent.topicInfo.replies
    }
  },
  components:{
    Row,Col,Card,Avatar,Tag,Icon
  }
}
</script>
<style>
  .up{
    position: absolute;
    right: 16px;
    top:16px;
  }
</style>


