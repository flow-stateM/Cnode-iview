<template>
  <footer style="backgroundColor: #000;padding:30px;">
    <Row type="flex" justify="center" align="middle">
      <Col style="fontSize:16px;textAlign:center;padding:10px;" span ='24'>
        <span style="marginRight:15px;">Power by:Vue2 iView vue-cli Vue-router Vuex</span><span>Producer:flow-state</span>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col style="textAlign:center;" span ='24'>
        <span style="fontSize:14px;">Contact:13701152469</span>
      </Col>
    </Row>
  </footer>
</template>

<script>
import {Row,Col} from 'iview'
export default {
  name:'Footer',
  components:{
    Row,Col
  }
}
</script>
<style>

</style>

