/*
 * @Author: your name
 * @Date: 2019-12-21 23:56:43
 * @LastEditTime : 2019-12-21 23:58:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/10.js
 */
var arr = [1,2,3]
var newarr = Array.from(arr,x=>x%2===0)
console.log(newarr) // [false,true,false]