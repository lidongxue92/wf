<template>
  <div class="hello">
    <div class="judgement-div">
        <img src="../assets/img/logo-icon.png" class="img2">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  created () {
    /*阻止非微信浏览器打开*/
    let useragent = navigator.userAgent;
    if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
      // 这里警告框会阻塞当前页面继续加载
      alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
      // 以下代码是用javascript强行关闭当前页面
      var opened = window.open('about:blank', '_self');
      opened.opener = null;
      opened.close();
    }
  }
}
</script>

<style scoped>
  .judgement-div {
    /* display: block; */
    /* height:125px; */
    width:125px;
    padding-top: 40%;
    margin: 0px auto;
  }
  .img2{
    width:100%;
  }
</style>
