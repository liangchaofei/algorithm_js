/*
 * @Author: your name
 * @Date: 2019-12-22 00:34:08
 * @LastEditTime : 2019-12-22 00:41:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Editcons
 * @FilePath: /algorithm_js/02_stack/01.js
 */
// 创建一个基于数组的栈

class Stack {
   constructor(){
       this.item = [];
       
   } 
   push(ele){
    this.item.push(ele)
   }

   pop(){
       this.item.pop()
   }

   peek(){
       return this.item[this.item.length-1]
   }

   isEmpty(){
       return this.item.length === 0;
   }

   clear(){
       this.item.length = 0;
   }

   size(){
       return this.item.length;
   }
}