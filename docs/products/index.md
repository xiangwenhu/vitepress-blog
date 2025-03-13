---
description:  网站，工具，插件，想法等等
title: 作品集
readingTime: true
tag:
 - 作品
recommend: 3 
---

# 作品集

## 系统

###  活动系统 - 蕤 
  * 起因：H5活动开发体验不好，且效率低，例如：缺乏配置中心，组件复用不便，开发调试不友好，每次需要编写服务请求，需要手动从蓝湖下载图片然后压缩等等等等。
  * 目标：提供配置中心以及和mock预览中心，通过插件各种辅助能力提升开发效率。
  * 架构图:     
   ![](./assets/images/tasse.png)

###  [旅行者](https://github.com/xiangwenhu/traveler)    
  * 起因：时光荏苒人易老，往事如烟梦已遐。 莫叹浮生多苦短，且将旅行趁年华。 
  * 目标：记录每次旅行，通过图片，视频等记录足迹，提供演示能力，通过报表知道旅行概况，接入在线剪辑能力，快速生成精彩集锦。 
  * 演示：http://8.140.247.208/    
  * 动画效果:          
   ![](./assets/images/travel.gif)



## 方案

### [petal-service](https://github.com/xiangwenhu/petal-service) 服务框架   
  * 起因：服务散落在 "人间" ，复用性差。
  * 目标："中央集权"，模块化，增加复用性。额外提供统计，路径参数，最终参数获取等能力。
  * 示例：https://github.com/xiangwenhu/petal-service-test
  * 描述：基于装饰器的服务框架，开箱即用，支持扩展，服务编写利器，前后端均支持。
  * 存储结构图:    
  ![](https://github.com/xiangwenhu/petal-service/blob/master/docs/petal-service-design-v2.png?raw=true);

### [asyncMessenger](https://github.com/xiangwenhu/asyncMessenger) 异步中心  
  * 起因：与移动端宿主通讯基于回调，当有顺序逻辑时，处理起来不方便。与PC端宿主通训，socket通讯存在类似问题。
  * 目标：把基于回调的通讯转为Promise，实现流式控制。并兼容三种请求响应模式：有发有有回，只发不回，只回不发（被动监听）。
  * 示例：https://github.com/xiangwenhu/asyncMessager-demos/tree/main/demos
  * 描述：异步通讯通用方案，异步回调转Promise通用方案。支持EventEmitter, MQTT, socket.io, iframe， webview等等场景。
  * 通讯逻辑图：    
  ![](https://github.com/xiangwenhu/asyncMessager/blob/master/docs/images/process.png?raw=true)

### [sandcastle](https://github.com/xiangwenhu/sandcastle)  沙丘流程控制
  * 起因：爬网程序写了几个，有点烦，基于配置行不行？
  * 目标：基于配置实现流程控制。一切都是 Activity，可自行扩展。
  * 演示：http://8.140.247.208:8081/clientCS/
  * 描述：沙粒虽小，积多成丘。
  * 动画效果：     
  ![](./assets/images/sandcastle.gif)


### [rloader](https://github.com/xiangwenhu/rloader)  资源缓存 
  * 起因：产品和测试说：lottie 特效和 [vap](https://github.com/Tencent/vap) 特效，启动慢。
  * 目标：缓存资源，快速启动。支持依赖和版本更新。
  * 演示: https://xiangwenhu.github.io/rloader
  * 描述：基于indexedDB缓存的轻量级资源加载器。     
  * 动画效果：   
  ![](./assets/images/rloader.gif)


### [evm](https://github.com/xiangwenhu/evm)  事件泄露检测
  * 起因：做直播业务，监听Socket的消息，没有取消监听，乱成一锅粥。
  * 目标：及时发现重复注册的监听函数，进行报警。需覆盖主流的库和场景。
  * 描述：事件注册监听，预警和统计， 事件监听内存泄漏排查利器！ 按需监听事件处理程序，并对重复添加进行预警，并统计你关心事件处理程序。
  * 效果截图：   
   ![](https://github.com/xiangwenhu/evm/raw/master/images/demo-et.png) 


### [前端文件系统](https://github.com/xiangwenhu/FileSystem) 
  * 起因：indexedDB的图片，js,视频等文件存储多了，怎么方便用户侧的管理呢？
  * 目标：类似windows的文件管理。
  * 演示:  https://xiangwenhu.github.io/FileSystem/demo/
  * 描述：基于indexedDB实现的前端文件系统，用于存储大型文件并且方便查看。 比如存储：视频文件，pdf文件，音频文件等等
  * 动画效果：    
   ![](./assets/images/fs.gif)


### [danmaku](https://github.com/xiangwenhu/danmaku) 弹幕库
  * 起因：直播业务，弹幕多了，明显感觉到卡顿。
  * 目标：提高帧率，降低消耗，同时支持多种速度，多种样式的的弹幕。
  * 演示：https://xiangwenhu.github.io/danmu/   
  * 描述：采用 **层** ， **片** ，**轨道** 三层设计，把动画作用于一个片上而不是具体每个弹幕上，大幅提高性能，1200+弹幕， FPS稳定在 50+。


### [count-manager](https://github.com/xiangwenhu/countdownManger)  时钟计时器
  * 起因：直播业务，活动入口显示倒计时，点击活动入口后也显示倒计时。倒计时组件倒计时的逻辑是组件内部实现的，各自计算各自的，导致了活动内外的倒计时显示不一致。 
  * 目标：分离计时逻辑，通过key来分组，同样的key具备同样的计时逻辑。通知增长计时，自定义时钟等。
  * 演示：https://xiangwenhu.github.io/count-manager-demos/
  * 描述：
  * 动态效果：
   ![alt text](countManager.gif)

### [class-error-catch](https://github.com/xiangwenhu/class-error-catch)   异步错误捕获
  * 起因：那时的react版本，用户点击等这些事件的错误不会被React的componentDidCatch捕获。 
  * 目标：支持单个方法的捕获，也支持对整个class的所有方法的错误捕获。
  * 描述：基于 decorator 的错误捕捉。

### [asyncFactoryCreator](https://github.com/xiangwenhu/asyncFactoryCreator) 异步工厂
  * 起因：直播业务，socket链接成功后，才能处理后续逻辑，出现了多个组件都在等待socket链接成功后的情况。
  * 目标：多地多次异步获取，获取的是同一个实例。
  * 描述：异步单例。适用于同步单例。

### [nextGenerator](https://github.com/xiangwenhu/nextGenerator)   
  * 起因：多次执行setTimeout或者requestAnimationFrame等，都需要编写逻辑。
  * 目标：简化多次调用的逻辑。
  * 起因：计时器，比如采用setTimeout实现的倒计时，每次使用setTimeout计划下一次，不舒坦。
  * 目标：参考express中间件的nex用法。实现调用next进下一个计时周期。
  * 描述：面向next编程思想，封装下一次的调用逻辑，比较经典的场景就是setTimeout,requestAnimationFrame。调用next即进入下一个周期。


### [arrayMerge](https://github.com/xiangwenhu/arrayMerge)   
  * 起因: 业务方给的数据，需要前端通过某个键或者关系组合数据，问就是历史原因。
  * 目标：支持通过某些属性关系合并数组。
  * 描述：问属性路径深浅，顺序遍历，倒叙遍历都支持，高效合并数据方案



### [circle-lottery](https://github.com/xiangwenhu/circle-lottery)   
  * 起因：业务上做转盘抽奖，有的转动指针，有的转动转盘，样式也不一样。
  * 目标：转盘抽奖逻辑与UI分离， 逻辑部分只负责计算转动的角度处理。
  * 演示：https://xiangwenhu.github.io/circle-lottery/?rtype=1
  * 描述：该库适用指针转动或者转盘转动的转盘抽奖。不负责UI布局，仅仅负责转动效果控制。
  * 动画效果：     
  ![](./assets/images/lottery.gif)




## 工具

### [cookie-manager](https://github.com/xiangwenhu/cookie-manager)
  * 起因：业务方说需要给几个大主播发短视频，可是浏览器只能登录一个用户，切换后，再需要发送视频，还需登录，有办法解决不。
  * 目标：域名级多用户管理，一键切换。支持导入导出。
  * 描述：浏览器插件: 用户切换不是问题，保存用户cookie，随意切换，测试和\*\*好帮手。


### [lanhu-image-downloader-ext](https://github.com/xiangwenhu/lanhu-image-downloader-ext)     
  * 起因：蓝湖多张图片下载，每次下载下来还要解压缩再放到项目里，麻烦。
  * 演示：
![](https://github.com/xiangwenhu/lanhu-image-downloader-ext/blob/main/res/lanhu-image-downloader.gif?raw=true)
  * 描述：从vscode里面通过url或者选择下载设计稿图片，节省人力。

### [swagger-to-petal-service](https://github.com/xiangwenhu/swagger-to-petal-service)
  * 起因：公司的部分服务文档都是通过swagger发布的，前端服务请求，需要手写类型typescript和请求逻辑，麻烦。
  * 目标：根据文档地址自动生成服务请求代码，更关注业务。
  * 描述：swagger转为typescript编写的的服务代码。升级愿景转为基于[petal-service](https://github.com/xiangwenhu/petal-service)框架的服务请求。  

### [yapi-to-petal-service](https://github.com/xiangwenhu/yapi-to-petal-service)
  * 起因：公司的部分服务文档都是通过yapi发布的，前端服务请求，需要手写类型typescript和请求逻辑，麻烦。
  * 目标：根据文档地址自动生成服务请求代码，更关注业务。
  * 描述：yapi转为typescript编写的的服务代码。升级愿景转为基于[petal-service](https://github.com/xiangwenhu/petal-service)框架的服务请求。  


### [m-tinypng](https://github.com/xiangwenhu/m-tinypng)   
  * 起因：活动系统 - 蕤 支持直接把蓝湖图片同步到本地项目，为了获取更好的图片压缩质量，采用了 tinypng，但似乎其有数量限制。
  * 目标：无限制的使用 tinypng压缩服务。
  * 描述：基于 [https://tinypng.com/](https://tinypng.com/)的高效图片压缩工具，突破上限。

## 博客
掘金 ： [云的世界](https://juejin.cn/user/131597122679661)

[掘力计划月度榜单｜2021年10月Top作者榜公布](https://juejin.cn/post/7028026854669811749) 前端组第19名    
[掘力计划月度榜单｜2021年8月Top作者榜公布](https://juejin.cn/post/7006255145054896158)  前端第1名    
[掘力计划月度榜单｜2021年7月Top作者榜公布](https://juejin.cn/post/6992851882947379214) 前端组第6名   
[掘力计划月度榜单｜2021年6月Top作者榜公布](https://juejin.cn/post/6982444975111798798) 前端组第7名   
