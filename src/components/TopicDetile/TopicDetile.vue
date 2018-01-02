<template>
<div>
  <Head></Head>
  <TopicDetileContent></TopicDetileContent>
  <Footer></Footer>
  <BackToTop></BackToTop>
</div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import TopicDetileContent from '@/components/TopicDetile/TopicDetileContent.vue'
import Footer from '@/components/Footer/Footer.vue'
import BackToTop from '@/components/BackToTop/BackToTop.vue'
export default {
  name:'TopicDetile',
  components:{
    Head,
    TopicDetileContent,
    Footer,
    BackToTop
  }
}
</script>

