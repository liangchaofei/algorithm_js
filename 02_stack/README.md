### 栈
+ 先进后出，新添加的元素在栈顶

### 创建一个基于数组的栈
```js
    class Stack{
        constructor(){
            this.item = []
        }
    }
```
### 为栈声明一些方法
+ push(ele):添加一个新元素到栈顶
+ pop()：移除栈顶元素，同时返回被删除的元素
+ peek()：返回栈顶的元素
+ isEmpty()：判断栈是否为空，为空返回true,反之返回false
+ clear()：清除栈所有元素
+ size()：返回栈里的元素个数

```js
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
```

### 创建一个基于js对象的栈
```js
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
```

### 栈的应用：十进制转二进制
```js
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
            binaryString += rem.pop().toString()
        }
    
        return binaryString;
    }
```