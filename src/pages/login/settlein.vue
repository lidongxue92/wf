<template>
  <div id='accident'>
    <div class="accident_title">
        <p class="list_title">{{list.title}}</p>
        <p class="list_desc">{{list.desc}}</p>
    </div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right" id="form_box">
      <x-input title="店铺名称" v-model="value1" placeholder="必填"></x-input>
      <x-input title="负责人" v-model="value1" placeholder="必填"></x-input>
      <datetime title="申请时间" v-model="time1" value-text-align="left" ></datetime>
      <x-input title="联系电话" type="number" placeholder="必填" v-model="value4"></x-input>
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
      <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
    </group>
       <div class="wrapper license">
         <span style="display:block;width: 4.5em;text-align: right;margin-right: 2em;">营业执照</span><form id="addTextForm" @change="setImg($event)">
          </form><div id="img-wrapper" @click="deleteImg($event)"></div>
      </div>
     <!--  <P class="btn-wrapper">
          <button type="primary" @click="submit()">提交</button>
      </P> -->
     <box gap="10px 10px">
        <x-button class="apply_btn">立即申请</x-button>
        <x-button show-loading  style="display:none;">立即申请</x-button>
        <x-button class="set_login_btn">立即登录</x-button>
      </box>
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
    name: 'accident',
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
    methods: {
        onImgError (item, $event) {
            console.log(item, $event)
        },
         //根据点击上传按钮触发input
        change_input(){
            let inputArr=$('#addTextForm input');
            let add_inputId='';     //需要被触发的input
            for(let i=0;i<inputArr.length;i++){
                // 根据input的value值判断是否已经选择文件
              if(!inputArr[i].value){          //如果没有选择,获得这个input的ID
                 add_inputId=inputArr[i].id;
                 break;
              }
            }
            if(add_inputId){                   //如果需要被触发的input ID存在,将对应的input触发
              return  $("#"+add_inputId).click();
            }else{
              alert("最多选择"+this.imgNum+"张图片")
            }
        },
        //当input选择了图片的时候触发,将获得的src赋值到相对应的img
        setImg(e){
            let target=e.target;
            $('#img_'+target.id).attr('src',getFileUrl(e.srcElement));
        },
        //点击图片删除该图片并清除相对的input
        deleteImg(e){
            let target=e.target;
            let inputID='';       //需要清除value的input
            if(target.nodeName=='IMG'){
              target.src='';
              inputID=target.id.replace('img_','');    //获得需要清除value的input
              $('input#'+inputID).val("");
            }
        },
        //提交信息到后台
        submit(){
            $("#addTextForm").ajaxSubmit({
                 url: this.$root.api+"/Index/staff_accident/add",
                 type: "post",
                 data: {
                          'total_price':this.price,
                          'descript':this.descript,
                      },
                 success:  (data) => {
                      if(data.code==0){
                        console.log('提交成功');
                         $("#addTextForm input").val('');

                           $('div#img-wrapper img').attr('src','');
                     }else{
                          alert('提交失败');
                       }
                  }
            });
        }
    },
    data () {
      return {
        addressData: ChinaAddressData,
        addressValue: ['陕西省', '西安市', '长安区'],
        value1: '',
        value3: '',
        value7: '',
        value8: '',
        value4: '',
        time1: '2017-06-01',
        numberValue: 0,
        imgNum:1,    //上传的照片数量，可根据实际情况自定义
        type: '1',
        list: {
          title: '商家申请入驻',
          desc: '成功入驻店家圈，即可开启线上引客之路。',
        },
      }
    },
    //页面加载后执行
    mounted(){
      for(let i=0;i<this.imgNum;i++){
       //生成input框，默认为1
      let my_input = $('<input type="file" name="image" style="width:100%;height:100%;"/>');   //创建一个input
      my_input.attr('id',i);                           //为创建的input添加id
      $('#addTextForm').append(my_input);                     //将生成的input追加到指定的form
      //生成img，默认为1
      let my_img = $('<img src="src/assets/img/shangchuan.jpg">');
      my_img.attr('id', 'img_'+i);
      my_img.css({"width":"100%","height":"100%"});   //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
      $('#img-wrapper').append(my_img);
      }
    }
  }
</script>
<style scoped lang="less">
@import '~vux/src/styles/center.less';
  #accident {
  padding:30px 21px 50px 21px;
  .weui-panel:before,.weui-panel:after {
  border:0;
}
.accident_title {
  width:100%;
  .list_title {
  font-family:PingFangSC-Semibold;
  font-size:1.3rem;
  color:#333333;
  letter-spacing:0;
  font-weight:600;
}
.list_desc {
  font-family:PingFangSC-Regular;
  font-size:0.8rem;
  color:#999999;
  letter-spacing:0;
}
}.apply_btn {
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
}.license {
  border-bottom:1px solid #D9D9D9;
  padding:10px 15px;
  min-height:150px;
  position:relative;
  #addTextForm {
  border:1px solid #e7e7e7;
  width:60%;
  height:150px;
  position:absolute;
  right:15px;
  top:10px;
  z-index:100;
  opacity:0;
}
#img-wrapper {
  border:1px solid #e7e7e7;
  width:60%;
  height:150px;
  position:absolute;
  right:15px;
  top:10px;
  box-sizing:border-box;
  padding:20px;
  /*        background:url(~@/assets/img/shangchuan.jpg);
  background-size:80% 80%;
  background-position:center;
  background-repeat:no-repeat;
  */
}
}}.weui-media-box__title {
  font-weight:400;
  font-size:32px!important;
  width:auto;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  word-wrap:break-word;
  word-break:break-all;
}

</style>
