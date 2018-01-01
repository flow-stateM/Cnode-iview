<template>
    <Col :xs="0" :sm="6" :md="6" :lg="5">
      <Menu @on-select="gettopicslist" style="width:100%;textAlign:center" mode="vertical" active-name="all">
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
    this.$store.dispatch('gettopicslist');
  },
  methods:{
    gettopicslist(name){
      this.$store.state.type = name;
      this.$store.dispatch('gettopicslist')
    }
  }
}
</script>

<style>
</style>


