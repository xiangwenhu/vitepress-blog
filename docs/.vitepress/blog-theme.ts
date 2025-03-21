// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,

  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    // copyright: 'MIT License | 淡蓝的云',
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: '淡蓝的云',

  // 友链
  friend: [
    {
      nickname: '淡蓝的云',
      des: '古道边听风细语，老城中寻岁月香。',
      avatar: 'https://avatars.githubusercontent.com/u/16443366?v=4',
      url: 'https://github.com/xiangwenhu',
    }
  ],

  // 公告
  // popover: {
  //   title: '公告',
  //   body: [
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210~fmt.webp'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'text',
  //       content: '文章首/文尾有群二维码',
  //       style: 'padding-top:0'
  //     },
  //     {
  //       type: 'button',
  //       content: '作者博客',
  //       link: 'https://sugarat.top'
  //     },
  //     {
  //       type: 'button',
  //       content: '加群交流',
  //       props: {
  //         type: 'success'
  //       },
  //       link: 'https://theme.sugarat.top/group.html',
  //     }
  //   ],
  //   duration: 0
  // },
  oml2d: {
    mobileDisplay: true,
    models: [
      {
        path: 'https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json'
      }
    ]
  },
  comment: {
    repo: 'xiangwenhu/blog-comments',
    repoId: 'R_kgDOOJuCNQ',
    category: 'Genera',
    categoryId: 'DIC_kwDOOJuCNc4CoHos',
    inputPosition: 'top',
  },
  works: {
    title: '个人项目/线上作品',
    description: '记录开发的点点滴滴',
    topTitle: '举些🌰',
    list: [
      {
        title: '旅行者',
        description: ' 时光荏苒人易老，往事如烟梦已遐。 莫叹浮生多苦短，且将旅行趁年华。 ',
        time: {
          start: '2024-01-01'
        },
        url: '/works/traveller.html',
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
          }
        ],
        tags: ['高德地图', 'Vue', 'echarts', '阿里云', 'drizzle-orm', 'mySql', 'express'],
      },
      {
        title: 'petal-service服务框架',
        description: '基于装饰器的服务框架，开箱即用，支持扩展，服务编写利器，前后端均支持。额外提供统计，路径参数，最终参数获取等能力。',
        time: {
          start: '2024-01-01'
        },
        url: '/works/petal-service.html',
        cover: [
          'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/petal-service-design-v2.png',

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
          start: '2024-01-01'
        },
        url: '/works/async-messenger.html',
        cover: [
          'https://vblog-assets.oss-cn-beijing.aliyuncs.com/works/asyncMessenger-process.png',

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
      }
    ]
  }
})

export { blogTheme }
