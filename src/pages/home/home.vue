<template>
    <div class="home">
        <swiper :aspect-ratio="400/750"
            loop
            auto
            dots-position="center"
            :duration="800">
            <swiper-item class="swiper-item"
                v-for="(item, index) in imgList"
                :key="index"
                @click.native="linkToDetail(item.key_word)">
                <img :src="item.img.url"
                    alt="image">
            </swiper-item>
        </swiper>
       <!-- tab菜单切换 -->
       <div class="mid_tab">
            <div class="mid_tab_item">
                <img src="~@/assets/icon/dygl.png" alt="" class='img'><span>店员管理</span>
            </div>
            <div class="mid_tab_item">
                <img src="~@/assets/icon/dpyx.png" alt="" class='img'><span>店铺营销</span>
            </div>
            <div class="mid_tab_item">
                <img src="~@/assets/icon/dpyj.png" alt="" class='img'><span>店铺业绩</span>
            </div>
            <div class="mid_tab_item">
                <img src="~@/assets/icon/ddgl.png" alt="" class='img'><span>订单管理</span>
            </div>
       </div>
        <!-- 当前累计客户量 -->
        <div class="customer_quantity">
        <p class="customer_quantity_title">当前累计客户量</p>
        <div class="customer_quantity_cont"><span class="customer_quantity_num">12345&nbsp;<b style="font-size:0.9rem;">人</b></span><label class="customer_quantity_qs"><i class="customer_quantity_qsimg"></i>&nbsp;看员工引客趋势图</label>
        </div>
        <div class="customer_quantity_box">
            <div class="customer_quantity_m">
                <p>本月新增客户(人)</p>
                <p class="customer_quantity_mnum">1233</p>
            </div>
            <div  class="customer_quantity_d">
                <p>今日新增客户(人)</p>
                <p class="customer_quantity_dnum">1233</p>
            </div>
        </div>
        </div>
        <div class="selected-themes">
            <div class="title">
                <h5>精选主题</h5>
            </div>
            <div class="selectd-box">
                <div class="selectd-item big"
                    v-if="index===2"
                    v-for="(item,index) in themeList"
                    :key="index"
                    @click="linkToTheme(item.id)"
                    :data-name="item.name">
                    <img :src="item.topic_img.url"
                        alt="">
                </div>
                <div class="selectd-item"
                    :data-id="item.id"
                    :data-name="item.name"
                    @click="linkToTheme(item.id)"
                    v-else>
                    <img :src="item.topic_img.url"
                        alt="">
                </div>
            </div>
        </div>
        <div class="recent-products">
            <div class="title">
                <h5>最近新品</h5>
            </div>
            <products :products="recentList"></products>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperItem,ButtonTab, ButtonTabItem, Divider } from 'vux'
import products from '@/components/Products'
import * as myPub from '@/assets/js/public.js'
const bannerId = 1
const themeIds = '1,2,3'
export default {
    name: 'Home',
    data() {
        return {
            imgList: [],
            themeList: [],
            recentList: []
        }
    },
    created() {
        this.getBanner()
        this.getTheme()
        this.getRecent()
    },
    methods: {
        linkToDetail(id) {
            this.$router.push({ path: '/page/detail', query: { id: id } })
        },
        linkToTheme(id) {
            this.$router.push({
                path: '/page/theme',
                query: { id: id }
            })
        },
        getBanner() {
            this.$http
                .get(
                    `${myPub.URL}/mock/5a4896ba62de717d44f2406e/api/v1/banner/${bannerId}`
                )
                .then(res => {
                    this.imgList = res.data.data.items
                    console.log(this.imgList)
                })
        },
        getTheme() {
            this.$http
                .get(
                    `${myPub.URL}/mock/5a4896ba62de717d44f2406e/api/v1/theme?ids=${themeIds}`
                )
                .then(res => {
                    this.themeList = res.data.data
                })
        },
        getRecent() {
            console.log(`${myPub.URL}`)
            this.$http
                .get(
                // https://www.easy-mock.com
                    `${myPub.URL}/mock/5a4896ba62de717d44f2406e/api/v1/product/recent`
                )
                .then(res => {
                    this.recentList = res.data.data
                })
        }
    },

    components: {
        Swiper,
        SwiperItem,
        products,
        ButtonTab,
        ButtonTabItem,
        Divider
    }
}
</script>

