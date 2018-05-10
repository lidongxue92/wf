<template>
    <div class="login"
         @keyup.enter="onLogin">
        <div class="logo-wrap">
           <div class="logo_box">
                <div class='logo_imgbox'>
                    <img src="~@/assets/logo.jpg"
                     class="app-logo">
                </div>
                <div class="m_bor">
                    <div class="m_bor_box"></div>
                </div>
                <div class='logo-app-name'>商家登录入口</div>
           </div>
        </div>
        <div class="login—prompt">成功入驻店加圈，即可开启线上引客之路</div>
        <group>
            <x-input placeholder="请输入商家用户名"
                     type="text"
                     v-model="memname">
            </x-input>
            <x-input placeholder="请输入您的手机号"
                     :max="11"
                     type="tel"
                     v-model="phoneNumber"
                     is-type="china-mobile">
            </x-input>
            <x-input type="text"
                     placeholder="请输入验证码"
                     v-model="verifyCode"
                     @on-enter="onLogin">

                      <x-button slot="right"
                          type="primary"
                          mini
                          :text="btnText"
                          :disabled="disabled"
                          @click.native="sendCode" class="verification">
                     </x-button>
            </x-input>
        </group>
        <div style="padding:15px;margin-top:30px;">
            <x-button @click.native="onLogin"
                      type="primary" class="x-button"> 登录 </x-button>
            <div class="registered"><span class="registered_span">没有账号？</span><label class="registered_label">申请入住</label></div>
        </div>
    </div>
</template>

<script>
import { XInput, Group, XButton, Cell, Toast, base64 } from 'vux'
import { mapMutations } from 'vuex'
export default {
    name: 'Login',
    data() {
        return {
            btnText: '发送验证码',
            disabled: false,
            time: 0,
            memname: '',
            phoneNumber: '',
            verifyCode: '',
            smsCode: '',
            BaseUrl: '',
            JsApiData: '',
            code_num: '',
            GetCodes: {
                //公众号的唯一标识
                AppId:"wxb7146031bd5bbc93",
                //授权后重定向的回调链接地址(填当前页)
                GetCodes:"http://weishop.lxplus.cn/wshop/#/login",
                //返回类型，请填写code
                Response_type: "code",
                //应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid）
                Scope: "snsapi_base",
                //重定向后会带上state参数，开发者可以填写a-zA-Z0-9的参数值，最多128字节
                State:"test",
                //必须带此参数
                Wechat_Redirect:"#wechat_redirect"
            }
        }
    },
    created() {},
    activated() {
        localStorage.removeItem('token')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('cartData')
        this.UPDATE_USERINFO({
            userInfo: null
        })
    },
    mounted() {
         // this.GetCode()
    },
    methods: {
        ...mapMutations(['UPDATE_USERINFO']),
        sendCode() {
            const reg = /^1[34578]\d{9}$/ // 手机号正则校验
            if (!this.phoneNumber) {
                this.$vux.toast.text('请输入手机号~', 'middle')
                return
            }
            if (!reg.test(this.phoneNumber)) {
                this.$vux.toast.text('手机号格式不正确~', 'middle')
                return
            }
            this.time = 60
            this.disabled = true
            this.timer()
            // 获取验证
            this.$http
                .post(
                    'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1/sendSms',
                    { phoneNumber: this.phoneNumber }
                )
                .then(res => {
                    let smsCode = res.data.data.verifCode
                    this.smsCode = smsCode
                    this.$vux.alert.show({
                        title: '验证码',
                        content: `验证码已发送,【${smsCode}】,10分钟有效`
                    })
                    setTimeout(() => {
                        this.$vux.alert.hide()
                    }, 3000)
                })
        },
        timer() {
            if (this.time > 0) {
                this.time--
                this.btnText = this.time + 's后重新获取'
                setTimeout(this.timer, 1000)
            } else {
                this.time = 0
                this.btnText = '获取验证码'
                this.disabled = false
            }
        },
        onLogin() {
            var reg = /^1[34578]\d{9}$/ // 手机号正则校验
            // if (!this.mename) {
            //     this.$vux.toast.text('用户名不能为空~', 'middle')
            //     return
            // }

            // if (!this.phoneNumber) {
            //     this.$vux.toast.text('手机号不能为空~', 'middle')
            //     return
            // }
            // if (!reg.test(this.phoneNumber)) {
            //     this.$vux.toast.text('手机号格式不正确~', 'middle')
            //     return
            // }
            // if (!this.verifyCode) {
            //     this.$vux.toast.text('验证码不能为空~', 'middle')
            //     return
            // }
            // if (this.verifyCode !== this.smsCode) {
            //     this.$vux.toast.text('验证码不正确~', 'middle')
            //     return
            // }
            // const { phoneNumber, verifyCode } = this
            // const data = {
            //     phoneNumber,
            //     verifyCode
            // }
            this.$http
                .post(
                    'http://weishop.lxplus.cn/index.php/api/v1/token/user',
                    data
                )
                .then(res => {
                    console.log(data)
                    // 登录成功
                    if (res.data.data.code === 0) {
                        this.$vux.toast.show({
                            text: '登录成功'
                        })
                        // 本地保存 token 和 userInfo
                        // vux 中提供的base64方法
                        // base64.encode('VUX')
                        // base64.decode('VlVY')
                        localStorage.token = base64.encode(res.data.data.token)
                        localStorage.userInfo = JSON.stringify(
                            res.data.data.userInfo
                        )
                        this.UPDATE_USERINFO({
                            userInfo: res.data.data.userInfo
                        })
                        // 重定向到首页或者登录前的页面
                        let redirect = decodeURIComponent(
                            this.$route.query.redirect || '/'
                        )
                        setTimeout(() => {
                            this.$router.push({
                                path: redirect
                            })
                        }, 2000)
                    }
                })
        },
        // 拼接获取code的地址
        ReturnGetCodeUrl() {
            return this.BaseUrl + "appid=" + this.GetCodes.AppId + "&redirect_uri="
            + this.GetCodes.GetCodes + "&response_type="
            + this.GetCodes.Response_type + "&scope=" + this.GetCodes.Scope + "&state="
            + this.GetCodes.State + this.GetCodes.Wechat_Redirect
        },
        //获取地址栏code参数
        GetQueryString(name){
            var url = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var newUrl = window.location.search.substr(1).match(url);
            if (newUrl != null) {
                return unescape(newUrl[2]);
            } else {
                return false;
            }
        },

        //获取code
        GetCode(){
            if (this.GetQueryString("code")) {
                //此时已经取到code
                console.log(this.GetQueryString("code"))
            } else {
                //重定向去微信来获取code
                 window.location = this.ReturnGetCodeUrl()
            }
        }

    },
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        Toast
    }
}
</script>

