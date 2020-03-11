<!--
 * @Author: your name
 * @Date: 2020-03-03 22:04:12
 * @LastEditTime: 2020-03-03 22:57:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/04_linklist/README.md
 -->
## 链表
### 特性
+ 每个元素由一个存储元素本身的节点和一个指向下一个元素的引用
+ 需要添加和删除很多元素的时候，最好选择是链表，而非数组。

### 创建链表
```js   
     class LinkList{
        constructor(eauqlsFn = defaultEquals){
            this.count = 0;
            this.head = undefined;
            this.eauqlsFn = eauqlsFn;
        }
    }
```

### 声明方法
+ push(ele) 向链表尾部添加一个元素
+ insert(ele,pos) 向链表的特定位置插入一个新元素
+ getElement(index) 返回链表中特定位置的元素，如果没有，则返回undefined
+ remove(ele) 删除链表中的元素
+ indexOf(ele) 返回元素在链表中的索引。没有的话，返回-1
+ removeAt(pos) 从链表特定位置删除一个元素
+ isEmpty() 链表中没有元素，返回true，否则返回false
+ size() 返回链表中的元素个数

### 实现一个链表
```js
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
```