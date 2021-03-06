/*
 * @Author: your name
 * @Date: 2019-12-22 22:16:22
 * @LastEditTime : 2019-12-22 22:38:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edite
 * @FilePath: /algorithm_js/03_queue/01.js
 */
class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {}
    }
    
    enqueue(ele){
        this.item[this.count] = ele;
        this.count++
    }
    dequeue(){
     if(this.isEmpty()){
         return undefined;
     }   

     var result = this.item[this.lowestCount]; // 获取队列第一个元素

     delete this.items[this.lowestCount] // 删除队列第一个元素
     this.lowestCount++ 

     return result;  // 返回删除的第一个元素
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount]
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }

    
}