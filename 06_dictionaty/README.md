<!--
 * @Author: your name
 * @Date: 2020-03-15 14:56:59
 * @LastEditTime: 2020-03-15 15:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/06_dictionaty/README.md
 -->
## 字典
+ 数据结构：[key,val]

### 创建字典类
```js
    import { defaultToString } from '../util';

    class Dictionary{
        constructor(toStrFn = defaultToString){
            this.toStrFn = toStrFn
        }
    }
```

### 字典一些方法
+ set(key,val) 向字段中添加元素，如果key已经存在，则已存在的val会被覆盖
+ hasKey(key) 如果key存在字典中，返回true,否则返回false
+ remove(key) 删除指定的健值对
+ clear() 删除该字典中所有的值
+ size() 返回字典所包含值的数量
+ isEmpty() 字典值的数量为0返回true，否则返回false
+ keys() 将字典所包含的所有健名以数组形式返回
+ values() 将字典所包含的所有值以数组形式返回
+ keyValues() 将字典中所有[key,val]对返回
+ forEach(cbFn) 迭代字典中所有的健值对.cbFn有两个参数，key和val。该方法在回调函数返回false时被终止

### 实现
```js
    hasKey(key){
            return this.table[this.toStrFn(key)] !== null;
        }

        set(key,val){
            if(key !==null && val!== null){
                const tableKey = this.toStrFn(key);
                this.table[tableKey] = new ValuePair(key,val)
                return true;
            }
            return false;
        }

        remove(key){
            if(this.hasKey(key)){
                delete this.table[this.toStrFn(key)]
                return true;
            }
            return false;
        }

        get(key){
            const valPair = this.table[this.toStrFn(key)]
            return valPair == null ? undefined : valPair.val;
        }


        keyValues(){
            const valPairs = [];
            for(const k in this.table){
                if(this.hasKey(key)){
                    valPairs.push(this.table[k])
                }

            }
            return valPairs;
        }

        keys(){
            return this.keyValues.map(valPair => valPair.key)
        }

        values(){
            return this.keyValues.map(valPair => valPair.val)
        }

        size(){
            return Object.keys(this.table).length;
        }

        isEmpty(){
            return this.size() === 0;
        }

        clear(){
            this.table = {}
        }
```

