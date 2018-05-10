<template>
  <div class="shop_center">
    <div class="mainInfo">
        <ul class="shop_info_left">
          <li class="shop_name">西贝筱面店铺中心</li>
          <li class="storeManager">六耳猕猴&nbsp;&nbsp;<span class="storesanager_right">店长，欢迎您</span></li>
          <li class="join_time">2018/04/28&nbsp;加入</li>
          <li class="passenger_traffic">
            <div  class="passenger_traffic_box" style="border:0;"><span>4218</span><label>总引客量</label></div>
            <div  class="passenger_traffic_box"><span>471</span><label>今日订单</label></div>
            <div  class="passenger_traffic_box"><span>618</span><label>近日引客量</label></div>
          </li>
        </ul>
      <div class="shop_info_right">
          <img src="https://ws1.sinaimg.cn/large/663d3650gy1fq6824ur1dj20ia0pydlm.jpg" alt="" class="shop_logo">
          <span class="info_modification">编辑店铺信息</span>
      </div>
    </div>

  <div class="store_order">
    <p class="store_ordertext">店铺订单<label style="font-weight: normal;">查看更多&nbsp;&gt;</label></p>
    <ul class="store_order_status">
      <li class="processing"><span class="processing_img"></span><label>全部</label></li>
      <li class="carryout"><span class="carryout_img"></span><label>进行中</label></li>
      <li class="cancel"><span class="cancel_img"></span><label>已完成</label></li>
      <li class="aftersales"><span class="aftersales_img"></span><label>已取消</label></li>
    </ul>
  </div>


    <div class="store_management">
      <p class="store_managementtext">店铺管理</p>
      <ul class="store_managementul">
        <li v-on:click="storeer"><i class="store_dianzhang"></i><span class="store_managementli_span">店长信息管理</span><label  class="store_managementli_label">王富贵 &gt;</label></li>
        <li><i class="store_dianyuan"></i><span class="store_managementli_span">店员管理</span><label  class="store_managementli_label">9人 &gt;</label></li>
      </ul>
    </div>
    <p class="help_center">帮助中心</p>
    <p class="customer_service">联系客服</p>
  </div>
</template>

<script>

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
        storeer() {
            this.$router.push({ path: '/page/storeer'})
        },
    }
}
</script>

