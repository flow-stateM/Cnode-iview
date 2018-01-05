<template>
  <div>
    <Head></Head>
    <Row  type="flex"  justify="center" align='top' style="marginTop:10px;">
      <Col  :xs="22" :sm="21" :md="20" :lg="18">
        <Card style="marginBottom:20px;">
          <p slot="title">关于</p>
          <h2 style="marginBottom:10px;">首先感谢CNode论坛，iView，Vue，Vue-Cli，Vue-Router，Vuex</h2>
          <h3 style="marginBottom:10px;">项目描述</h3>
          <p style="marginBottom:10px;">本项目是基于CNode论坛开放API作为数据源，iView框架做为UI的vue单页响应式应用，实现了常用功能，包括主题列表，主题详情，主题回复，进行评论，作者近期信息，通过Accesstoken验证并在本地进行假登陆，发表主题等，由于接口未提供注册功能，故只能通过accesstoken登陆，用户名是没有用的，可以不填写，没有accesstoken请自行前往Cnode注册。<a style="color:blue" target="_blank"href="https://cnodejs.org">https://cnodejs.org</a></p>
          <h3 style="marginBottom:10px;">技术栈</h3>
          <p style="marginBottom:10px;">Vue、Vue-Router、Vuex、Es6、Ajax(Axios)、github-markdown-css、iView、Html、Css3</p>
          <h3 style="marginBottom:10px;">实现功能</h3>
            <h4 style="marginBottom:10px;">登陆状态检测</h4>
            <p style="marginBottom:10px;">利用vue-router导航守卫，在未登录的状态下只能进行列表与主题详情的查看，无法进行评论或发布主题</p>
            <h4 style="marginBottom:10px;">加载动画</h4>
            <p style="marginBottom:10px;">在进行获取数据的时候有加载动画或者顶部提示框，方便用户了解目前的状态</p>
            <h4 style="marginBottom:10px;">文章获取</h4>
            <p style="marginBottom:10px;">设置跨域后，通过axios提交ajax的get请求，获取文章列表或者详情并循环进行渲染
            </p>
            <h4 style="marginBottom:10px;">表单验证</h4>
            <p style="marginBottom:10px;">利用accesstoken登陆时，进行异步验证，成功与否会进行提示，在发表主题时会根据所选分类，填写的标题，填写的内容进行验证是否合法，合法便提交，不合法进行提示
            </p>
            <h4 style="marginBottom:10px;">评论、发表主题</h4>
            <p style="marginBottom:10px;">利用axios进行ajax的post请求提交评论或新的主题，并提示操作是否成功。
            </p>
            <h4 style="marginBottom:10px;">细节</h4>
            <p style="marginBottom:10px;">
              1.页面超过一页长度时右下角出现返回顶部按钮，进行滚动动画式返回
            </p>
            <p style="marginBottom:10px;">
              2.在用户从某个页面进入登录页进行登录操作后不是返回首页，而是返回上一个页面，方便用户继续进行阅读或评论
            </p>
            <p style="marginBottom:10px;">
              3.在用户进行登录成功、登陆失败、发表回复、发表主题、登录状态下进入登录页面，未登录状态下进入发表主题页面时会有提示或帮助用户自动进行跳转
            </p>
            <p style="marginBottom:10px;">
              4.PC端响应式页面，并解决了所用到的iView不同组件兼容问题
            </p>
            <p style="marginBottom:10px;">
              5.在获取文章详情页面的作者其他话题时过滤掉了当前所显示的话题，避免重复
            </p>
            <p style="marginBottom:10px;">
              6.显示文章详情时利用git-markdown-css解析markdown，自动赋予各标签样式
            </p>
            <p style="marginBottom:10px;">
              7.切换文章列表页码或者类型、文章详情页之间跳转时自动返回顶部，方便阅览，切换分类时还会自动返回第一页
            </p>
          <h3 style="marginBottom:10px;">遇到的问题</h3>
            <p style="marginBottom:10px;">
              1.iview下拉菜单(downlist)层级比menu低，导致用户头像部分的下拉菜单被导航栏与文章列表挡住
            </p>
            <p style="marginBottom:10px;">
              2.iview 头像组件(avatar)自带绝对定位，不会被加载动画的遮罩层挡住</p>
            <p style="marginBottom:10px;">
              3.返回顶部动画实现</p>
            <p style="marginBottom:10px;">
              4.用户最近话题需要进行过滤</p>
          <h3 style="marginBottom:10px;">问题解决</h3>
            <p style="marginBottom:10px;">
              1.设置zindex层级
            </p>
            <p style="marginBottom:10px;">
              2.设置position:static取消默认定位属性</p>
            <p style="marginBottom:10px;">
              3.利用jquery源码在不点击backtop组件(返回顶部组件)的情况下实现动画式返回(出现在切换页码的时候)</p>
            <h2 style="marginBottom:10px;">感谢您的认真阅读！不足之处欢迎指正！</h2>
            <h3 style="marginBottom:10px;">作者：毛世玉(flow-state)</h3>
            <h3 style="marginBottom:10px;">邮箱：maoshiyude@126.com</h3>
            <h3 style="marginBottom:10px;">电话：13701152469</h3>
            <h3 style="marginBottom:10px;">项目github地址：<a style="color:blue"  target="_blank" href="https://github.com/flow-stateM/Cnode-iview/tree/dev1227">https://github.com/flow-stateM/Cnode-iview/tree/dev1227</a></h3>
        </Card>
      </Col>
    </Row>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import Footer from '@/components/Footer/Footer.vue'
import BackToTop from '@/components/BackToTop/BackToTop.vue'
import {Row,Col,Card} from 'iview'

export default {
  name:'About',
  components:{
    Head,
    Row,
    Col,
    Card,
    Footer,
    BackToTop
  }
}
</script>
<style>

</style>


