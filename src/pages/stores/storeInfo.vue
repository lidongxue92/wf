<template>
  <div id='storeInfo'>
    <!--  店铺logo -->
       <div class='finish_room2'>
         <div  class='room_img'>
            <img :src="imgs">
         </div>
         <div class='room_add_btn'>
              <input @change='add_img'  type="file">
              <div class="room_opacity"></div>
              <div id="img-change2">
                <div class="img-changeImg"></div>
                <p class="img-changeText">更换店铺图像</p>
              </div>
         </div>
     </div>
     <p class="store_name">{{value1}}</p>
    <ul class="store-list">
      <li class="clearfix">
        <span class="fl">店铺名称</span><span class="fr">西贝筱面古北店&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix" v-on:click="logo">
        <span class="fl">品牌名称</span><span class="fr">西贝&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix" v-on:click="shop">
        <span class="fl">公司模式</span><span class="fr">直营分店&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix">
        <span class="fl">店铺地址</span><span class="fr">上海市闵行区闵行区古北路1699写字楼15楼&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix" v-on:click="people">
        <span class="fl">负责人</span><span class="fr">王富贵&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix" v-on:click="phone">
        <span class="fl">修改手机号</span><span class="fr">152****8765&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <li class="clearfix" v-on:click="shopinfo">
        <span class="fl">店铺介绍</span><span class="fr">西贝莜面村是西贝餐饮集团旗下的主品牌，主营中式休闲正餐，西北菜的杰出代表&emsp;<img src="~@/assets/icon/goods-left.png"></span>
      </li>
      <!-- 营业执照 -->
      <li class="zz_box clearfix">
        <span class="zz_text">营业执照</span>
        <div class='finish_zhizhao'>
               <div  class='zhizhao_img'>
                  <img :src="img_zhi">
               </div>
               <div class='zhizhao_add_btn'>
                    <input @change='add_zzimg'  type="file">
                    <div class="zhizhao_opacity"></div>
                    <div id="img-changeZZ">
                      <div class="img-changeImgZZ"></div>
                      <p class="img-changeTextZZ">更换营业执照</p>
                    </div>
               </div>
           </div>
      </li>
    </ul> 
    <!-- 公司模式 -->
    <div class="shop">
      <h5>公司模式</h5>
      <div class="select">
        <select>
          <option>直营分店</option>
          <option>加盟</option>
        </select>
        <img src="~@/assets/icon/arrow@right.png">
      </div>
      <div class="clearfix btn">
        <span v-on:click="gb" class="fl">取消</span><span v-on:click="tj" class="fr">确认</span>
      </div>
      
    </div>
    <!-- <group label-width="4.5em" label-margin-right="2em" label-align="right" id="form_box">
      <x-input title="店铺名称" :value="value1" disabled ></x-input>
      <x-input title="所属品牌" :value="value2" disabled v-on:click="linktoDetail"></x-input>
      <x-input title="公司模式" :value="value3" disabled></x-input>
      <x-textarea title="店铺地址" :show-counter="false" :rows="3" :value="value4" disabled></x-textarea>
      <x-input title="负责人" :value="value5" disabled></x-input>
      <x-input title="联系电话" type="number" :value="value6" disabled></x-input>
      <x-textarea title="店铺介绍" :value="value7" :show-counter="false" :rows="3" disabled></x-textarea>
    </group> -->

    <div class="bg"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch,Panel, Radio,XButton,Box} from 'vux'
  /**
* 从 file 域获取 本地图片 url
*/
function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
  export default {
    name: 'storeInfo',
    components: {
      Group,
      GroupTitle,
      Cell,
      XInput,
      Selector,
      PopupPicker,
      XAddress,
      Datetime,
      XNumber,
      XTextarea,
      XSwitch,
      Panel,
      Radio,
      XButton,
      Box
    },
    methods:{
        add_img(event){
          var reader =new FileReader();
          var img1=event.target.files[0];
          reader.readAsDataURL(img1);
          var that=this;
          reader.onloadend=function(){
              that.imgs=reader.result
          }
        },
        add_zzimg(event){
          var reader =new FileReader();
          var img1=event.target.files[0];
          reader.readAsDataURL(img1);
          var that=this;
          reader.onloadend=function(){
              that.img_zhi=reader.result
          }
        },
        logo() {
            this.$router.push({ path: '/page/logo'})
        },
        shopinfo() {
            this.$router.push({ path: '/page/shopinfo'})
        },
        phone() {
            this.$router.push({ path: '/page/phone'})
        },
        people() {
            this.$router.push({ path: '/page/people'})
        },
        shop() {
            $(".shop").show()
            $(".bg").show(  )
        },
        gb() {
            $('.shop').hide()
            $(".bg").hide()
        } ,
        tj() {
            $('.shop').hide()
            $(".bg").hide()
        }
    },
    data () {
      return {
        value1: '西贝筱面古北店',
        value2: '西贝',
        value3: '直营分店',
        value4: '上海市闵行区闵行区古北路1699写字楼15楼',
        value5: '富贵',
        value6: '13712345678',
        value7: '西贝莜面村是西贝餐饮集团旗下的主品牌，主营中式休闲正餐，西北菜的杰出代表',
        value8: '',
        time1: '2017-06-01',
        numberValue: 0,
        type: '1',
        imgs:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3410181771,3257903943&fm=58&w=121&h=140&img.PNG',
        img_zhi:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3410181771,3257903943&fm=58&w=121&h=140&img.PNG'
      }
    },
    //页面加载后执行
    mounted(){
    }
  }
