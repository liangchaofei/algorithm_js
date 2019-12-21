/*
 * @Author: your name
 * @Date: 2019-12-21 23:35:38
 * @LastEditTime : 2019-12-21 23:36:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/6.js
 */
var arr1 = [1,2,3,4,5,6]
var arr2 = [1,2,3];

function fn(arr){
    return arr.some(item => item>4)
}

console.log(fn(arr1))   // true
console.log(fn(arr2))   // false