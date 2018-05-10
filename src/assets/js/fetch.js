/**
 *
 * 用于发送请求的函数
 */

import axios from 'axios'
import * as myPub from './public'

export default (type = 'GET', url = '', data = {}) => {
  type = type.toUpperCase();
  url = myPub.URL + url; // 提示： 这里的url填相对路径

  if (type === 'GET' || type === "DELETE" || type === "PAY") {
    let dataStr = ''; //数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')); // 去掉最后一个&
      url = url + '?' + dataStr; // 加上 ？ 号
    }
  }

  if (type === "GET") {
    return axios.get(url); // return Promise 对象
  }

  if (type === 'POST') {
    return axios.post(url, data);
  }

  if (type === "DELETE") {
    return axios.delete(url);
  }

  if(type === "PAY"){
    return axios.post(url); // 该type只用于微信支付 post+urlParams
  }

}