</script>
<style scoped lang="less">
@import '~vux/src/styles/center.less';
  #storeInfo {
    position: relative;
  padding:35px 21px;
  .weui-panel:before,.weui-panel:after {
  border:0;}
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
.tr{text-align: right;}
.store-list{
  padding: 0;margin-top: 1rem;
  li{list-style: none;padding: 10px 15px;border-bottom: 1px solid #ddd;img{position: relative;top: 0.2rem;}.fr{color: #999;width: 60%;text-align: right}}
}
/*公司模式*/
.shop{
  display: none;
  position: absolute;width: 80%;background: #fff;
  top: 20%;
  border-radius: 10px;
  padding: 1rem;
  z-index: 2;
  h5{line-height: 30px;text-align: center;color: #333;font-weight: normal;font-size: 1rem}
  .select{
    margin-top: 20px;
    position: relative;
    select{text-align: center;width: 100%;line-height: 40px;background: #f7f7f7;height: 40px;border: 0;border-radius: 4px;appearance:none;-moz-appearance:none;-webkit-appearance:none;padding-left: 1rem}
    img{position: absolute;right: 5px;top: 5px;}
  }
  .btn{
    margin-top: 20px;
    span{display: inline-block;width: 40%;text-align: center;line-height: 40px;}
    .fl{background: #f7f7f7;border-radius: 4px;color: #333;}
    .fr{background: #fd5536;border-radius: 4px;color: #fff;}
  }
}
/*蒙版*/
.bg{width: 100%;height: 100%;position: absolute;background: rgba(0,0,0,.6);top: 0;left: 0;display: none;}
.apply_btn {
  background:#ff8134;
  border-radius:4px;
  width:100%;
  height:45px;
  font-family:PingFangSC-Regular;
  font-size:1rem;
  color:#ffffff;
  letter-spacing:0;
  text-align:center;
}
.set_login_btn {
  width:40%;
  float:right;
  font-family:PingFangSC-Regular;
  font-size:0.8rem;
  color:#ff8134;
  letter-spacing:0;
  background:#fff;
  ::after {
  border:0!important;
}
}}.store_name {
  font-family:PingFangSC-Regular;
  font-size:1rem;
  color:#333333;
  letter-spacing:0;
  text-align:center;
  font-weight:600;
}
/*上传店铺logo样式*/
.finish_room2 {
  width:150px;
  height:150px;
  box-sizing:border-box;
  padding-top:2.5px;
  padding-bottom:2.5px;
  border-radius:50%;
  /* border:1px solid red;
  */
     position:relative;
  margin:auto;
}
.finish_room2>.room_img {
  width:140px;
  height:140px;
  position:absolute;
  top:5px;
  left:5px;
  border-radius:50%;
}
.finish_room2>.room_img>img {
  width:140px;
  height:140px;
  border-radius:50%;
}
.room_add_btn {
  width:150px;
  height:150px;
  position:absolute;
  top:0;
  left:0;
  /*border:1px solid #000;
  */
        border-radius:50%;
  padding-top:5px;
  padding-bottom:5px;
  box-sizing:border-box;
}
.room_add_btn input {
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  z-index:99999;
  opacity:0;
}
.room_opacity {
  width:150px;
  height:150px;
  position:absolute;
  top:0;
  left:0;
  background:#000;
  border-radius:50%;
  opacity:.3;
}
.room_box {
  width:150px;
  height:150px;
  position:absolute;
  top:0;
  left:0;
}
#img-change2 {
  border-radius:50%;
  border:1px solid #e7e7e7;
  width:150px;
  height:150px;
  position:absolute;
  right:0px;
  top:0;
  box-sizing:border-box;
  z-index:10;
}
.img-changeImg {
  width:40%;
  height:40%;
  margin:20px auto;
  background:url(~@/assets/img/xiangji.png) no-repeat
                        right center;
  background-size:100% 100%;
}
.img-changeText {
  font-family:PingFangSC-Regular;
  font-size:1rem;
  color:#ffffff;
  letter-spacing:0;
  text-align:center;
}
/*营业执照样式*/
   .zz_box {
  width:100%;
  height:200px;
  /*border:1px solid red;
  */
    box-sizing:border-box;
  padding:10px 15px;
}
.finish_zhizhao {
  float:right;
  width:58%;
  height:100px;
  box-sizing:border-box;
  padding-top:2.5px;
  padding-bottom:2.5px;
  /* border:1px solid red;
  */
  position:relative;
  top: 0;
}
.finish_zhizhao>.zhizhao_img {
  width:100%;
  height:95px;
  position:absolute;
  top:1%;
  left:1%;
}
.finish_zhizhao>.zhizhao_img>img {
  width:99%;
  height:89px;
}
.zhizhao_add_btn {
  width:100%;
  height:95px;
  position:absolute;
  top:0;
  left:0;
  padding-top:2.5px;
  padding-bottom:2.5px;
  box-sizing:border-box;
}
.zhizhao_add_btn input {
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  z-index:99999;
  opacity:0;
}
.zhizhao_opacity {
  width:100%;
  height:95px;
  position:absolute;
  top:0;
  left:0;
  background:#000;
  opacity:.3;
}
.room_box {
  width:100%;
  height:95px;
  position:absolute;
  top:0;
  left:0;
}
#img-changeZZ {
  border:1px solid #e7e7e7;
  width:100%;
  height:95px;
  position:absolute;
  right:0px;
  top:0;
  box-sizing:border-box;
  z-index:10;
}
.img-changeImgZZ {
  width:58px;
  height:52px;
  margin:5px auto;
  background:url(~@/assets/img/xiangji.png) no-repeat
                        right center;
  background-size:100% 100%;
}
.img-changeTextZZ {
  font-family:PingFangSC-Regular;
  font-size:1rem;
  line-height:1.5rem;
  color:#ffffff;
  letter-spacing:0;
  text-align:center;
}
.zz_text {
  float:left;
  width:4.5em;
  margin-right:2em;
}
</style>
