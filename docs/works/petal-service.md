---
description: 基于装饰器的服务框架，开箱即用，支持扩展，服务编写利器，前后端均支持。
title: petal-service服务框架
readingTime: true
tag:
 - 作品
recommend: 3
---

# [petal-service](https://github.com/xiangwenhu/petal-service)

## 描述
*  起因：服务散落在 "人间" ，复用性差。
*  目标："中央集权"，模块化，增加复用性。额外提供统计，路径参数，最终参数获取等能力。

基于装饰器的服务框架，开箱即用，支持扩展，服务编写利器，前后端均支持。

## 特性
- 支持多实例： 默认示例 + 自定义实例
- 支持多级配置    
    实例模式： 方法配置 > 实例属性配置 > 实例config属性 > class的配置 > 自定义默认值 > 系统默认配置   
    静态模式： 方法配置 > 静态属性配置 > 静态config属性 > class的配置 > 自定义默认值 > 系统默认配置
- 支持服务继承
- 支持自定义装饰器 (初级)
- 支持path路径参数，即 `/user/:id` 和 `/user/{id}` 格式
- 支持getter
- 支持accessor 
```typescript
     @accessorDecorator()
     accessor timeout: number = 15 * 1000;
```
- 支持静态方法和静态属性
- 支持基于Axios自定义requester
- 支持拦截器
- 支持实例属性config作为配置
- 支持静态属性config作为配置
- 内置BaseServiceClass，快捷使用 res和config属性
- 全局暴露默认实例装饰器
- 支持日志开关
```typescript
enableLog(true)      // 自行引入
petalEnableLog(true) // 全局暴露
```
- 支持查询方法配置
```typescript
console.log("getIndex config", getMethodConfig(DemoService, DemoService.getIndex));
// 输出
getIndex config: {
  classConfig: {},
  methodConfig: { config: { url: 'https://baidu.com/' } },
  propertyConfig: {},
  fieldConfig: { timeout: 20000 },
  defaultConfig: {}
}
```
- 支持统计
```typescript
const ins = new DemoService();
const result = getStatistics(ins);
console.log(JSON.stringify(result, undefined , "\t"));

//输出
{
	"instanceMethods": {
		"count": 1,
		"methods": [
			{
				"name": "getIndex",
				"class": "DemoService"
			}
		]
	},
	"staticMethods": {
		"count": 1,
		"methods": [
			{
				"name": "getStaticIndex",
				"class": "DemoService"
			}
		]
	}
}
```


## 安装
```shell
npm install petal-service
```

## 示例
```typescript
import "petal-service";

// 允许打印日志
petalEnableLog(true);

// 更新配置，比如授权信息，例如jwt, cookies
petalSetConfig({
    headers: {
        token: "token",
    },
});

// 设置baseUrl和超时时间
@petalClassDecorator({
    timeout: 60 * 1000,
    baseURL: "http://www.example.com",
})
class DemoService extends PetalBaseService {
    // 设置 api method 请求参数，最主要的是url, params, data和额外的config
    @petalMethodDecorator({
        method: "post",
        url: "",
    })
    static async getIndex(
        _params: PetalParamsPick.Params<{ since: string }>,
    ): Promise<string> {
        return this.res.data;
    }

    // 设置 实例的timeout ，优先级: 方法 > 大于实例 > class > 自定义默认值
    @petalFieldDecorator("timeout")
    static timeoutValue = 5 * 1000;
}

// 调用
DemoService.getIndex(
    {
        params: { since: "monthly" },
        config: {
            headers: { userId: 1 },
        },
    }
)
    .then((res) => {
        console.log("res DemoService static getIndex:", res);
    })
    .catch((err) => {
        console.log("error DemoService static getIndex:", err);
    });

```



更多示例参见： https://github.com/xiangwenhu/petal-service-test

##  存储结构图
![](https://github.com/xiangwenhu/petal-service/blob/master/docs/petal-service-design-v2.png?raw=true)