const { penName, footerTitle } = require("../common/info");
module.exports = {
  // 页脚信息
  createYear: 2021, // 博客创建年份
  copyrightInfo:
    penName + ' | ' + footerTitle + '<br> <a href="https://pupper.cn/" target="_blank"></a>', // 博客版权信息，支持a标签
}