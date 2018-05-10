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
    <group label-width="4.5em" label-margin-right="2em" label-align="right" id="form_box">
      <x-input title="店铺名称" :value="value1" disabled></x-input>
      <x-input title="所属品牌" :value="value2" disabled></x-input>
      <x-input title="公司模式" :value="value3" disabled></x-input>
      <x-textarea title="店铺地址" :show-counter="false" :rows="3" :value="value4" disabled></x-textarea>
      <x-input title="负责人" :value="value5" disabled></x-input>
      <x-input title="联系电话" type="number" :value="value6" disabled></x-input>
      <x-textarea title="店铺介绍" :value="value7" :show-counter="false" :rows="3" disabled></x-textarea>
    </group>

    <!-- 营业执照 -->
    <div class="zz_box">
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
    </div>

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
  padding:35px 21px;
  .weui-panel:before,.weui-panel:after {
  border:0;
}
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
  text-align:right;
  margin-right:2em;
}
</style>
