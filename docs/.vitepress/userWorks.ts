import { Theme } from "@sugarat/theme";


const userWorks: Theme.UserWorks = {
    title: '个人项目/线上作品',
    description: '记录开发的点点滴滴',
    topTitle: '举些🌰',
    list: [
        {
            title: '蓝湖图片下载插件（VSCode)',
            description: 'VSCode工作区文件夹右键打开选择选择页面，通过url或者选择，从蓝湖下载图片到项目中， 提升开发效率。带中文翻译为英文的能力。',
            time: {
                start: '2025'
            },
            url: '/my-works/lanhu-image-downloader-ext.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/lanhu-image-downloader.gif',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/lanhu-image-downloader-options.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/lanhu-image-downloader-supports.png'

            ],
            links: [
                {
                    title: '插件地址',
                    url: 'https://marketplace.visualstudio.com/items?itemName=cloud-dirge.lanhu-image-downloader-ext'
                },
                {
                    title: "github",
                    url: "https://github.com/xiangwenhu/lanhu-image-downloader-ext"
                }
            ],
            tags: ['蓝湖', 'vscode'],
        },
        {


            title: '通用基于时钟的计时管理',
            description: '基于固定周期时钟的计时工具，自带小周期修正，可以通过key来分组，同样的key具备同样的计算逻辑。多个计时共享一个时钟，提高复用，减少计时器。',
            time: {
                start: '2025'
            },
            url: '/my-works/clock-counter.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/clock-counter.gif',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/clock-counter-strcut.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/clock-counter-feature.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/clock-counter-code-1.png'

            ],
            links: [
                {
                    title: '体验地址',
                    url: 'https://xiangwenhu.github.io/count-manager-demos/#/'
                },
                {
                    title: "github",
                    url: "https://github.com/xiangwenhu/counter-manager"
                },
                {
                    title: "npm",
                    url: "https://www.npmjs.com/package/clock-counter"
                }
            ],
            tags: ['setTimeout', '计时器', 'clock'],
        },
        {
            title: '旅行者',
            description: '时光荏苒人易老，往事如烟梦已遐。 莫叹浮生多苦短，且将旅行趁年华。 ',
            time: {
                start: '2024'
            },
            url: '/my-works/traveler.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel.gif',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-ali-ace.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-cut.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-list.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-map-5a.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-map-echarts.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-map-school.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-map.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/travel-report.png'

            ],
            links: [
                {
                    title: '体验地址',
                    url: 'http://8.140.247.208/'
                },
                {
                    title: "github",
                    url: "https://github.com/xiangwenhu/traveler"
                }
            ],
            tags: ['高德地图', 'Vue', 'echarts', '阿里云', 'drizzle-orm', 'mySql', 'express'],
        },
        {
            title: 'petal-service服务框架',
            description: '基于装饰器的服务框架，开箱即用，支持扩展，服务编写利器，前后端均支持。额外提供统计，路径参数，最终参数获取等能力。',
            time: {
                start: '2023'
            },
            url: '/my-works/petal-service.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/petal-service-design-v2.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/petal-service-project.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/petal-service-featrue.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/petal-service-demos.png'

            ],
            links: [
                {
                    title: '示例',
                    url: 'https://github.com/xiangwenhu/petal-service-test'
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/petal-service'
                },
                {
                    title: 'npm',
                    url: 'https://www.npmjs.com/package/petal-service'
                }
            ],
            tags: ['装饰器', 'Vue'],
        },
        {
            title: '通用异步消息中心',
            description: '异步通讯通用方案，异步回调转Promise通用方案。支持EventEmitter, MQTT, socket.io, iframe， webview等等场景。',
            time: {
                start: '2023'
            },
            url: '/my-works/async-messenger.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-process.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-demo.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-project.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-feature.png',


            ],
            links: [
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/asyncMessager'
                },
                {
                    title: 'npm',
                    url: 'https://www.npmjs.com/package/async-messenger-js'
                }
            ],
            tags: ['装饰器', 'bridge'],
        },
        {
            title: 'cookie manager 插件',
            description: '管理cookie, 比如切换用户。\r\n用于管理多个站点的多个用户的cookie, 方便切换用户。同时支持导入和导出功能。',
            time: {
                start: '2022'
            },
            url: '/my-works/cookie-manager.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s1.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manage-s1-2.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s2.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s3.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s4.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s5.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/cookie-manager-s5-1.png'
            ],
            links: [
                {
                    title: '插件地址',
                    url: 'https://chromewebstore.google.com/detail/cookie-manager/ibacffblnhdjphfknblgbcekkdbannpk?hl=zh-CN&utm_source=ext_sidebar'
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/cookie-manager'
                }
            ],
            tags: ['chrome插件', 'cookie'],
        },
        {
            title: '沙丘 流程控制框架',
            description: '理念：任何操作都是Activity，组合拼接，扩展，基于配置的流程控制。',
            time: {
                start: '2022'
            },
            url: '/my-works/sandcastle.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/sandcastle.gif?t=1',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/sandcastle-act.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/sandcastle-code1.png'

            ],
            links: [
                {
                    title: '演示地址',
                    url: 'http://8.140.247.208:8081/clientCS/'
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/sandcastle'
                }
            ],
            tags: ['流程控制', 'Activity'],
        },
        {
            title: 'evm 事件泄露检测',
            description: '按需监听事件处理程序的添加和移除，并对重复添加进行预警，并统计你关心事件处理程序。',
            time: {
                start: '2021'
            },
            url: '/my-works/evm.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-dom.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-demo1.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-events.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-featrue.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-code-dom.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/evm-code-eventemitter.png'

            ],
            links: [
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/evm'
                }
            ],
            tags: ['事件监听', '内存泄漏'],
        },
        {
            title: 'r-loader 资源加载和缓存',
            description: '网络请求后的数据，如果indexedBD里面没有，就存入。 反之，直接从indexedDB里面读取。 通过ver字段，来识别缓存是否过期。',
            time: {
                start: '2021'
            },
            url: '/my-works/rloader.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/r-loader.gif',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/r-loader-featrue.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/r-loader-code.png'

            ],
            links: [
                {
                    title: "r-loader演示",
                    url: "https://xiangwenhu.github.io/rloader/"
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/rloader'
                }
            ],
            tags: ['资源加载', '资源缓存'],
        },
        {
            title: 'merge-data-js 对象合并和数组按照key合并',
            description: '支持对象合并：不问属性路径深浅，支持属性映射。支持数组合并：不问属性路径深浅，支持属性映射，支持顺序和倒序。',
            time: {
                start: '2021'
            },
            url: '/my-works/merge-data-js.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/merge-data-demo1.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/merge-data-demo-arr.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/merge-data-demo-arr-hoc.png'

            ],
            links: [
                {
                    title: "npm",
                    url: "https://www.npmjs.com/package/merge-data-js"
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/merge-data'
                }
            ],
            tags: ['数组合并', '对象合并', "数组按照键合并"],
        },
        {
            title: '前端文件系统',
            description: '基于indexedDB和promise的浏览器文件系统。',
            time: {
                start: '2017'
            },
            url: '/my-works/filesystem.html',
            cover: [
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/fs.gif?v=1',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/fs-code.png',
                'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/fs-s2.jpg'
            ],
            links: [
                {
                    title: "在线演示",
                    url: "https://xiangwenhu.github.io/FileSystem/demo/"
                },
                {
                    title: 'github',
                    url: 'https://github.com/xiangwenhu/FileSystem'
                }
            ],
            tags: ['文件系统', '资源缓存'],
        }
    ]
}







export default userWorks;