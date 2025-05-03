// 导入menus
import { menus } from "./hook";
// 导出默认配置
export default {
  // 导出静态资源
  exportStatic: {},
  // 节点模块转换
  nodeModulesTransform: {
    type: "none",
    exclude: [],
  },
  // 历史记录
  history: { type: "hash" },
  // 额外的babel插件
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "@alifd/next",
        style: false,
      },
      "fusion",
    ],
  ],
  // 模式
  mode: "site",
  // 标题
  title: "encode react hooks",
  // 图标
  favicon: "/avatar.png",
  // logo
  logo: "/short-logo.png",
  // 动态导入
  dynamicImport: {},
  // 清单
  manifest: {},
  // 哈希
  hash: true,
  // 别名
  alias: {
    encodeHooks: process.cwd() + "/packages/hooks/src/index.ts",
  },
  publicPath: "/zhixy-hooks/dist/",
  // 解析
  resolve: {
    includes: ["docs", "packages/hooks/src"],
  },
  // 链接
  links: [
    {
      rel: "stylesheet",
      href:
        "https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css",
    },
    { rel: "stylesheet", href: "/style.css" },
  ],
  // 导航
  navs: [
    { title: "指南", path: "/guide" },
    { title: "Hooks", path: "/hooks" },
  ],
  // 菜单
  menus: {
    "/": [
      {
        title: "首页",
        path: "index",
      },
    ],
    "/guide": [
      {
        title: "介绍",
        path: "/guide",
      },
    ],
    "/hooks": menus,
  },
};
