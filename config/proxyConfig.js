module.exports = {
 proxy: {
    '/apis': {  //将www.exaple.com印射为/apis
      target: 'http://www.pingminjie.cn', // 接口域名
      changeOrigin: false, //是否跨域
      pathRewrite: {
        '^/apis': ''  //需要rewrite的,
      }
    }
 }
}