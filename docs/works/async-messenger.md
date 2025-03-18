---
description: 异步通讯通用方案，异步回调转Promise通用方案。支持EventEmitter, MQTT, socket.io, iframe， webview等等场景。
title: 异步消息中心
readingTime: true
tag:
 - 作品
recommend: 3
---

# [async-messenger-js](https://github.com/xiangwenhu/asyncMessager)

## 描述
 * 起因：与移动端宿主通讯基于回调，当有顺序逻辑时，处理起来不方便。与PC端宿主通训，socket通讯存在类似问题。
 * 目标：把基于回调的通讯转为Promise，实现流式控制。并兼容三种请求响应模式：有发有有回，只发不回，只回不发（被动监听）。

 异步通讯通用方案，异步回调转Promise通用方案。支持EventEmitter, MQTT, socket.io, iframe， webview等等场景。

## 特性
传统基于事件通信转Promise通用方案。支持
* EventEmitter 类别
* MQTT, socket.io
* iframe
* webview
* 等等场景。

## 安装
```cmd
npm install async-messenger-js
```

## 流程和原理图
![流程和原理图](https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-process.png)


## 源码结构说明
```
    src
        decorator
            index.ts             监听装饰器
        utils
            index                工具方法
            function             函数相关的工具方法
        BaseAsyncMessenger.ts    核心，基础异步消息处理类，包含：流程控制，主动的Promise类型的通讯
        DataStore                数据存储
        index.ts                 入口文件
        PEventMessenger.ts       消息中心，BaseAsyncMessenger继承于他，处理被动的消息。
        types.ts                 类型定义
```


## 示例代码
[示例代码源码地址](./demos)


### EventEmitter


events.js
```js
import EventEmitter from "events";
import { BaseReqData } from "async-messenger-js"

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit('message', {
        method: 'continuous-event',
        data: new Date().toLocaleTimeString()
    })
}, 3000)


emitter.on("message-request", (data: BaseReqData) => {

    // 单向的，不回发消息
    if (data.method === "oneway") {
        return;
    }

    setTimeout(() => {
        emitter.emit("message", {
            method: data.method,
            data: `${data.method}--- data`
        })
    }, 3000)

})


export default emitter;
```

messenger.js
```js
import { BaseAsyncMessenger, BaseReqData, GlobalReqOptions } from "async-messenger-js";
import emitter from "./events";

type RequestData  = BaseReqData;
type ResponseData = RequestData;

class EmitterAsyncMessenger extends BaseAsyncMessenger {
    constructor(options: GlobalReqOptions = {}) {
        super(options);
    }

    override subscribe() {
        console.log("WebViewBridge: subscribe");
        emitter.on("message", this.onMessage);
        return () => {
            emitter.off("message", this.onMessage);
        }
    }

    protected request(data: RequestData) {
        emitter.emit("message-request", data);
    }
}

export default new EmitterAsyncMessenger();
```


index.js
```js
import messenger from "./messenger";

asyncMessenger.activate();


messenger.invoke({
    method: "cccc",
    data: 111
}).then(res => console.log("res:", res))


messenger.invoke({
    method: "oneway",
    data: 111
}, {
    sendOnly: true,
}).then(res => console.log("oneway request res:", res))


messenger.addListener("continuous-event", function onEvent(data) {
    console.log("continuous-event:", data);
})


```

### iframe

```html
    <iframe src="./iframe1.html" id="ifr"></iframe>
    <script src="../../dist/umd/asyncMessenger.js"></script>
    <script>

        function sendMessage(msg) {
            iframe1.contentWindow.postMessage(msg)
        }
        const iframe1 = document.getElementById("ifr");

        const asyncMessenger = new AsyncMessenger.BaseAsyncMessenger({
            // logUnhandledEvent: false,
            subscribe(onMessage) {
                function onIframeMessage(msg) {
                    onMessage(msg.data);
                }
                window.addEventListener("message", onIframeMessage);
                return () => {
                    window.removeEventListener("message", onIframeMessage);
                }
            },
            request(data, key) {
                sendMessage(data);
            }
        });

        asyncMessenger.activate();

        iframe1.contentWindow.onload = () => {
            // 异步Promise调用
            asyncMessenger.invoke({
                method: "init",
                data: {
                    user: 123456,
                    token: "blabla......"
                }
            }).then(res => console.log("index.html:", res, res))
        }
        // 传统的回调调用
        asyncMessenger.addListener("timeInfo", function(data){
            console.log("index.html:timeInfo", data);
        })


    </script>
```

## socket.io

不到20行代码，就实现了异步编程。

```js
const socket = io("http://localhost:3000");

function sendMessage(msg) {
    socket.emit("message", msg)
}

const asyncMessenger = new AsyncMessenger.BaseAsyncMessenger({
    // logUnhandledEvent: false,
    subscribe(onMessage) {
        function onSocketMessage(msg) {
            onMessage(msg);
        }
        socket.on("message", onSocketMessage);
        return () => {
            socket.off("message", onSocketMessage);
        }
    },    
    request(data, key) {
        sendMessage(data);
    }
});
asyncMessenger.activate();
socket.on("connect", () => {
    console.log("connect")
    asyncMessenger.invoke({
        method: "getUsers",
        data: {
            user: 123456,
            token: "blabla......"
        }
    }).then(res => console.log("index.html:", res, res))
});

asyncMessenger.addListener("timeInfo", function (data) {
    console.log("index.html:timeInfo", data);
});

```
