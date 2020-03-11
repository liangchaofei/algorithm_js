<!--
 * @Author: your name
 * @Date: 2020-03-11 22:15:06
 * @LastEditTime: 2020-03-11 22:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/05_set/README.md
 -->
## 集合
+ 数据不允许重复，无序

### 创建集合类Set
```js
    class Set{
        constructor(){
            this.items = {}
        }
    }
```
+ add(ele):向集合中添加一个元素
+ delete(ele):从集合中移除一个元素
+ has(ele):如果元素在集合中，返回true,否则返回false
+ clear():清空集合中所有元素
+ size():返回集合中元素数量
+ values():返回一个包含集合中所有值的数组

### has(ele)
```js
    has(ele){
        return Object.prototype.hasOwnProperty.call(this.items,ele)
    }
```

### add(ele)
```js
    add(ele){
        if(!this.has(ele)){
            this.items[ele] = ele;
            return true;
        }
        return false;
    }
```

### delete(ele)
```js
    delete(ele){
        if(this.has(ele)){
            delete this.items[ele]
            return true;
        }
        return false;
    }
```

### clear()
```js
    clear(){
        this.items = {}
    }
```

### size()
```js
    size(){
        return Object.keys(this.items).length;
    }
```

### values()
```js
    values(){
        return Object.values(this.items)
    }
```