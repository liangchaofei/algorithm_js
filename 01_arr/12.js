/*
 * @Author: your name
 * @Date: 2019-12-22 00:06:48
 * @LastEditTime : 2019-12-22 00:08:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit>3
 * @FilePath: /algorithm_js/01_数组/12.js
 */
var arr = [1,2,3,4,5,6]

var it = arr.find(item => item>3)
var indexVal = arr.findIndex(item => item>3)
console.log(it) //4 
 console.log(indexVal) //3