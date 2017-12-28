<template>
    <Col :xs="24" :sm="0" :md="0" :lg="0">
      <Menu style="display:flex;justifyContent:space-between;" mode='horizontal' active-name="1">
        <MenuItem name='1'>全部
        </MenuItem>
        <MenuItem name='2'>精华
        </MenuItem>
        <MenuItem name='3'>分享
        </MenuItem>
        <MenuItem name='4'>问答
        </MenuItem>
        <MenuItem name='5'>招聘
        </MenuItem>
        <MenuItem name='6'>测试
        </MenuItem>
      </Menu>
    </Col>
  
</template>

<script>
import {Col,Menu,MenuItem} from 'iview';

export default {
  name:'NavList',
  components:{Col,Menu,MenuItem}
}
</script>

<style>

</style>