<style scoped lang="less">
.home {
    background: #f8f7f7;
    .swiper-item img {
        width: 100%;
    }
    .selected-themes {
        overflow: hidden;
        .title {
            padding: 10px 0;
            font-size: 18px;
            color: #ab956d;
            text-align: center;
            h5 {
                font-weight: normal;
            }
        }
        .selectd-box {
            font-size: 0;
            overflow: hidden;
            .selectd-item {
                display: inline-block;
                width: 50%;
                border-bottom: 2px solid #fff;
                box-sizing: border-box;
                img {
                    width: 100%;
                }
                &:nth-child(1){
                    border-right:1px solid #fff;
                }
                &:nth-child(2) {
                    border-left:1px solid #fff;
                }
                &.big {
                    width: 100%;
                }
            }
        }
    }
    .recent-products {
        .title {
            padding: 10px 0;
            font-size: 18px;
            color: #ab956d;
            text-align: center;
            h5 {
                font-weight: normal;
            }
        }
    }

    .mid_tab{
        width:100%;
        height:auto;
        background-color:#ffffff;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:space-between;
        padding-top:15px;
        padding-bottom:15px;
        box-sizing:border-box;
        font-family:PingFangSC-Regular;
        font-size:14px;
        color:#333333;
        letter-spacing:0;
        text-align:right;
        .mid_tab_item{
            width:25%;
            height:100%;
            text-align:center;
            .img{
                display:block;
                /*background:#eeeeee;*/
                margin:auto;
                width: 60px;
                height: 60px;
                margin-bottom:8px;
            }
        }
    }
    .customer_quantity{
        width:100%;
        min-height:180px;
/*        border:1px solid red;*/
        box-sizing:border-box;
        margin-top:10px;
        background:#ffffff;
        padding:17px 15px 25px 15px;
        .customer_quantity_title{
            font-family:PingFangSC-Regular;
            font-size:1rem;
            color:#999999;
            letter-spacing:0;
            text-align:left;
        }
        .customer_quantity_cont{
            min-height:2rem;
            .customer_quantity_num{
                float:left;
                font-family:PingFangSC-Semibold;
                font-size:1.1rem;
                color:#333333;
                letter-spacing:0;
                text-align:left;
                font-weight: 600;
            }
            .customer_quantity_qs{
                float:right;
                font-family:PingFangSC-Regular;
                font-size:0.9rem;
                color:#999999;
                letter-spacing:0;
                .customer_quantity_qsimg{
                    display:inline-block;
                    width:1.1rem;
                    height:1.1rem;
                    vertical-align: top;
                    background:url(~@/assets/icon/zushi.png) no-repeat
                        right center;
                    background-size:100% 100%;
                }
            }
        }
        .customer_quantity_box{
            margin-top:10px;
            width:100%;
            .customer_quantity_m{
                float:left;
                background:#ff8b45;
                width:45%;
                height:80px;
                font-family:PingFangSC-Regular;
                font-size:0.8rem;
                color:#ffffff;
                letter-spacing:0;
                text-align:left;
                box-sizing:border-box;
                padding:10px 0 10px 3px;
            }
            .customer_quantity_d{
                float:right;
                background:#ed765b;
                width:45%;
                height:80px;
                font-family:PingFangSC-Regular;
                font-size:0.8rem;
                color:#ffffff;
                letter-spacing:0;
                text-align:left;
                box-sizing:border-box;
                padding:10px 0 10px 3px;
            }
            .customer_quantity_mnum,.customer_quantity_dnum{
                font-weight:600;
                font-size:1rem;
            }
        }
    }
}
</style>