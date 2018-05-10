<template>
    <div class="detail page">
        <div class="detail-main"
             v-if="product">
            <!-- 购物车漂浮按钮 -->
           <!--  <div class="fixed-cart-box"
                 @click="linkToCart"
                 :class="[isShake ?'animate':'']">
                <img src="~@/assets/icon/cart@top.png"
                     alt="icon-cart"
                     ref="topCart">
                <span class="total-count"
                      v-if="this.totalCount>0">{{this.totalCount}}</span>
            </div> -->
            <div class="detail-img">
                <img :src="product.main_img_url"
                     alt="image">
            </div>

            <div class="cart-box marketing-box">
                <div class="product-counts">
                    <div class="picker"></div>
                    <span class="counts-tips">客服</span>
                   <!--  <popup-picker :data="countsArray"
                                  v-model="count"
                                  class="picker"
                                  popup-title="请选择数量"
                                  value-text-align="left"></popup-picker> -->
                </div>
                <!-- <div class="middle-border"></div> -->
                <div class="add-cart-btn"
                     @touchstart="onAddToCart">
                    <span class="add-cart">立即加入营销列表</span>
                  <!--   <i class="icon-cart"></i>
                    <img class="small-top-img"
                         ref="smallTopImg"
                         :src="product.main_img_url"
                         :class="[isFly ?'animate':'']"
                         alt="image"></img> -->
                </div>
            </div>

            <div class="product-info-box">
              <!--   <div class="stock"
                     v-if="product.stock>0">有货</div>
                <div class="stock no"
                     v-else>缺货</div> -->
                <div class="price">
                    <span class="coupon_price">券后价</span>￥{{product.price}} <s>￥{{product.price}}</s>
                    <span class="order_information order_information_s">包税</span><span class="order_information">包邮</span>
                </div>
                <div class="sold_information">
                    <div class="sold"><span>已售</span>1190件</div>
                    <div class="preview">已有<span>2190</span>人预览</div>
                </div>
                <div class="name_box">
                    <div class="name_tbor"></div>
                    <p class="name">{{product.name}}</p>
                </div>
                <div class="country">
                    <div class="country_span">来自
                    <img src="~@/assets/icon/fg.png" alt="">
                    法国</div>
                    <div class="country_label"">本商品售价已含税，无需额外支付税费</div>
                 </div>
            </div>
        </div>

        <!-- 领取优惠券部分 -->
        <group>
          <x-switch title="领券" v-model="show13" id="title——lq"></x-switch>
        </group>
        <div v-transfer-dom>
          <popup v-model="show13" position="bottom" max-height="50%">
            <group>
              <cell v-for="i in couponlist" >
                <div id="use_information">
                <p class="price_box"><span class="com_price">￥{{i.a}}</span><span class="com_range">{{i.b}}</span></p>
                <p class="com_limit">{{i.c}}</p>
                <p class="com_time">{{i.d}}</p>
                </div>
                <button class="com_btn">立即使用</button>
              </cell>
            </group>
            <div style="padding: 15px;">
              <x-button @click.native="show13 = false" plain type="primary"> 关闭 </x-button>
            </div>
          </popup>
        </div>

        <div class="detail-bottom" style="margin-bottom:55px;">
            <tab :line-width=2
                 active-color='#AB956D'
                 v-model="index">
                <tab-item class="vux-center"
                          :selected="selectd === item"
                          v-for="(item, index) in list"
                          @click="selectd = item"
                          :key="index">{{item}}</tab-item>
            </tab>
            <swiper v-model="index"
                    height="auto"
                    :show-dots="false">
                <swiper-item v-for="(item, index) in list"
                             :key="index">
                    <div class="tab-swiper vux-center">{{item}}</div>
                </swiper-item>

                <!-- 生成并分享二维码 -->
                <span id="fenxiang_falsebtn"></span>
                <group id="fenxiang">
                  <x-switch v-model="showHideOnBlur" title="" id="fenxiang_btn"></x-switch>
                </group>

                <div v-transfer-dom>
                  <x-dialog v-model="showHideOnBlur" class="dialog-demo" hide-on-blur>
                    <div class="img-box">
                      <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" style="max-width:100%">
                    </div>
                    <div @click="showHideOnBlur=false">
                      <qrcode :value="value" :fg-color="fgColor" id="fx-qcode"></qrcode>长按图片识别二维码
                    </div>
                  </x-dialog>
                </div>
            </swiper>
        </div>
        <!-- <qrcode :value="value" :fg-color="fgColor"></qrcode> -->
    </div>
</template>

