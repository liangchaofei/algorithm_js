/*
 * @Author: your name
 * @Date: 2019-12-21 23:11:23
 * @LastEditTime : 2019-12-21 23:16:52
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/1.js
 */
var arr = [1,2,3,4,5,6];

var newarr = arr.splice(2,2);
console.log(arr) // [1,2,5,6]
console.log(newarr) // [3,4]