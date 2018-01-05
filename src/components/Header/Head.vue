<template>
  <header style="position:relative;">
    <Row type="flex" justify="center" align='middle'  style="height:64px;boxShadow:0 4px 8px #f0f1f2">
      <Col style="height:100%;"  :xs="24" :sm="6" :md="6" :lg="5">
      <router-link style='color:inherit;' to='/'><h1>CNode</h1></router-link>
      </Col>
      <Col style="height:100%" :xs="0" :sm="18" :md="18" :lg="19">
        <div style="height:56px;borderLeft:1px solid rgb(233, 233, 233);float:left;marginTop:4px "></div>
        <Menu @on-select="menuTop" style="height:100%;float:left;" mode="horizontal" theme="light" >
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
        <ButtonGroup v-if="!userLogin.isLogin&&!isLoginPageFn" size="large">
          <Button @click='loginFn' type='primary'>登陆</Button>
          <Button>注册</Button>
        </ButtonGroup>
        <Dropdown  v-if="userLogin.isLogin" placement="bottom-start">
          <div style=''>
            <Avatar :src="userLogin.avatar_url" style="position:relative;top:-2px" icon="person" />
            <h3 class="userName">{{userLogin.loginName}}</h3>
          </div>
          <DropdownMenu style="textAlign:center;" slot="list">
            <span @click="createTopicFn"><DropdownItem>发布话题</DropdownItem></span>
            <DropdownItem>用户中心</DropdownItem>
            <span  @click="logoutFn"><DropdownItem>退出登陆</DropdownItem></span>
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
            <span @click="backToIndex"><DropdownItem>首页</DropdownItem></span>
            <DropdownItem>教程</DropdownItem>
            <DropdownItem>关于</DropdownItem>
            <span @click="loginFn"><DropdownItem v-if="!userLogin.isLogin&&!isLoginPageFn" >登陆</DropdownItem></span>
            <DropdownItem v-if="!userLogin.isLogin&&!isLoginPageFn" >注册</DropdownItem>
            <DropdownItem  v-if=" userLogin.isLogin"><Avatar :src="userLogin.avatar_url" style="position:relative;top:-1px;marginRight:3px;" icon="person" size="small"></Avatar>{{userLogin.loginName}}</DropdownItem>
            <span  v-if="userLogin.isLogin"  @click="createTopicFn"><DropdownItem v-if="userLogin.isLogin" >发布话题</DropdownItem></span>
            <DropdownItem v-if="userLogin.isLogin">用户中心</DropdownItem>
            <span  v-if="userLogin.isLogin"  @click="logoutFn"><DropdownItem>退出登陆</DropdownItem></span>
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
  },
  methods:{
    createTopicFn(){
      this.$router.push('/create')
    },
    backToIndex(){
      this.$router.push('/')
    },
    loginFn(){
      this.$router.push('/login')
    },
    menuTop(name){
      if(name == 1){
        this.$router.push('/')
      }
    },
    logoutFn(){
      this.$Message.info('成功退出登陆')
      this.$store.state.userLogin.isLogin=false;
      if(this.$router.currentRoute.path==='/create'){
        this.$router.push('/login')
      }
    }
  },
  computed:{
    isLoginPageFn(){
      if(this.$router.currentRoute.path==='/login'){
        return true
      }else{return false}
    },
    userLogin(){
      return this.$store.state.userLogin
    }
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
  a{
    color:inherit;
  }
  a:hover{
    color:inherit;
  }
</style>

