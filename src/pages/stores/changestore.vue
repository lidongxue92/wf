<template>
    <div class="logo">
    <!-- 顶部数据 -->
          <h5>更换新店长</h5>
          <input class="input" placeholder="请输入店长姓名" />
          <input class="input" placeholder="请输入店长手机号" />
          <span class="button">保存</span>
    </div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
export default {
    name: 'category',
    data(){
　　　　　　return {
　　　　　　　　active: false,
　　　　　　　　items: [
　　　　　　　　　　{select:'营销中（29)'},
　　　　　　　　　　{select:'已下架（39)'},
　　　　　　　　]
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
        linktoDetail(id) {
            this.$router.push({ path: '/page/addgoods'})
        },
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
.logo{
  padding: 20px;h5{line-height: 30px;font-size: 1rem;font-weight: normal;}
  .input{width: 96%;background: #f7f7f7;line-height: 40px;border: 0;border-radius: 4px;padding-left: 4%;margin-top:20px; }
  .button{width: 100%;height: 40px;background: #fd5536;border-radius: 4px;color: #fff;display: inline-block;line-height: 40px;text-align: center;margin-top: 30px}
}
</style>
