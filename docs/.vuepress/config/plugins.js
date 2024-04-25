const baiduCode = require('./baiduCode.js'); // 百度统计hm码


// 插件配置
module.exports = [
  // 自定义插件，即本地插件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["PageInfo", "BlockToggle", "GlobalTip", "Aplayer", "Twikoo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],
  ['fulltext-search'], // 全文搜索

  // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  //   thirdparty: [ // 可选，默认 []
  //     {
  //       title: '在GitHub中搜索',
  //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
  //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
  //     },
  //     {
  //       title: '在npm中搜索',
  //       frontUrl: 'https://www.npmjs.com/search?q=',
  //     },
  //     {
  //       title: '在Bing中搜索',
  //       frontUrl: 'https://cn.bing.com/search?q='
  //     }
  //   ]
  // }],

  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: baiduCode || '01293bffa6c3962016c08ba685c79d78'
    }
  ],

  ['one-click-copy', { // 代码块复制按钮
    copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
    copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
    duration: 1000, // prompt message display time.
    showInMobile: false // whether to display on the mobile side, default: false.
  }],
  ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
    settings: {
      // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
      // cssLib: ['http://xxx'], // 在线示例中的css依赖
      // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
      jsfiddle: false, // 是否显示 jsfiddle 链接
      codepen: true, // 是否显示 codepen 链接
      horizontal: false // 是否展示为横向样式
    }
  }],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)',
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    }
  ],
  // 鼠标点击页面的爆炸效果，官网：https://moefyit.github.io/moefy-vuepress/packages/cursor-effects.html
  [
    'cursor-effects',
    {
      size: 2, // 粒子的大小，默认值：2
      shape: ['star' | 'circle'], // 粒子的形状，star：星形，circle：圆形。默认值：star
      zIndex: 999999999, // 页面的索引属性，默认值：99999999，
    },
  ],
  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    'dynamic-title',
    {
      showIcon: '/favicon.ico',
      showText: 'ヾ(≧▽≦*)o欢迎回来！',
      hideIcon: '/failure.ico',
      hideText: 'ಥ_ಥ不要走呀！',
      recoverTime: 2000,   //  持续时间
    },
  ],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ['tabs'],
]
