<template>
  <div>
    <Head></Head>
    <Topics></Topics>
  </div>
</template>
<script>
import Head from '@/components/Header/Head.vue'
import Topics from '@/components/Topics/Topics.vue'
export default {
  name:'Home',
  components:{
    Head,
    Topics
  }
}
</script>


