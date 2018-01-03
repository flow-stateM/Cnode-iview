<template>
  <div>
    <Head></Head>
    <Topics></Topics>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import Topics from '@/components/Topics/Topics.vue'
import Footer from '@/components/Footer/Footer.vue'
import BackToTop from '@/components/BackToTop/BackToTop.vue'
export default {
  name:'Home',
  components:{
    Head,
    Topics,
    Footer,
    BackToTop
  }
}
</script>


