## 队列
### 特性
+ 先进先出
+ 在尾部添加新元素，从顶部移除元素

### 创建队列
#### 声明类
```js
    class Queue {
        constructor(){
            this.count = 0; // 队列的大小
            this.lowestCount = 0; // 追踪队列第一个元素
            this.items = {} // 队列数据结构
        }
    }
```
#### 给队列声明方法
+ enqueue(ele):向队列尾部添加新元素
+ dequeue():移除队列的第一项,并返回被移除的元素
+ peek():返回队列中第一个元素
+ isEmpty():队列中不包含任何元素，返回true，否则返回false
+ size():返回队列包含的元素个数
```js
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
```

#### 队列应用：循环队列-击鼓传花游戏
```js
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


function hotPotato(eleList,num){
    const queue = new Queue() // 声明一个队列
    const eleList = []; 
    
    for(let i = 0;i<eleList.length;i++){
        queue.enqueue(eleList[i]) // 把人名单依次添加到队列中
    }

    while(queue.size()>1){ // 队列中有人了
        for(let i = 0 ;i<num;i++){
            queue.enqueue(queue.dequeue()) // 依次传递，把最后一个添加到第一个，
        }
        eleList.push(queue.dequeue()) // 把淘汰的人添加到新数组中
    }

    return{
        eleminated:eleList,
        winner:queue.dequeue() // 剩下的队列中最后一个人
    }
}
```