<style scoped lang="less">
.login {
    height: 100%;
    text-align: center;
    overflow: hidden;
    .logo-wrap {
        margin:50px 0 12px 0;
        height:45px;
        .logo_box{
            margin:0 auto;
            width:80%;
            height:100%;
              display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:space-between;
            .logo_imgbox{
                width:45%;
                height:100%;
                .app-logo {
                    width: 100%;
                    height: 100%;
                }
            }
            .m_bor{
                    width:auto;
                    height:100%;
                    box-sizing:border-box;
                    padding:10px;
                   /* border:1px solid #333;*/
                    .m_bor_box{
                         width:1.5px;
                        height:100%;
                        background-color: #c2c2c2;
                    }
            }
            .logo-app-name{
                width:45%;
                height: 100%;
                line-height: 45px;
                font-family:PingFangSC-Semibold;
                font-size:18px;
                font-weight:600;
                color:#333333;
                letter-spacing:0;
                text-align:left;
                vertical-align: top;
            }
        }
    }
    .login—prompt{
        font-family:PingFangSC-Regular;
        font-size:14px;
        color:#999999;
        letter-spacing:0;
        line-height: 20px;
    }
    .x-button{
        background:#ff8134;
        border-radius:2px;
    }
    .verification{
        background:#fff;
        border:1px solid #e7e7e7;
        width:90px;
        height:34px;
        color:#333;
        line-height:34px;
    }
    .registered{
        width:100%;
        margin-top:16px;
        text-align:right;
        font-family:PingFangSC-Regular;
        font-size:14px;
        color:#999999;
        letter-spacing:0;
        label{
            color:#ff8134;
        }
    }
}
</style>