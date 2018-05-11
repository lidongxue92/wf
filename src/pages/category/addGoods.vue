<template>
    <div class="goods">
        <div class="nav-list">
            <ul>
                <li class="select">价格
                    <a href="javascript:" class="t"><img src="~@/assets/icon/goods-down.png"></a>
                    <a href="javascript:" class="d"><img src="~@/assets/icon/goods-up.png"></a>
                </li>
                <li>销量<span></span></li>
                <li>库存<span></span></li>
                <li v-on:click="greet" >
                    适合人群<img class="sx" src="~@/assets/icon/sx.png">
                </li>
            </ul>
            <group title="" class="list">
              <radio :options="radio001" @on-change="change" :selected-label-style="{color: '#f54321'}"></radio>
            </group>
        </div>
        <!-- 添加商品列表 -->
        <div class="goods-list">
            <ul>
                <li class="bb t" v-show="show">
                    <div class="goods-img">
                        <img src="~@/assets/img/category-goods.png">
                        <p>适合20-30岁女性</p>
                        <div class="mb"><span>已售罄</span></div>
                    </div>
                    <div class="goods" v-on:click="linkToDetail(11)">
                        <h5>mac/麦可子弹头经典唇膏麦可子弹头经典唇膏</h5>
                        <p><span class="price">￥128.00</span>&ensp;<span class="y-charge">引客价</span>&ensp;<span class="charge">￥188.00</span><a href="javascript:"><img src="~@/assets/icon/goods-left.png"></a></p>
                        <ul class="list">
                            <li>销量 <span>889</span></li>
                            <li>库存 <span>1890</span></li>
                        </ul>
                    </div>
                    <div class="addgood" v-on:click="showPanel">
                        <img src="~@/assets/icon/goodsadd.png">
                        &emsp;<span>加入营销</span>
                        <div class="suc" v-show="panelShow" :panelShow="panelShow">
                            <span v-on:click="hidepanel"><img src="~@/assets/icon/close.png"></span>
                            已成功加入营销中
                        </div>
                    </div>
                </li>
                <li class="sq bb t">
                    <div class="goods-img">
                        <img src="~@/assets/img/goods.png">
                        <p>适合所有人</p>
                        <div class="mb"><span>已售罄</span></div>
                    </div>
                    <div class="goods ">
                        <h5>mac/麦可子弹头经典唇膏麦可子弹头经典唇膏</h5>
                        <p><span class="price">￥128.00</span>&ensp;<span class="y-charge">引客价</span>&ensp;<span class="charge">￥188.00</span><a href="javascript:"><img src="~@/assets/icon/goods-left.png"></a></p>
                        <ul class="list">
                            <li>销量 <span>889</span></li>
                            <li>库存 <span>1890</span></li>
                        </ul>
                    </div>
                    <div class="addgood">
                        <img src="~@/assets/icon/goodsadd.png">
                        &emsp;<span>已售罄</span>
                    </div>
                </li>
                <li class="bb t">
                    <div class="goods-img">
                        <img src="~@/assets/img/category-goods.png">
                        <p>适合20-30岁女性</p>
                        <div class="mb"><span>已售罄</span></div>
                    </div>
                    <div class="goods" v-on:click="linkToDetail(11)">
                        <h5>mac/麦可子弹头经典唇膏麦可子弹头经典唇膏</h5>
                        <p><span class="price">￥128.00</span>&ensp;<span class="y-charge">引客价</span>&ensp;<span class="charge">￥188.00</span><a href="javascript:"><img src="~@/assets/icon/goods-left.png"></a></p>
                        <ul class="list">
                            <li>销量 <span>889</span></li>
                            <li>库存 <span>1890</span></li>
                        </ul>
                    </div>
                    <div class="addgood">
                        <img src="~@/assets/icon/goodsadd.png">
                        &emsp;<span>加入营销</span>
                    </div>
                </li>
                <li class="sq bb t">
                    <div class="goods-img">
                        <img src="~@/assets/img/goods.png">
                        <p>适合所有人</p>
                        <div class="mb"><span>已售罄</span></div>
                    </div>
                    <div class="goods ">
                        <h5>mac/麦可子弹头经典唇膏麦可子弹头经典唇膏</h5>
                        <p><span class="price">￥128.00</span>&ensp;<span class="y-charge">引客价</span>&ensp;<span class="charge">￥188.00</span><a href="javascript:"><img src="~@/assets/icon/goods-left.png"></a></p>
                        <ul class="list">
                            <li>销量 <span>889</span></li>
                            <li>库存 <span>1890</span></li>
                        </ul>
                    </div>
                    <div class="addgood">
                        &emsp;<span>已售罄</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg"></div>
    </div>
