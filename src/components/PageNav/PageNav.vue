<template>
  <Row style="textAlign:center;padding:10px;">
    <Page :current='nowPage' @on-change="gettopicslist" :total="300" show-elevator></Page>
  </Row>
</template>
<script>
import {Page,Row} from 'iview'

function scrollIt(
 destination = 0,
 duration = 200,
 easing = "linear",
 callback
) {
 let easings = {
  easeInQuad(t) {
   return t * t;
  }
 };
 (function() {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
   window.requestAnimationFrame =
    window[vendors[x] + "RequestAnimationFrame"];
   window.cancelAnimationFrame =
    window[vendors[x] + "CancelAnimationFrame"] ||
    window[vendors[x] + "CancelRequestAnimationFrame"];
  }
 
  if (!window.requestAnimationFrame)
   window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() {
     callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
   };
 
  if (!window.cancelAnimationFrame)
   window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
   };
 })();
 
 function checkElement() {
  // chrome,safari及一些浏览器对于documentElemnt的计算标准化,reset的作用
  document.documentElement.scrollTop += 1;
  let elm =
   document.documentElement.scrollTop !== 0
    ? document.documentElement
    : document.body;
  document.documentElement.scrollTop -= 1;
  return elm;
 }
 
 let element = checkElement(); 
 let start = element.scrollTop; // 当前滚动距离
 let startTime = Date.now(); // 当前时间
 
 function scroll() { // 滚动的实现
  let now = Date.now();
  let time = Math.min(1, (now - startTime) / duration);
  let timeFunction = easings[easing](time);
  element.scrollTop = timeFunction * (destination - start) + start;
 
  if (element.scrollTop === destination) {
   callback; // 此次执行回调函数
   return;
  }
  window.requestAnimationFrame(scroll);
 }
 scroll();
}

export default {
  name:'PageNav',
  components:{
    Page,
    Row
  },
  computed:{
    nowPage(){
       return this.$store.state.topicList.page
       }
    },
  methods:{
    gettopicslist(page){
      // document.documentElement.scrollTop=0;
      scrollIt(0,400, 'easeInQuad');
      this.$store.state.topicList.page = page;
      this.$store.dispatch('gettopicslist')
    }
  }
}
</script>
<style>

</style>

