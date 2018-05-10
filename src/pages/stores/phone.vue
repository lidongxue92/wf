<template>
    <div class="logo">
    <!-- 顶部数据 -->
          <h5>请输入152****6789收到的手机验证码</h5>
          <div class="clearfix input">
            <input class="fl" placeholder="请输入手机验证码" />
            <span v-show="show" type="button" class="fr" v-on:click="getCode">获取验证码</span>
            <span v-show="!show" class="count fr">{{count}} s后重新获取</span>
          </div>
          <span v-on:click="newphone" class="button">下一步</span>
    </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
export default {
    name: 'category',
    data(){
      return {
       show: true,
       count: '',
       timer: null,
      }
     },
    created() {
        this.getCategory()
    },
    computed: {
        menuBanner() {
            return this.menu[this.currentIndex].img.url
        },
        categoryTitle() {
            return this.menu[this.currentIndex].name
        }
    },
    methods: {
        switchCategory(index, id) {
            this.currentIndex = index
            this.getProduct(id)
        },
        newphone() {
            this.$router.push({ path: '/page/newphone'})
        },
        getCode(){
         const TIME_COUNT = 60;
         if (!this.timer) {
           this.count = TIME_COUNT;
           this.show = false;
           this.timer = setInterval(() => {
           if (this.count > 0 && this.count <= TIME_COUNT) {
             this.count--;
            } else {
             this.show = true;
             clearInterval(this.timer);
             this.timer = null;
            }
           }, 1000)
          }
       }
    }
}
</script>

<style scoped lang="less">
/*顶部背景 样式*/
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.clearfix{
    zoom:1;
}
.fl{float: left;}
.fr{float: right;}
.logo{
  padding: 20px;h5{line-height: 30px;font-size: 1rem;font-weight: normal;}
  .input{
    margin-top:20px;
    .fl{width: 52%;background: #f7f7f7;line-height: 40px;border: 0;border-radius: 4px;padding-left: 4%;}
    .fr{display: inline-block;width: 35%;border: 1px solid #fd5536;border-radius: 4px;text-align: center;line-height: 40px;color: #fd5536;height: 38px;font-size: 0.8rem;background: #fff;}
    .count{display: inline-block;width: 35%;border: 1px solid #fd5536;border-radius: 4px;text-align: center;line-height: 40px;color: #fd5536;height: 38px;font-size: 0.8rem;background: #fff;}
  }
  .button{width: 100%;height: 40px;background: #fd5536;border-radius: 4px;color: #fff;display: inline-block;line-height: 40px;text-align: center;margin-top: 30px}
}
</style>