</template>
<script>
import $ from 'jquery'
import { Radio, Group } from 'vux'


export default {
  components: {
    Radio,
    Group
  },
  data () {
    return {
      radio001: [ '适合20-30岁群体', '适合30-40岁群体' , '适合40-50岁群体', '适合50-60岁群体'],
       panelShow: false,
       show:true,
    }
  },
  methods: {
    change (value, label) {
      console.log('change:', value)
      setTimeout(function (){
            $(".nav-list .list").hide();
            $(".bg").hide()
        }, 1500);
          
    },
    greet: function () {
        $(".nav-list .list").show()
        $(".bg").show ()

    },
    linkToDetail(id) {
        this.$router.push({ path: '/page/detail', query: { id: id } })
    },
    showPanel() {
       this.panelShow = true;
    },
    hidepanel(){
        this.show = false;
    }
  }
}

</script>
<style type="text/css">
    .weui-icon-checked:before{color: #f54321!important;}
</style>
<style scoped lang="less">
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

.f16{font-size: 0.8rem!important;}
.ml10{margin-left: 10px;}
.pb10{padding-bottom:10px;}
.bb{border-bottom: 1px solid #ddd;}
/*商品数据查询*/
.goods {
        background: #f1f1f1;
        .bg{position: absolute;width: 100%;height: 100%;background: rgba(0,0,0,.5);z-index: 11;left: 0;top: 0;display: none;}
        .nav-list{background: #fff;position: relative;
                .select{color: #f64a29;}
                li{width: 23%;display: inline-block;text-align: center;padding: 1rem 0;position: relative;font-size: 0.9rem;
                    a{position: absolute;margin-left: 10px;img{width: 0.6rem;}}
                    .t{top: 1.3rem;};.d{bottom: 1.4rem;}.sx{width: 0.9rem;position: relative;top: 0.2rem;left: 0.2rem}
                }
                .list{position: absolute;width: 100%;z-index: 2;color: #999;font-size: 10.8rem;display: none;z-index: 111;}
            }
        }
/*添加商品列表*/
.goods-list{
    background: #fff;margin-top: 10px;
    .t{padding: 1.5rem 1rem 1rem 1.5rem;}
    li{position: relative;}
    .goods-img{
        position: relative;width:30%;display: inline-block;vertical-align:top;
        p{position: absolute;bottom: 0;background: rgba(153,153,153,.7);text-align: center;line-height: 25px;color: #fff;font-size: 10px;width: 100%;z-index: 1;}
        img{width: 100%}
        .mb{display: none;position: absolute;width: 100%;height: 100%;left: 0;top: 0;background: rgba(153,153,153,.7);span{display: inline-block;width:4rem;height:1.8rem;color: #fff;border: 1px solid #fff;transform: rotate(-30deg);margin-top: 1.5rem;margin-left: 0.7rem;text-align: center;line-height: 1.8rem;}}
    }
    .goods{
        display: inline-block;margin-left:2%;width: 65%;background: #fff;position: relative;
        h5{width: 95%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: normal;font-size: 0.8rem};
        p{margin-top: 10px;a{float: right;margin-top: 5px;}}
        .price{color: #f54321;font-size:1rem;font-weight: 600;}
        .y-charge{display: inline-block;color:#f54321;border: 1px solid #f54321;padding: 0 0.1rem ;font-size:0.7rem }
        .charge{color: #ddd;position: relative;font-size: 0.7rem;}
        .charge:after{content: '';display: inline-block;position: absolute;width: 100%;top: 50%;height: 1px;background: #ddd;left: 0;}
        .list li{line-height: 1.2rem;padding: 0;font-size: 0.8rem;list-style: none;}
        .bottom .select{color: #f64a29;}

    }
    .addgood{font-size:0.8rem;float:right;width: 6rem;height: 1.7rem;background: #f54321;color:#fff;line-height:1.7rem;position: absolute;right:2rem;bottom:1rem;
        img{position: relative;top: 0.2rem;left: 0.8rem;width: 0.8rem;};
        .suc{position: absolute;right: 4rem;bottom: 1rem;padding: 1rem;border: 1px solid #999;background: #fff;z-index: 111;color: #999;width: 9rem;text-align: center;height: 1rem;line-height: 1rem;
            span{position: absolute;top: 0.5rem;right: 0.5rem;width: 0.8rem;img{width: 100%;left: 0;}}
        }
    }
    .sq{.addgood{background: #ddd;color: #fff;text-align: center;}.mb{display: block;}}
}
</style>
