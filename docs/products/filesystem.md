---
title: 前端文件系统
readingTime: true
tag:
 - 作品
recommend: 3
---

# [FileSystem](https://github.com/xiangwenhu/FileSystem)


# 基于indexedDB和promise的文件系统
<br/>

## 如何使用
```javascript
    window.onload = async function () {
        let fs = await FileSystem.getInstance()           
        let dir = await fs.root.getDirectory('测试文件夹1')
        let file = await fs.root.getFile('测试文件1')
        await file.write('我爱北京天安门')   
        file.readAsText().then(content => console.log(content))        
    }
```
<br/>

## 文档API
先等等，作者很忙，暂时还是看源码吧

<br/>



## 演示地址
https://xiangwenhu.github.io/FileSystem/demo/**


## 演示效果截图

![](https://raw.githubusercontent.com/xiangwenhu/summary/main/assets/images/fs.gif)    

![](https://raw.githubusercontent.com/xiangwenhu/FileSystem/master/docs/screenshot/ss1.jpg)   

![](https://raw.githubusercontent.com/xiangwenhu/FileSystem/master/docs/screenshot/ss2.jpg)     

![](https://raw.githubusercontent.com/xiangwenhu/FileSystem/master/docs/screenshot/ss3.jpg)  

![](https://raw.githubusercontent.com/xiangwenhu/FileSystem/master/docs/screenshot/ss4.jpg)