<script>
import { PopupPicker, Tab, TabItem, Swiper, SwiperItem,Qrcode, Divider,XDialog, Popup, Group, Cell, XButton, XSwitch, Toast, XAddress, ChinaAddressData,TransferDomDirective as TransferDom } from 'vux'
import { mapState, mapMutations, mapGetters } from 'vuex'
import * as myPub from '@/assets/js/public.js'
const tabList = () => ['商品详情', '产品参数']
export default {
    name: 'detail',
    directives: {
        TransferDom
    },
    data() {
        return {
            product: null,
            countsArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
            count: ['1'],
            list: tabList(),
            selectd: '商品详情',
            index: 0,
            isFly: false,
            isShake: false,
            value: 'https://vux.li',
            fgColor: '#000000',
            qrcode_url: ``,
            avatar_url: ``,
            friendName: '',
            imageUrl: null,
            showScrollBox: false,
            show13: false,
            showHideOnBlur: false,
            couponlist:[{'a':'155','b':'满100可用','c':'仅限亚菲儿香水使用','d':'3天内有效'},{'a':'155','b':'满100可用','c':'仅限亚菲儿香水使用','d':'3天内有效'},{'a':'155','b':'满100可用','c':'仅限亚菲儿香水使用','d':'3天内有效'}]
        }
    },
    computed: {
        ...mapState(['userInfo']),
        ...mapGetters(['totalCount']),
        isDisabled() {
            return this.product.stock > 0
        }
    },
    mounted () {
        setInterval(() => {
          this.value = `http://www.pingminjie.cn?t=${Math.random()}`
          this.fgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
          console.log(this.value)
        }, 1000)
    },
    created() {},
    activated() {
        this.getALLProducts()
    },
    methods: {
        ...mapMutations(['ADD_TO_CART']),
        linkToCart() {
            this.$router.push({ path: '/page/cart' })
        },
        getALLProducts() {
            this.$http
                .get(
                    `${myPub.URL}/mock/5a4896ba62de717d44f2406e/api/v1/product/all`
                )
                .then(res => {
                    let detailData = res.data.data.filter(item => {
                        return item.id === +this.$route.query.id
                    })
                    this.product = detailData[0]
                })
        },
        onAddToCart() {
            // 如果没登录，先去登录
            if (!this.userInfo) {
                this.$router.push({ path: '/login' })
            }
            // 缺货时禁止点击
            if (!this.isDisabled) {
                this.$vux.toast.text('暂时缺货哦~', 'middle')
                return
            }
            // 防止过快点击
            if (this.isFly) return
            // 移动距离
            let rect1 = this.$refs.smallTopImg.getBoundingClientRect()
            let rect2 = this.$refs.topCart.getBoundingClientRect()
            let x = rect1.right - rect2.right + (40 - 16)
            let y = rect2.top - rect1.top - 20
            this.isFly = true
            this.$nextTick(() => {
                this.$refs.smallTopImg.style.transform = `translate(${x}px,${y}px) rotate(350deg) scale(0)`
            })
            setTimeout(() => {
                // 飞入购物车动画恢复到最初状态
                this.isFly = false
                this.$refs.smallTopImg.style.transform = 'none'
                // 右侧购物车图标放大
                this.isShake = true
                setTimeout(() => {
                    let count = +this.count // 字符串类型数字转为数字
                    if (this.product.isChecked === undefined) {
                        this.$set(this.product, 'isChecked', true)
                    }
                    this.ADD_TO_CART(
                        Object.assign({}, this.product, { count: count })
                    )
                    this.isShake = false
                }, 200)
            }, 1000)
        }
    },
    components: {
        PopupPicker,
        Tab,
        TabItem,
        Swiper,
        SwiperItem,
        Qrcode,
        Divider,
        XDialog,
        Popup,
        Group,
        XSwitch,
        Popup,
        Group,
        Cell,
        XSwitch,
        Toast,
        XAddress,
        XButton
    }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/center.less';
    @import '~vux/src/styles/close.less';
    .detail {
    background-color:#f9f9f9;
    .detail-main {
    background:#fff;
    .fixed-cart-box {
    position:fixed;
    z-index:10;
    top:71px;
    right:0.6rem;
    width:40px;
    height:32px;
    img {
    width:32px;
    height:32px;
}
.total-count {
    font-size:0.6rem;
    background-color:#ab956d;
    color:#fff;
    position:absolute;
    right:32px;
    top:0;
    height:18px;
    width:18px;
    line-height:18px;
    border-radius:18px;
    text-align:center;
}
&.animate {
    animation:animateCartScale 200ms
                    cubic-bezier(0.17,0.67,0.83,0.67);
    animation-fill-mode:backwards;
}
}.detail-img {
    position:relative;
    height:0;
    padding-top:100%;
    img {
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
    vertical-align:top;
}
}.cart-box {
    height:55px;
    width:100%;
    border-top:1px solid #dddddd;
    background-color:#f54321;
    color:#fff;
    position:fixed;
    bottom:0;
    left:0;
    z-index:1000000;
    display:flex;
    align-items:center;
    .product-counts {
    width:30%;
    height:100%;
    background-color:#fff;
    font-family:PingFangSC-Regular;
    font-size:0.8rem;
    color:#666666;
    letter-spacing:0;
    text-align:center;
    box-sizing:border-box;
    .picker {
    width:35%;
    height:60%;
    background:url(~@/assets/icon/kefu.png) no-repeat
                        right center;
    background-size:100% 100%;
    margin:3px auto 2px auto;
    /*border:1px solid red;
    */
}
.counts-tips {
    display:block;
    height:40%;
    /*border:1px solid red;
    */
                    font-size:0.6rem;
}
}.add-cart-btn {
    height:100%;
    line-height:55px;
    font-family:PingFangSC-Regular;
    font-size:1.2rem;
    color:#ffffff;
    letter-spacing:0;
    text-align:center;
    position:relative;
    flex:1;
    &:active {
    color:#fff;
}
&.disabled {
    color:#d5d5db;
}
.icon-cart {
    margin-left:20px;
    height:16px;
    width:16px;
    background:url(~@/assets/icon/cart.png) no-repeat;
    background-size:100% 100%;
}
.small-top-img {
    width:80px;
    height:80px;
    right:5px;
    position:absolute;
    // opacity:0;
    visibility:hidden;
    &.animate {
    // opacity:1;
    visibility:visible;
    transition:all 1000ms
                            cubic-bezier(0.175,0.885,0.32,1.275);
}
}}}.product-info-box {
    border-top:1px solid #eeeeee;
    border-bottom:1px solid #eeeeee;
    padding:8px 0;
    color:#454552;
    /*text-align:center;
    */
            div {
    margin:10px auto;
    &.stock {
    font-size:0.6rem;
    &.no {
    color:#b42f2d;
}
}&.country {
    width:100%;
    padding:0px 17px;
    font-size:0.6rem;
    color:#999999;
    letter-spacing:0;
    text-align:left;
    display:flex;
    height:34px;
    line-height:34px;
    /*border:1px solid red;
    */
                    box-sizing:border-box;
    flex-wrap:nowrap;
    justify-content:space-between;
    .country_span {
    margin:0!important;
    img {
    vertical-align:middle;
    width:1.5rem;
    height:1.2rem;
}
}.country_label {
    margin:0!important;
}
}&.name_box {
    box-sizing:border-box;
    width:100%;
    font-size:20px;
    padding:0px 17px;
    .name_tbor {
    background:#eeeeee;
    width:100%;
    height:1px;
}
.name {
    font-family:PingFangSC-Semibold;
    font-size:1rem;
    color:#333333;
    letter-spacing:0;
    text-align:left;
    font-weight:700;
}
}&.price {
    font-size:1.3rem;
    color:#f54321;
    .coupon_price {
    margin-left:17px;
    margin-top:6.5px;
    float:left;
    border:1px solid #f54321;
    border-radius:4px;
    width:40px;
    height:17px;
    line-height:17px;
    font-family:PingFangSC-Semibold;
    font-size:0.6rem;
    color:#f54321;
    letter-spacing:0;
    text-align:center;
}
s {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#999999;
    letter-spacing:0;
    text-align:left;
}
.order_information {
    display:inline-block;
    background:#ff5f41;
    border-radius:4px;
    width:33px;
    height:23px;
    margin-left:15px;
    font-family:PingFangSC-Regular;
    font-size:0.6rem;
    color:#ffffff;
    letter-spacing:0;
    text-align:center;
    line-height:23px;
    vertical-align:text-bottom;
}
.order_information_s {
    background:#56c66a;
}
}}}}.detail-bottom {
    background:#fff;
    margin-top:15px;
    .tab-swiper {
    background-color:#fff;
    height:180px;
}
}.sold_information {
    width:100%;
    height:17px;
    display:flex;
    /*border:1px solid red;
    */
        box-sizing:border-box;
    flex-wrap:nowrap;
    justify-content:space-between;
    padding:0px 17px;
    font-family:PingFangSC-Regular;
    font-size:13px;
    color:#999999;
    letter-spacing:0;
    text-align:left;
    .sold {
    height:100%;
    margin:0px!important;
}
.preview {
    height:100%;
    margin:0px!important;
}
}}@keyframes animateCartScale {
    0% {
    -webkit-transform:scale(1.2);
}
100% {
    -webkit-transform:scale(1);
}
}.page {
    height:100%;
    width:100%;
    position:relative;
    background-size:cover;
    font-family:PingFangSC-Regular;
    color:#757575;
    .avatar {
    position:absolute;
    z-index:999;
    height:8%;
    width:13%;
    right:30.3%;
    bottom:15.3%;
    img {
    height:100%;
    width:100%;
    overflow:hidden;
    border-radius:50%;
}
}.bg {
    position:absolute;
    display:block;
    max-width:100%;
    height:auto;
    z-index:997;
}
.mention {
    margin-bottom:1rem;
    /* margin-top:1.2rem;
    */
    font-size:1.5rem;
    height:1.6rem;
}
.qrcode {
    z-index:999;
    position:absolute;
    left:60%;
    bottom:12%;
    width:80px;
    height:80px;
    img {
    height:100%;
    width:100%;
}
}.image {
    width:100%;
    height:32rem;
}
/*iphone 5s*/
  @media screen and (max-width:320px) {
    .avatar {
    bottom:15.8%;
}
.qrcode {
    bottom:11%;
}
}}.popup0 {
    padding-bottom:15px;
    height:200px;
}
.popup1 {
    width:100%;
    height:100%;
}
.popup2 {
    padding-bottom:15px;
    height:400px;
}
.position-vertical-demo {
    background-color:#ffe26d;
    color:#000;
    text-align:center;
    padding:15px;
}
.position-horizontal-demo {
    position:relative;
    height:100%;
    .vux-close {
    position:absolute;
    top:50%;
    left:50%;
    transform:translateX(-50%) translateY(-50%) scale(4);
    color:#000;
}
}.vux-popup-dialog {
    z-index:2000000;
}
.weui-cell {
    width:100%;
    height:100px;
    padding:0px;
    box-sizing:border-box;
    background:url(~@/assets/img/yhq_bg.jpg) no-repeat;
    background-size:100% 100%;
    position:relative;
    #use_information {
    float:left;
    text-align:left;
    position:absolute;
    left:1rem;
    top:12.5px;
    width:65%;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    .price_box {
    color:#ff8134;
    .com_price {
    font-family:PingFangSC-Semibold;
    font-size:1.3rem;
    color:#ff8134;
    letter-spacing:0;
    text-align:center;
}
.com_range {
    font-family:PingFangSC-Regular;
    font-size:1rem;
    margin-left:1rem;
    color:#ff8134;
    letter-spacing:0;
    text-align:left;
}
}.com_limit {
    font-family:PingFangSC-Regular;
    font-size:0.8rem;
    color:#333333;
    letter-spacing:0;
    text-align:left;
    height:1rem;
    line-height:1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
.com_time {
    font-family:PingFangSC-Regular;
    font-size:0.8rem;
    color:#333333;
    letter-spacing:0;
    text-align:left;
    height:1rem;
    line-height:1rem;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
}}.com_btn {
    background:#ff8134;
    border-radius:1rem;
    width:5rem;
    height:2rem;
    border:0;
    margin-right:0.5rem;
    font-family:PingFangSC-Regular;
    font-size:0.8rem;
    color:#ffffff;
    letter-spacing:0;
    text-align:center;
}
#title——lq {
    background:none;
    width:100%;
    height:50px;
    padding:0px 17px;
    box-sizing:border-box;
}
.weui-btn_plain-primary {
    color:#ff8134;
    border:1px solid #ff8134;
}
@import '~vux/src/styles/close';

.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}

#fenxiang{
    background:none;
    width:50px;
    height:50px;
    border-radius:50%;
    padding-left:17px;
    box-sizing:border-box;
    border:none;
    padding:0;
    position:absolute;
    right:20px;
    top:50px;
    opacity:0;
}
#fenxiang_btn{
    background:none;
    width:50px;
    height:50px;
    border-radius:50%;
    padding:0;
    box-sizing:border-box;
    position:relative;
    .weui-switch{

    }
}
#fenxiang_falsebtn{
    position:absolute;
    right:20px;
    top:80px;
    display:block;
    width:30px;
    height:30px;
    background:url(~@/assets/icon/fenxiang.jpg) no-repeat;
    background-size:100% 100%;
}

#fx-qcode{
    width:50px;
    height:50px;
    margin:20px;
    margin-left:0;
    display:inline-block;
    vertical-align:middle;
}
</style>
