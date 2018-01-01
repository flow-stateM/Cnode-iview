<template>
<div>
  <Row style="marginTop:10px" type="flex" justify="start" align='top'>
    <NavList></NavList>
    <NavListMin></NavListMin>
    <TopicList></TopicList>
  </Row>
  <TopicListMin></TopicListMin>
</div>
</template>

<script>
import NavList from '@/components/NavList/NavList.vue'
import NavListMin from '@/components/NavList/NavListMin.vue'
import TopicList from '@/components/TopicList/TopicList.vue'
import TopicListMin from '@/components/TopicList/TopicListMin.vue'
import {Row} from 'iview';

export default {
  name:'Topics',
  components:{
    NavList,
    TopicList,
    Row,
    TopicListMin,
    NavListMin
  }
}
</script>


