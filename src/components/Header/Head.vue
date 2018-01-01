<template>
  <header style="position:relative;">
    <Row type="flex" justify="center" align='middle'  style="height:64px;boxShadow:0 4px 8px #f0f1f2">
      <Col style="height:100%;"  :xs="24" :sm="6" :md="6" :lg="5">
      <h1>CNode</h1>
      </Col>
      <Col style="height:100%" :xs="0" :sm="18" :md="18" :lg="19">
        <div style="height:56px;borderLeft:1px solid rgb(233, 233, 233);float:left;marginTop:4px "></div>
        <Menu active-name="1" style="height:100%;float:left;" mode="horizontal" theme="light" >
          <MenuItem  name="1">
          <Icon style="position:relative;top:3px;" size=24 type="ios-home"></Icon></span>
              主页
          </MenuItem>
          <MenuItem name="2">
              <Icon style="position:relative;top:3px;" size=24 type="ios-book-outline"></Icon>
              教程
          </MenuItem>
          <MenuItem name="3">
              <Icon style="position:relative;top:3px;" size=24 type="ios-at"></Icon>
              关于
          </MenuItem>
      </Menu>
      <div style="float:right;height:100%;display:flex;alignItems:center;marginRight:25px;">
        <!-- <ButtonGroup size="large">
          <Button type='primary'>登陆</Button>
          <Button>注册</Button>
        </ButtonGroup> -->
        <Dropdown placement="bottom-start">
          <div style=''>
            <Avatar style="position:relative;top:-2px" icon="person" />
            <h3 class="userName">flow-state</h3>
          </div>
          <DropdownMenu style="textAlign:center;" slot="list">
            <DropdownItem>发布话题</DropdownItem>
            <DropdownItem>用户中心</DropdownItem>
            <DropdownItem>退出登陆</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      </Col>
    </Row>
    <Row style="position:absolute;right:30px;top:16px;zIndex:991;">
      <Col   :xs="24" :sm="0" :md="0" :lg="0">
        <Dropdown placement="bottom-end">
          <Icon type="navicon-round" size=30></Icon>
          <DropdownMenu style="textAlign:center;" slot="list">
            <DropdownItem>首页</DropdownItem>
            <DropdownItem>教程</DropdownItem>
            <DropdownItem>关于</DropdownItem>
            <DropdownItem><Avatar style="position:relative;top:-1px;marginRight:3px;" icon="person" size="small"></Avatar>flow-state</DropdownItem>
            <DropdownItem>发布话题</DropdownItem>
            <DropdownItem>用户中心</DropdownItem>
            <DropdownItem>退出登陆</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  </header>
  
</template>

<script>
import {Button,Row,Col,Menu,MenuItem,Submenu,MenuGroup,Icon,Avatar,Dropdown,DropdownMenu,DropdownItem,ButtonGroup,Tag} from 'iview';

export default {
  name:'Head',
  components:{
    Button,
    Row,
    Col,Menu,MenuItem,Submenu,MenuGroup,Icon,Avatar,Dropdown,DropdownMenu,DropdownItem,ButtonGroup,Tag
  }
}
</script>

<style>
  h1{
    margin: 0;
    cursor: pointer;
    height: 100%;
    line-height: 64px;
    text-align: center;
  }
  .userName{
    margin:0 5px;
    cursor: default;
    display: inline-block;
  }
</style>

