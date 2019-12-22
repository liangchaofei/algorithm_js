/*
 * @Author: your name
 * @Date: 2019-12-22 00:44:31
 * @LastEditTime : 2019-12-22 00:50:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit {}
 * @FilePath: /algorithm_js/02_stack/02.js
 */
class Stack {
    constructor(){
        this.count = 0;
        this.item = {}
    }

    // 向栈中添加元素
    push(ele){
        this.item[this.count] = ele;
        this.count++
    }
    
    size(){
        return this.count;
    }

    isEmpty(){
        return this.count ===0;
    }

    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        var res = this.item[this.count]

        delete this.item[this.count]

        return res;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.item[this.count -1 ]
    }
    
    clear(){
        this.item = {}
        this.count = 0
    }
}

