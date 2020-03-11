/*
 * @Author: your name
 * @Date: 2020-03-03 22:04:18
 * @LastEditTime: 2020-03-03 22:53:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/04_linklist/01.js
 */


 class LinkList{
     constructor(eauqlsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.eauqlsFn = eauqlsFn;
     }

     // 向链表尾部添加元素
     // 链表为空 或者 不为空
     push(ele){
         const node = new Node(ele);
         let current;
         if(this.head = null){
             this.head = node;
         }else{
             current = this.head;
             while(current.next !== null){
                 current = current.next;
             }
             current.next = node;
         }
         this.count++
     }

     // 从链表中移除元素
     // 移除第一个元素 或者 移除 第一个元素之外的元素
     removeAt(index){
         // 检查边界值
         if(index >=0 && index<this.count){
            let current = this.head;
            // 移除第一项
            if(index === 0){
                this.head = current.next;
            }else{
                let previous;
                for(let i = 0;i<index;i++){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.count--;
            return current.ele;
         }
         return undefined;
     }

     // 获取特定位置的元素
     getElementAt(index){
         if(index >=0 && index<this.count){
            let node = this.head;
            for(let i = 0;i<index && node !==null;i++){
                node = node.next;
            }
            return node;
         }
         return undefined;
     }

     // 在任意位置插入元素
     insert(ele,index){
         if(index>=0 && index<this.count){
             const node = new Node(ele)
             if(index ===0 ){
                 const current = this.head;
                 node.next = current;
                 this.head = node;
             }else{
                 const previous = this.getElementAt(index - 1);
                 const current = previous.next;

                 node.next = current;

                 previous.next = node;
             }
             this.count++;
             return true;
         }
         return undefined;
     }

     // 返回一个元素的索引
     indexOf(ele){
         let current = this.head;
         for(let i = 0;i<this.count && current !== null;i++){
             if(this.eauqlsFn(ele,current.ele)){
                 return i;
             }
             current = current.next;
         }
         return -1;
     }

     // 从链表中移除元素
     remove(ele){
         const index = this.indexOf(ele)
         return this.removeAt(index)
     }

     isEmpty(){
         return this.size === 0;
     }
     size(){
         return this.count;
     }
 }