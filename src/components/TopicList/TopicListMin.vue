<template>
  <Row>
    <Col :xs="24" :sm="0" :md="0" :lg="0">
    <Spin size="large" fix v-if="isload"></Spin>
      <ul>
        <li class="topicsItem">
          <Avatar src="../../../build/favicon.ico"  icon="person" ></Avatar>
          <div style="paddingLeft:10px;height:50px;width:70%;display:inline-block;">
            <div class="topicTitle"><Tag color="green" style="cursor:default;">置顶</Tag><span class="titleName">{{topics[0].title}}</span></div>
            <div class="topicAuthor">{{topics[0].author_name}}发表于</div>
          </div>
          <div style="width:6%;"></div>
          <div style="color:#c0c0c0"><span>回复:{{topics[0].replay_count}}</span><span style="borderLeft:1px solid #c0c0c0;marginLeft:5px;paddingLeft:5px;">访问:{{topics[0].visit_count}}</span></div>
        </li>
        <li class="topicsItem">
          <Avatar src="../../../build/favicon.ico"  icon="person" ></Avatar>
          <div style="paddingLeft:10px;height:50px;width:70%;display:inline-block;">
            <div class="topicTitle"><Tag color="green" style="cursor:default;">置顶</Tag><span class="titleName">{{topics[0].title}}</span></div>
            <div class="topicAuthor">{{topics[0].author_name}}发表于</div>
          </div>
          <div style="width:6%;"></div>
          <div style="color:#c0c0c0"><span>回复:{{topics[0].replay_count}}</span><span style="borderLeft:1px solid #c0c0c0;marginLeft:5px;paddingLeft:5px;">访问:{{topics[0].visit_count}}</span></div>
        </li>
        <li class="topicsItem">
          <Avatar src="../../../build/favicon.ico"  icon="person" ></Avatar>
          <div style="paddingLeft:10px;height:50px;width:70%;display:inline-block;">
            <div class="topicTitle"><Tag color="green" style="cursor:default;">置顶</Tag><span class="titleName">{{topics[0].title}}</span></div>
            <div class="topicAuthor">{{topics[0].author_name}}发表于</div>
          </div>
          <div style="width:6%;"></div>
          <div style="color:#c0c0c0"><span>回复:{{topics[0].replay_count}}</span><span style="borderLeft:1px solid #c0c0c0;marginLeft:5px;paddingLeft:5px;">访问:{{topics[0].visit_count}}</span></div>
        </li>
      </ul>
    </Col>
  </Row>
</template>

<script>
import {Row,Col,Avatar,Tag,Spin} from 'iview';

export default {
  name:'TopiclistMin',
  computed:{
    isload(){
      return this.$store.state.loading;
    }
  },
  data(){
    return {
      topics:[
        {
          id:1,
          title:"企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async你不懂你不懂你不懂",
          replay_count:60,
          visit_count:5230,
          author_name:'flow-state'
        },
        {
          id:2,
          title:"企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async",
          replay_count:60,
          visit_count:5230,
          author_name:'flow-state'
        },
        {
          id:3,
          title:"企业级 Node.js 框架 Egg 发布 2.0，性能提升 30%，拥抱 Async",
          replay_count:60,
          visit_count:5230,
          author_name:'flow-state'
        }
      ]
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

</style>