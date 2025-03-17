---
title: 高效数组合并
description: 不问属性路径深浅，顺序遍历，倒叙遍历都支持，高效合并数据方案。
readingTime: true
tag:
 - 作品
recommend: 3
---

# 高效数组合并


## 描述
* 起因: 服务端丢给前端2份数据，需要前端根据某种条件进行数据合并。离谱，问就是历史问题，改动成本大。
* 目标：通用数组合并，高效，适用性强。
不问属性路径深浅，顺序遍历，倒叙遍历都支持，高效合并数据方案。

## 示例
```js
import  * as  array from "../index";

const  { mergeArray} = array;

var arr1 = [{
    p1:1,
    key: 10
}];

var arr2 = [{
    key2: 10,
    p2:2
}]

var arr = mergeArray(arr1, arr2, {
    sourceKey: "key2",
    targetKey: "key",
});


console.log("arr", arr);
```
