
### 在任意位置添加或删除元素(splice)

+ 删除任意位置元素
```js
    // splice两个参数，代表删除元素，第一个参数表示索引，从第几个开始删除，第二个参数是要删除的个数。
    // splice 会改变原数组，返回的是删除的值组成的数组
    var arr = [1,2,3,4,5,6];
    var newarr = arr.splice(2,2);
    console.log(arr) // [1,2,5,6]
    console.log(newarr) // [3,4]
```

+ 在任意位置添加元素
```js
    // splice三个参数，第一个参数表示索引，从第几个开始添加，第二个参数是0，代表删除0个元素，剩下参数是要添加的元素。
    var arr = [1,2,3,4,5,6]
    var newarr = arr.splice(2,0,1,2,3)
    console.log(arr)  // [1,2,1,2,3,3,4,5,6]
    console.log(newarr) //[] 
```

+ 在任意位置替换元素
```js
    // splice三个参数，第一个参数表示索引，从第几个开始添加，第二个参数是要删除的个数，剩下参数是要添加的元素。达到替换元素的功能。
    
    var arr = [1,2,3,4,5,6]
    var newarr = arr.splice(2,1,1,2,3)
    console.log(arr)    // [1,2,3,4,5,6]
    console.log(newarr) // [3]
```

### 数组合并concat
```js
    // 数组合并concat
    var arr1 = [1,2,3]
    var arr2 = [4,5,6]
    var arr = arr1.concat(arr2)
    console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
```

### 迭代器函数
#### every
+ 会遍历数组中每个元素，如果每个元素都符合条件，也就是都返回true，结果为true，只要有一个为false，结果就为false
+ 不会改变原数组
+ 判断一个数组里面的元素是否都是偶数
```js
    var arr1 = [1,2,3,4,5]
    var arr2 = [2,4,6]
    
    function isEven(arr){
        return arr.every(item => item % 2 ===0);
    }
    
    console.log('isEven',isEven(arr1)) // false
    console.log('isEven',isEven(arr2)) // true
```

#### some
+ 会遍历数组中每个元素，只要数组中有1个元素符合条件，结果为true，只有数组全部都是false，结果才为false
+ 不会改变原数组
+ 判断一个数组里面的元素是否都大于4
```js
    var arr1 = [1,2,3,4,5,6]
    var arr2 = [1,2,3];
    
    function fn(arr){
        return arr.some(item => item>4)
    }
    
    console.log(fn(arr1))   // true
    console.log(fn(arr2))   // false
```

#### forEach
+ 和for 一样，循环整个数组
+ 不会改变原数组

#### map
+ 遍历整个数组，需要有返回值
+ 会改变原数组

#### filter
+ 遍历数组，返回使函数返回true的元素
```js
    var arr = [1,2,3,4,5]
    var newarr = arr.filter(item => item> 2)
    console.log(newarr) // [3,4,5]
```

#### reduce
+ 累加器，有4个参数
+ 第1个参数是每次计算的上一个结果，第2个参数是当前值，第3个参数是索引，第4个参数是原数组。第3和第4个参数可省略。
```js
    var arr = [1,2,3]
    var newarr = arr.reduce((prev,curr,index,arr) => {
        return prev+curr
    })
    console.log(newarr) //6
```

### for...of迭代
+ 循环数组中的值
```js
    var arr = [1,2,3,4,5]
    for(var n of arr){
        console.log(n%2 ===0 ? 'even':'odd')
    }
    // odd
    // even
    // odd
    // even
    // odd
```

### from方法
+ Array.from(arr)创建一个数组
```js
    var arr = [1,2,3]
    var newarr = Array.from(arr,x=>x%2===0)
    console.log(newarr) // [false,true,false]
```

### reverse反序
```js
    var arr = [1,2,3]
    var newarr = arr.reverse() // [3,2,1]
```

### sort排序
+ sort排序不能按我们想要的大小顺序排序
```js
    var arr = [1,2,3,10,11]
    var newarr = arr.sort(); // [1,10,11,2,3]
```
+ 需要手动添加函数判断
```js
    var arr = [1,2,3,10,11]
    var newarr = arr.sort((a,b) => a-b); // [1,2,3,10,11]
```

### indexOf和lastIndexOf
+ indexOf：返回与参数匹配的第一个元素的索引
+ lastIndexOf:返回与参数匹配的最后一个元素的索引

### find和findIndex
+ find：返回数组中满足条件的第一个元素，如果没有，则返回undefined
+ findIndex：返回数组中满足条件的第一个元素的索引，如果没有，返回-1
```js
    var arr = [1,2,3,4,5,6]
    var it = arr.find(item => item>3)
    var indexVal = arr.findIndex(item => item>3)
    console.log(it) //4 
    console.log(indexVal) //3
```

### includes
+ 如果数组存在某个元素，includes方法返回true，否则返回false
```js
    var arr = [1,2,3,4,5]
    var a = arr.includes(1)
    var b = arr.includes(8)
    console.log(a) // true
    console.log(b)  // false
```