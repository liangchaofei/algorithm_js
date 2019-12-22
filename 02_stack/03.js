/*
 * @Author: your name
 * @Date: 2019-12-22 00:54:29
 * @LastEditTime : 2019-12-22 00:57:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/02_stack/03.js
 */
function fn(decNumber){
    var stack = new Stack();
    var num = decNumber;
    var rem;
    var binaryString = '';

    while(num>0){
        var rem = Math.floor(num % 2);
        stack.push(rem)
        num = Math.floor(num / 2)
    }

    if(!stack.isEmpty()){
        binaryString = rem.pop().toString()
    }

    return binaryString;
}