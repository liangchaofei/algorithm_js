/*
 * @Author: your name
 * @Date: 2019-12-21 23:20:19
 * @LastEditTime : 2019-12-21 23:21:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/3.js
 */
var arr = [1,2,3,4,5,6]
var newarr = arr.splice(2,1,1,2,3)
console.log(arr)    // [1,2,3,4,5,6]
console.log(newarr) // [3]