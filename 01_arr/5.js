/*
 * @Author: your name
 * @Date: 2019-12-21 23:30:13
 * @LastEditTime : 2019-12-21 23:33:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/5.js
 */
// every

var arr1 = [1,2,3,4,5]
var arr2 = [2,4,6]
function isEven(arr){
    return arr.every(item => item % 2 ===0);
}


console.log('isEven',isEven(arr1)) // false
console.log('isEven',isEven(arr2)) // true