<style scoped lang="less">
.shop_center{
    background-color:#f9f8f8;
    padding-bottom:20px;
    .mainInfo{
      width:100%;
      height:180px;
      background-color:#ffffff;
      padding:25px 20px 5px 20px;
      box-sizing:border-box;
      .shop_info_left{
          float:left;
          list-style:none;
          width:65%;
          height:100%;
          .shop_name{
            font-family:PingFangSC-Semibold;
            font-size:1.2rem;
            color:#333333;
            letter-spacing:0;
          }
          .storeManager{
            font-family:PingFangSC-Semibold;
            font-size:1rem;
            color:#f54321;
            letter-spacing:0;
            text-align:left;
            .storesanager_right{
              font-size:0.8rem;
              color:#999999;
            }
          }
          .join_time{
            font-family:PingFangSC-Regular;
            font-size:0.8rem;
            color:#999999;
            letter-spacing:0;
            text-align:left;
          }
          .passenger_traffic{
            width:100%;
            height:80px;
            display: -webkit-flex; /* Safari */
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content:space-between;
            .passenger_traffic_box{
              border-left:1px solid #eeeeee;
              flex-grow: 1;
              /*width:33.33%;*/
              span{
                display:block;
                width:100%;
                font-family:PingFangSC-Semibold;
                font-size:1.2rem;
                line-height:2rem;
                color:#333333;
                letter-spacing:0;
                text-align:center;
              }
              label{
                  display:block;
                  width:100%;
                  font-family:PingFangSC-Regular;
                  font-size:0.8rem;
                  line-height:2rem;
                  color:#777777;
                  letter-spacing:0;
                  text-align:center;
              }
            }
          }
      }
      .shop_info_right{
          float:right;
          width:33%;
          height:100%;
          text-align:center;
          .shop_logo{
            width:95px;
            height:95px;
            border-radius:100%;
          }
          .info_modification{
            font-family:PingFangSC-Regular;
            font-size:0.8rem;
            color:#f54321;
            letter-spacing:0;
            text-align:center;
          }
      }
    }
    .store_management{
      width:100%;
      height:150px;
      background-color:#ffffff;
      margin-top:10px;
      /*border:1px solid red;*/
      box-sizing:border-box;
      .store_managementtext{
        height:33.33%;
        padding:0px 20px;
        box-sizing:border-box;
        font-family:PingFangSC-Semibold;
        font-size:1rem;
        color:#333333;
        letter-spacing:0;
        text-align:left;
        font-weight:600;
        border-bottom:1px solid #f9f8f8;
        line-height:50px;
      }
      .store_managementul{
        list-style:none;
        li{
          height:33.33%;
          padding:0px 20px;
          box-sizing:border-box;
          border-bottom:1px solid #f9f8f8;
          line-height:50px;
          i{
            display:inline-block;
            width:25px;
            height:25px;
            /*border:1px solid red;*/
            vertical-align: middle;
            margin-right:10px;
          }
          .store_dianzhang{
              background:url(~@/assets/icon/xinxi.png) no-repeat
                        right center;
              background-size:100% 100%;
          }
          .store_dianyuan{
              background:url(~@/assets/icon/dianyuan.png) no-repeat
                        right center;
              background-size:100% 100%;
          }
          span,label{
            font-family:PingFangSC-Regular;
            font-size:0.8rem;
            color:#333333;
            letter-spacing:0;
            text-align:center;
          }
          label{
            float:right;
          }
        }
      }
    }
    .store_order{
      width:100%;
      height:135px;
      background-color:#ffffff;
      margin-top:10px;
      /*border:1px solid red;*/
      box-sizing:border-box;
      .store_ordertext{
        height:45px;
        padding:0px 20px;
        box-sizing:border-box;
        font-family:PingFangSC-Semibold;
        font-size:1rem;
        color:#333333;
        letter-spacing:0;
        text-align:left;
        font-weight:600;
        border-bottom:1px solid #f9f8f8;
        line-height:45px;
        label{
            float:right;
            font-family:PingFangSC-Regular;
            font-size:0.8rem;
            color:#333333;
            letter-spacing:0;
            text-align:center;
          }
      }
      .store_order_status{
        width:100%;
        height:90px;
        list-style:none;
        /*border:1px solid red;*/
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:space-between;
        li{
          flex-grow: 1;
          font-family:PingFangSC-Regular;
          font-size:0.8rem;
          color:#333333;
          letter-spacing:0;
          text-align:center;
          font-weight:500;
          span{
            display:block;
            width:30px;
            height:30px;
            /*border:1px solid red;*/
            margin:10px auto;
          }
          .processing_img{
              background:url(~@/assets/icon/dingdanq.png) no-repeat
                        right center;
              background-size:100% 100%;
            }
          .carryout_img{
              background:url(~@/assets/icon/dingdan j.png) no-repeat
                        right center;
              background-size:100% 100%;
            }
          .cancel_img{
              background:url(~@/assets/icon/dingdan w.png) no-repeat
                        right center;
              background-size:100% 100%;
          }
          .aftersales_img{
              background:url(~@/assets/icon/dingdanquxiao.png) no-repeat
                        right center;
              background-size:100% 100%;
          }
        }
      }
    }
    .help_center,.customer_service{
      width:100%;
      height:50px;
      line-height:50px;
      font-family:PingFangSC-Semibold;
      font-size:1rem;
      color:#333333;
      letter-spacing:0;
      text-align:left;
      background-color:#ffffff;
       margin-top:10px;
       padding:0px 20px;
       box-sizing:border-box;
       font-weight:600;
    }

}

</style>
