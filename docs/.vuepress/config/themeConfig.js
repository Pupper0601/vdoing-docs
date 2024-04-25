const nav = require("../common/nav.js");
const footer = require("../common/footer.js");
const htmlModules = require('./htmlModules.js');

const {
  readFileList,
  readTotalFileWords,
  readEachFileWords,
} = require("../webSiteInfo/readFile.js");

const { penName, link, avatar, name, slogan } = require("../common/info");

// 主题配置
module.exports = {
  nav,  // 导航栏
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'pupper0601/vdoing-docs', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
  docsDir: "docs", // 指定根目录
  editLinks: true, // 启用编辑
  editLinkText: "编辑此页",

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    
  // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring', 将无法使用目录页
  sidebar: { mode: 'structuring', collapsable: false },
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true

  updateBar: { // 最近更新栏
    showToArticle: true, // 显示到文章页底部，默认true
    // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  },

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],

  pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

  // contentBgStyle: 1,  // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

  author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
    name: penName, // 必需
    href: link, // 可选的
  },
  social: { // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'pupper.cheng@gmail.com'
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/Pupper0601'
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#/playlist?id=755597173'
      }
    ]
  },
  // 私密文章配置
  privatePage: {
    openPrivate: true, // 开启私密文章验证，默认开启（true），如果不开启（false），则下面配置都失效
    username: "Pupper", // 管理员用户名
    password: "Pupper@0601", // 管理员密码
    expire: "1d", // 登录过期时间：1d 代表 1 天，1h 代表 1 小时，仅支持这两个单位，不加单位代表秒。过期后访问私密文章重新输入用户名和密码。默认一天
    loginPath: "/vdoing/login/", // 引用登录组件的 md 文章的 permalink（必须），无默认值
    loginKey: "vdoing_manager", // 存储用户名信息的 key，默认是 vdoing_manager。系统通过该 key 验证是否登录、是否过期
    loginSession: false, // 开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false（不开启）
    firstLogin: 0, // 第一次进入网站需要验证。用于封锁整个网站，默认为 0（不开启），1 和 2 都代表开启，区别：1 代表虽然进入网站成功，但是网站内的私密文章仍需要单独验证，2 代表进入网站成功，网站内的私密文章不需要单独验证，也就是网站内的私密文章和普通文章一样可以访问
    firstLoginKey: "vdoing_first_login", // 存储用户名信息的 key，firstLogin 开启后该配置生效，默认为 vdoing_first_login，系统通过该 key 验证是否登录、是否过期
    // 私密文章多组用户名密码
    loginInfo: {
      "/private/test1/": [
        { username: "Pupper", password: "0601" },
      ],
      "vdoing_first_login": [  // 对应 firstLoginKey 的值
        { username: "Pupper", password: "0601" },
      ]
    },
  },
  footer,   // 页脚信息
  htmlModules,
}
