module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "CAP's user manual",
      description: "City Analysis Platform",
    },
    "/zh/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "CAP 用户手册",
      description: "城市建筑物数据三维纹理分析平台",
    },
  },
  title: "CAP",
  base: "/cap-docs/",
  head: [
    ["link", { rel: "icon", href: "/imgs/icon.png" }],
    ["meta", { name: "keywords", content: "cap,城市分析平台,用户文档" }],
  ],
  themeConfig: {
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "Languages",
        // 该语言在下拉菜单中的标签
        label: "English",
        ariaLabel: 'Languages',
        // 编辑链接文字
        editLinkText: "Edit this page on GitHub",
        // 最后更新的描述
        lastUpdated: "Last Updated",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        nav: [
          { text: "Get Started", link: "/start/" },
          { text: "Configuration Guide", link: "/guide/" },
          { text: "Advanced", link: "/advance/" },
          { text: "Online", link: "https://aayu.today" },
        ],
      },
      "/zh/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // 最后更新的描述
        lastUpdated: "文档更新于",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        nav: [
          { text: "开始使用", link: "/zh/start/" },
          { text: "配置指南", link: "/zh/guide/" },
          { text: "进阶用法", link: "/zh/advance/" },
          { text: "在线使用", link: "https://aayu.today" },
        ],
      },
    },
    sidebar: "auto",
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "ylsislove/cap-docs",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
  plugins: ['@vuepress/last-updated']
};
