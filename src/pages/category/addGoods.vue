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
                <li v-on:click="greet">
                    适合人群<span></span>
                </li>
            </ul>
            <group title="" class="list">
              <radio :options="radio001" @on-change="change"></radio>
            </group>
        </div>
        <!-- 添加商品列表 -->
        <div class="goods-list">
            <ul>
                <li>
                    <div class="bb t">
                        <div class="goods-img">
                            <img src="~@/assets/img/category-goods.png">
                            <p>适合20-30岁女性</p>
                            <div class="mb"><span>已售罄</span></div>
                        </div>
                        <div class="goods">
                            <h5>mac/麦可子弹头经典唇膏麦可子弹头经典唇膏</h5>
                            <p><span class="price">￥128.00</span>&ensp;<span class="y-charge">引客价</span>&ensp;<span class="charge">￥188.00</span><a href="javascript:"><img src="~@/assets/icon/goods-left.png"></a></p>
                            <ul class="list">
                                <li>销量 <span>889</span></li>
                                <li>库存 <span>1890</span></li>
                            </ul>
                            <div class="addgood">
                                <img src="~@/assets/icon/goodsadd.png">
                                &emsp;<span>加入营销</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="sq">
                    <div class="bb t">
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
                            <div class="addgood">
                                &emsp;<span>已售罄</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
      radio001Value: '适合20-30岁群体',
      radio002Value: '适合30-40岁群体',
      radio003Value: '适合40-50岁群体',
      radio004Value: '适合50-60岁群体',
      radio003: [{
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '001',
        value: 'radio001'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '002',
        value: 'radio002'
      }
      , {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '003',
        value: 'radio003'
      }, {
        icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
        key: '004',
        value: 'radio004'
      }]

    }
  },
  methods: {
    change (value, label) {
      console.log('change:', value)
    },
    greet: function (event) {
        $(".nav-list .list").show()

    }
  }
}

// export default {
//     name: 'category',
//     data() {
//         return {
//             menu: [],
//             list: [],
//             currentIndex: 0
//         }
//     },
//     created() {
//         this.getCategory()
//     },
//     computed: {
//         menuBanner() {
//             return this.menu[this.currentIndex].img.url
//         },
//         categoryTitle() {
//             return this.menu[this.currentIndex].name
//         }
//     },
//     methods: {
//         switchCategory(index, id) {
//             this.currentIndex = index
//             this.getProduct(id)
//         },
//         linktoDetail(id) {
//             this.$router.push({ path: '/page/detail', query: { id: id } })
//         },
//         getCategory() {
//             this.$http
//                 .get(
//                     'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1/category/all'
//                 )
//                 .then(res => {
//                     this.menu = res.data.data.category
//                     this.getProduct(this.menu[0].id)
//                 })
//         },
//         getProduct(id) {
//             this.$http
//                 .get(
//                     'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1/product/by_category',
//                 {
//                     params: {
//                         id: id
//                     }
//                 }
//                 )
//                 .then(res => {
//                     this.list = res.data.data.list
//                 })
//         }
//     }
// }
</script>
<style scoped lang="less">
.category {
    height: 100%;
    display: flex;
    overflow: hidden;
    .category-menu {
        width: 75px;
        flex: 0 0 75px;
        height: 100%;
        .menu-item {
            height: 25px;
            padding: 10px 0;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 3px solid #fff;
            &.active {
                color: #ab956d;
                border-color: #ab956d;
                font-size: 15px;
                // transform: scale(1.125);
                transition: all linear 0.3s;
            }
        }
    }
    .category-main {
        flex: 1;
        height: 100%;
        transition: all 500ms ease-in-out;
        .category-detail-box {
            overflow-y: auto;
            padding: 20px;
            height: 100%;
            box-sizing: border-box;
            -webkit-overflow-scrolling: touch; 
            .category-top {
                .category-header {
                    img {
                        width: 100%;
                        vertical-align: top;
                        border-radius: 2px;
                    }
                }
                .category-title {
                    margin: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .text {
                        font-size: 12px;
                        color: #ab956d;
                        font-weight: normal;
                        &::before,
                        &::after {
                            content: '';
                            display: inline-block;
                            position: relative;
                            top: -3px;
                            width: 35px;
                            height: 1px;
                            margin: 0 10px;
                            background-color: #979797;
                            transform: scaleY(0.5);
                        }
                    }
                }
            }
            .category-list {
                display: flex;
                flex-wrap: wrap;
                .category-goods-items {
                    width: 30%;
                    margin-right: 5%;
                    margin-bottom: 10px;
                    text-align: center;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                    .goods-image {
                        width: 80%;
                        border-radius: 50%;
                    }
                    .goods-name {
                        color: #444452;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
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
        .nav-list{background: #fff;position: relative;
                .select{color: #f64a29;}
                li{width: 23%;display: inline-block;text-align: center;padding: 15px 0;position: relative;
                    a{position: absolute;margin-left: 10px;img{width: 8px;}}
                    .t{top: 18px;};.d{bottom: 23px;}
                }
                .list{position: absolute;width: 100%;z-index: 2;color: #999;font-size: 12px;display: none;}
            }
        }
/*添加商品列表*/
.goods-list{
    background: #fff;margin-top: 10px;
    .t{padding: 30px 20px 10px 20px;}
    .goods-img{
        position: relative;width:30%;display: inline-block;vertical-align:top;
        p{position: absolute;bottom: 0;background: rgba(153,153,153,.7);text-align: center;line-height: 25px;color: #fff;font-size: 10px;width: 100%;z-index: 1;}
        img{width: 100%}
        .mb{display: none;position: absolute;width: 100%;height: 100%;left: 0;top: 0;background: rgba(153,153,153,.7);span{display: inline-block;width: 60px;height: 25px;color: #fff;border: 1px solid #fff;transform: rotate(-30deg);margin-top: 35px;margin-left: 20px;text-align: center;line-height: 25px;}}
    }
    .goods{
        display: inline-block;margin-left:2%;width: 65%;background: #fff;position: relative;
        h5{width: 95%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-weight: normal;};
        p{margin-top: 10px;a{float: right;margin-top: 5px;}}
        .price{color: #f54321;font-size:1.2rem;font-weight: 600;}
        .y-charge{display: inline-block;color:#f54321;border: 1px solid #f54321;padding: 0 3px ;font-size:0.8rem }
        .charge{color: #ddd;position: relative;font-size: 0.8rem;}
        .charge:after{content: '';display: inline-block;position: absolute;width: 100%;top: 50%;height: 1px;background: #ddd;left: 0;}
        .list li{line-height: 25px;padding: 0;font-size: 0.8rem;list-style: none;}
        .bottom .select{color: #f64a29;}
        .addgood{float:right;width: 140px;height: 30px;background: #f54321;color:#fff;line-height:30px;position: absolute;right:0;bottom:0;img{position: relative;top: 1px;left: 10px;width: 15px;};}
        
    }
    .sq{.addgood{background: #ddd;color: #fff;text-align: center;}.mb{display: block;}}
}
</style>
