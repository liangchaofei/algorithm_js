/*
 * @Author: your name
 * @Date: 2020-03-15 14:59:49
 * @LastEditTime: 2020-03-15 15:25:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /algorithm_js/06_dictionaty/01.js
 */
import { defaultToString } from '../util';

class ValuePair {
    constructor(key,val){
        this.key = key;
        this.val = val;
    }
    toString(){
        return `[${this.key}:${this.val}]`
    }
}
    class Dictionary{
        constructor(toStrFn = defaultToString){
            this.toStrFn = toStrFn; // 将key转化为字符串
            this.table = {}  // table[key] = {key,value}
        }

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
    }

    const dic = new Dictionary()
    dic.set('aa','bbb')
    console.log(dic)