/**
 * 放置公用的方法
 */
import Vue from 'vue'
import {WechatPlugin} from 'vux'
import {appId} from '../../assets/js/public'
import html2canvas from 'html2canvas'

Vue.use(WechatPlugin);

import  fetch from './fetch.js'

// 拿到二维码的数据
const getQRCode = (url, data) => {
  return fetch('GET', url, data);
};

// 使用async进行异步处理
const asyncReq = (fn) => {
  (async() => {

    try {
      let res = await fn();

      return new Promise((resolved) => {
        resolved(res.data.data); // 返回Promise对象 提示： 直接是拿到的数据域
      });
    }
    catch (err) {
      return new Promise((resolved, reject) => {
        reject(err); // 返回错误的原因
      });
    }
  })()
}; // 提示：该方法暂时废置

// 查询进入权限
const queryPermission = () => {
  window.console.log("查询权限")
};

// 分享接口配置
const shareConfig = () => {
  Vue.wechat.onMenuShareTimeline({
    title: '阅能书院', // 分享标题
    desc: '阅能，你的能力加油站！', // 分享描述
    link: `${myPub.URL}/wechat/check`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: `http://sy-yueneng.oss-cn-qingdao.aliyuncs.com/share_pic/introLogo.png`, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      window.console.log('share success')
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  Vue.wechat.onMenuShareAppMessage({
    title: '阅能书院', // 分享标题
    desc: '阅能，你的能力加油站！', // 分享描述
    link: `${myPub.URL}/wechat/check`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: `http://sy-yueneng.oss-cn-qingdao.aliyuncs.com/share_pic/introLogo.png`, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: null, // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
      window.console.log('share success')
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  Vue.wechat.onMenuShareQQ({
    title: '阅能书院', // 分享标题
    desc: '阅能，你的能力加油站！', // 分享描述
    link: `${myPub.URL}/wechat/check`, // 分享链接
    imgUrl: `http://sy-yueneng.oss-cn-qingdao.aliyuncs.com/share_pic/introLogo.png`, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      window.console.log('share success')
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  Vue.wechat.onMenuShareWeibo({
    title: '阅能书院', // 分享标题
    desc: '阅能，你的能力加油站！', // 分享描述
    link: `${myPub.URL}/wechat/check`, // 分享链接
    imgUrl: `http://sy-yueneng.oss-cn-qingdao.aliyuncs.com/share_pic/introLogo.png`, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      window.console.log('share success')
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  Vue.wechat.onMenuShareQZone({
    title: '阅能书院', // 分享标题
    desc: '阅能，你的能力加油站！', // 分享描述
    link: `${myPub.URL}/wechat/check`, // 分享链接
    imgUrl: `http://sy-yueneng.oss-cn-qingdao.aliyuncs.com/share_pic/introLogo.png`, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
      window.console.log('share success');
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
};

// canvas转base64
const canvas2img = (canvas) => {
  return canvas.toDataURL("image/png");
};

//image 转 canvas base64
const imgToCanvas = (img) => {
  // alert('get 2')
  let canvas = document.createElement("canvas");
  // console.log(img.width);
  // console.log(img.height)
  if (img.width === 80 && img.height === 80) {
    canvas.width = 400;
    canvas.height = 400;
  } else {
    canvas.width = 400;
    canvas.height = 300;
  }

  // alert('get 3');
  canvas.getContext("2d").drawImage(img, 0, 0);
  // alert('get 3');
  return canvas.toDataURL('image/png');
};

//parseQueryString 解析queryString 返回key-value的JSON对象
/**
 * @author Acery
 * @param url
 * @returns key-value object
 */
const parseQueryString = (url) => {
  let params = url.split('?')[1].split("&");
  let queryStringObj = {};
  for (let item of params) {
    let temp = item.split("="); // [0]是key，1是value
    temp[1] = temp[1].split("#/")[0]; // 特异化处理
    queryStringObj[temp[0]] = temp[1]; // key取值法放入obj
  }
  return queryStringObj
};

/** 获取服务器时间
 * @author: acery
 * @param:url
 * @return Int(毫秒数)*/
const queryServerTime = (url) => {
  fetch('GET', url).then(res => {
    if (res.data.code) {
      console.log("getServerTime fail: code 1");
      window.alert(res.data.msg)
    } else {
      console.log("get sysTime0:" + res.data.data.sysTime);
      return res.data.data.sysTime;
    }
  })
};

/** 获取开学日期&学习期数
 * @author: Acery Azad
 * @param:url
 * @return */
const queryOpenDateAndTerm = (url) => {
  fetch('GET', url).then(res => {
    if (res.data.code) {
      console.log("get TermOpenDate & TermNumber fail: code 1");
      window.alert(res.data.msg)
    } else {
      console.log("get TermOpenDate & TermNumber:" + res.data.data);
      return res.data.data;
    }
  })
};


/* 毫秒时间转{yyyy:xxxx,mm:xx,dd:xx}
 * @author: acery
 * @param: time(ms)
 * @return object
 * */
const ms2Date = (msTime) => {
  let _datetime = new Date(msTime);
  return {
    y: _datetime.getFullYear(),
    m: _datetime.getMonth() + 1,
    d: _datetime.getDate()
  }
};

/* 查询用户当前获得资格的学习期数
 * Written by @Azad 2017/7/23
 * @param:url
 * @return Int(整数)*/
const queryTermNumber = (url, fn) => {
  fetch('GET', url).then(res => {
    if (res.data.code) {
      console.log("get TermNumber fail: code 1");
      window.alert(res.data.msg)
    } else {

      console.log("get sucess");
      console.log("get TermNumber:" + res.data.data.currentTerm);
      // return parseInt(res.data.data.currentTerm);
      fn(parseInt(res.data.data.currentTerm));
    }
  })
}


/**
 * 判断时间与今日的关系（明天/今天）
 * @param msTime 传进日期的毫秒表示
 * @returns {number} -2: 年月不同 -1： 课程还差很久到今天 2：课程已过时 1： 课程是明天 0： 课程是今天
 */
const judgeTime = (msTime) => {
  let _nowDate = new Date()
  let _msTime = new Date(msTime)
  let _y = _nowDate.getFullYear()
  let _m = _nowDate.getMonth() + 1
  let _d = _nowDate.getDate()
  if (_y === _msTime.getFullYear() && _m === _msTime.getMonth() + 1) {
    if (_d - _msTime.getDate() === 0) {
      return 0 // 今天
    }
    if (_d - _msTime.getDate() === -1) {
      return 1 // 明天
    }
    if (_d - _msTime.getDate() > 0) {
      return 2 // 已过时
    } else {
      return -1 // 未到
    }
  } else {
    return -2 //  年/月不相同
  }
}

/**
 *
 * @param msTime 日期的毫秒表示
 * @returns {{hour: string, minute: string}}
 */
const parseTime = (msTime) => {
  let _tempDate = new Date(msTime)
  return {
    year: _tempDate.getFullYear(),
    month: (_tempDate.getMonth() + 1 > 9) ? (_tempDate.getMonth() + 1 > 9).toString() : '0' + (_tempDate.getMonth() + 1 > 9).toString(),
    date: _tempDate.getDate() > 9 ? _tempDate.getDate().toString() : '0' + _tempDate.getDate().toString(),
    hour: _tempDate.getHours() > 9 ? _tempDate.getHours().toString() : '0' + _tempDate.getHours().toString(),

    minute: _tempDate.getMinutes() > 9 ? _tempDate.getMinutes().toString() : '0' + _tempDate.getMinutes().toString()
  }
}


/*注入微信js-sdk配置*/
const injectWXConfig = () => {
  //
  // jsapi_ticket:"kgt8ON7yVITDhtdwci0qeS2b1qGzN0WoymFYvInUKa4gd0HKHV3x0x9IJFeKoW21U4tUUy2eJwOXV5uhA-TTOQ",
  // nonceStr:"5c0ce0ec-4812-4d63-b078-d6061d90d63f",
  // signature:"b78a1972bfff400d6d4247ea7f5c4b42f6bb2669",
  // timestamp:"1503284175",
  // url:"http://sy.yueneng.pro/",
  let url = encodeURIComponent(window.location.href.split('#')[0]);
  fetch('get', `/wechat/js?url=${url}`)
  /*  Vue.http.get(`${myPub.URL}/wechat/js?url=${url}`)*/
    .then(response => {
      sessionStorage.setItem('LOGINED', true);
      Vue.wechat.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: appId,// 必填，公众号的唯一标识
        timestamp: response.data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: response.data.data.nonceStr, // 必填，生成签名的随机串
        signature: response.data.data.signature, // 必填，签名，见附录1
        jsApiList: [
          'checkJsApi',
          'chooseImage', 'previewImage', 'uploadImage', 'getLocalImgData',
        ]
      })
      Vue.wechat.ready(function () {
        Vue.wechat.checkJsApi({
          jsApiList: ['uploadImage'],
          success: function (res) {
            console.log(res)
            // window.alert(res)
          }
        })
        // window.console.log(Vue.wechat.getLocalImgData)
      })
    })

}

export {
  getQRCode,
  asyncReq,
  shareConfig,
  parseQueryString,
  queryServerTime,
  ms2Date,
  queryTermNumber,
  queryOpenDateAndTerm,
  parseTime,
  judgeTime,
  injectWXConfig
};
