---
title: 通用的对象和数组合并
description: 不问属性路径深浅，支持顺序倒叙遍历，支持属性映射的高效数据合并方案。
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
```typescript
import { mergeArrayByKey } from "merge-data-js";

const symbolUid = Symbol.for("uid");
const users = Array.from({ length: 1 }, (val, index) => {
    return {
        deepKey: {
            uid: `${index + 1}`,
        },
        index: index,
        name: `user-name-${index}`,
        age: index + 10,
        avatar: `http://www.avatar.com/${index + 1}`
    }
});

const scores = Array.from({ length: 2 }, (val, index) => {
    return {
        deepKey: {
            [symbolUid]: `${index}`,
        },
        index: index,
        score: ~~(Math.random() * 10000),
        comments: ~~(Math.random() * 10000),
        stars: ~~(Math.random() * 1000)
    }
});

const result = mergeArrayByKey(users, scores, {
    sourceKey: ["deepKey", symbolUid],
    targetKey: "deepKey.uid",
    enableLog: false,
    newItem: false,
    sourceKeyMapping: {
        "score": "data.score",
        "comments": "data.comments",
        "stars": "data.stars"
    }
});

console.log("result:", result);

// 输出：
// result: [
//   {
//     deepKey: { uid: '1' },
//     index: 0,
//     name: 'user-name-0',
//     age: 10,
//     avatar: 'http://www.avatar.com/1',
//     data: { score: 5060, comments: 5092, stars: 573 }
//   }
// ]

```