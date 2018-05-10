<template>
    <div class="store">
    <!-- 顶部数据 -->
          <div class="top clearfix">
            <div class="fl left"><img  src="~@/assets/icon/add.png"></div>
            <div class="fl right">
              <h5>更换新店长<img class="icon" src="~@/assets/icon/goods-left.png" /></h5>
              <p>新店长账号添加成功后，当前店长账号将立即失效</p>
            </div>
          </div>
          <div class="middle">
            <ul>
              <li>
                <span class="fl">负责人</span>
                <span class="fr">王富贵&emsp;<img src="~@/assets/icon/goods-left.png"></span>
              </li>
              <li>
                <span class="fl">修改手机号</span>
                <span class="fr">152****8765&emsp;<img src="~@/assets/icon/goods-left.png"></span>
              </li>
            </ul>
          </div>
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
.fl{float: left;}
.fr{float: right;}
.store{
  background: #f1f1f1;
  h5{position: relative;font-size: 1rem;font-weight: normal;.icon{width: 0.6rem;position: absolute;right: -6%;top: 30%;}}
  .top{padding: 10px;
    background: #fff;
    .left{width:10%;margin-top: 1rem;img{width: 100%;}}
  .right{
      margin-top: 1rem;
      left: 3%;
      position: relative;
      width:80%;
      p{font-size: 0.8rem;color: #999;}}
  }
  .middle {
    padding: 10px;
    background: #fff;margin-top: 20px;
    li{
      line-height: 4rem;border-bottom: 1px solid #ddd;height:4rem;
      .fr{color: #999;img{position: relative;top:0.2rem;}}
    }
  }
}
</style>
