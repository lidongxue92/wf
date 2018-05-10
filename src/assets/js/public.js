import  wxConfig from '../js/config'

export function newNonce() {
  let min = parseInt(Math.random() * 10);
  let max = min + 12;
  return Math.random().toString(36).substring(min, max)
}

// 在下面替换不同的环境:
// 1. DEVELOP(develop.yueneng.pro)，本地开发环境；
// 2. YXS(yxs.yueneng.pro)，上线测试环境；
// 3. SY(sy.yueneng.pro)，正式上线运营环境。
// 4. test Test

window.ENV = "DEVELOP";

let URL, wsURL, appId;

if (window.ENV !== "undefined") {

  switch (window.ENV) {

    case "DEVELOP":
        URL = wxConfig.developUrl;
      wsURL = wxConfig.developWsUrl;
      appId = wxConfig.developAppId;
      break;

    default:
        URL = `errorEnv`;
      wsURL = `errorEnv`;
      appId = '0x0000';
      break;
  }
}

export {URL, wsURL, appId}

