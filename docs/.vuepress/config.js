const themeConfig = require('./config/themeConfig.js');
const plugins = require('./config/plugins.js');
const head = require('./config/head.js');



module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)
  lang: 'zh-CN',
  title: "码无止境の世界",
  description: '在无止境的编程代码世界里遨游，用代码改变我们的生活.',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  head,
  themeConfig,  // 主题配置
  plugins,    // 插件

  markdown: {
    lineNumbers: true,  // 显示代码块的行号
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
