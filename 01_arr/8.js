/*
 * @Author: your name
 * @Date: 2019-12-21 23:44:34
 * @LastEditTime : 2019-12-21 23:44:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/01_数组/8.js
 */
var arr = [1,2,3]
    var newarr = arr.reduce((prev,curr,index,arr) => {
        return prev+curr
    })

    console.log(newarr) //6