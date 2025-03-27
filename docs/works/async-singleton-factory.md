---
title: 异步单例工厂
description: 异步单例。适用于同步单例。
readingTime: true
tag:
 - 作品
recommend: 3
---


# 异步单例工厂

## 描述
起因：直播业务，socket链接成功后，才能处理后续逻辑，出现了多个组件都在等待socket链接成功后的情况。
目标：多地多次异步获取，获取的是同一个实例。

异步单例。适用于同步单例。


## 使用
```js
import createsSingletonFactory from "async-singleton-factory";
import { delay } from "../util";

interface RES {
    p1: number
}

const factory = createsSingletonFactory<RES>();

async function asyncInsCreator(options: unknown = {}) {
    await delay(2000 + 2000 * Math.random()).run();     
    // throw new Error("asyncInsCreator error")
    console.log("context.name", this.name);
    const result = new Object(options) as RES;
    return result;  
}

function getAsyncIns(context: unknown, options: unknown = {}) {
    return factory(asyncInsCreator, context, options);
};

(async function test() {
    const context = {
        name: "context"
    };

    const [ins1, ins2, ins3] = await Promise.all([
        getAsyncIns(context, { p1: 1 }),
        getAsyncIns(context, { p1: 2 }),
        getAsyncIns(context, { p1: 3 })
    ]);

    console.log("ins1:", ins1, ins1?.p1);
    console.log("ins1=== ins2", ins1 === ins2);
    console.log("ins2=== ins3", ins2 === ins3);
    console.log("ins3=== ins1", ins3 === ins1);
})();

// ins1=== ins2: true
// ins2=== ins3: true
// ins3=== ins1: true
```