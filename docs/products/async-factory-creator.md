---
title: 异步单例工厂
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
import asyncFactoryCreator from "../index";
import { delay } from "../util";

interface RES {
    p1: number
}

const factory = asyncFactoryCreator<RES>();


async function asyncInsCreator(opitons: unknown = {}) {
    await delay(2000).run();        
    // throw new Error("asyncInsCreator error")
    console.log("context.name", this.name);
    const result = new Object(opitons) as RES;
    return result;  
}

function syncInsCreator(opitons: unknown = {}) { 
    // throw new Error("sync error")
    return null;  
}


function getAsyncIns(context: unknown, options: unknown = {}) {
    return factory(asyncInsCreator, context, options);
}

; (async function test() {

    try {
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
    } catch (err) {
        console.log("test err", err);
    }

})();
```