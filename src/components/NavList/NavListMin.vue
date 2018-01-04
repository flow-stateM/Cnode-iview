<template>
    <Col :xs="24" :sm="0" :md="0" :lg="0">
      <Menu @on-select="gettopicslist" style="display:flex;justifyContent:space-between;" mode='horizontal' :active-name="getType">
        <MenuItem name='all'>全部
        </MenuItem>
        <MenuItem name='good'>精华
        </MenuItem>
        <MenuItem name='share'>分享
        </MenuItem>
        <MenuItem name='ask'>问答
        </MenuItem>
        <MenuItem name='job'>招聘
        </MenuItem>
        <MenuItem name='dev'>测试
        </MenuItem>
      </Menu>
    </Col>
  
</template>

<script>
import {Col,Menu,MenuItem} from 'iview';

export default {
  name:'NavList',
  components:{Col,Menu,MenuItem},
  created(){
    this.$store.dispatch('gettopicslist')
  },
  methods:{
    gettopicslist(name){
      this.$store.state.topicList.type = name;
      this.$store.state.topicList.page = 1;
      this.$store.dispatch('gettopicslist')
    }
  },
  computed:{
    getType(){
      return this.$store.state.topicList.type
    }
  }
}
</script>

<style>

</style>
