/*
* 用node 来测试方法是否正确： node testMethods.js
* */

/* 测试什么时候是undefined 什么时候是 'undefined'
*  结果如下
*  a === undefined  true
*  typeof a === 'undefined' true
 */
let a ;
if(typeof a === 'undefined'){
  console.log('get!')
}

