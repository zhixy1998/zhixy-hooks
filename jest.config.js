module.exports = {
  setupFiles: [ "jest-localstorage-mock"], // 测试前加载的脚本：
  // 1. 自定义初始化（如全局变量）
  // 2. 模拟 localStorage
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], //在测试框架初始化后加载，扩展 Jest 断言（如 .toBeVisible()）
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  }, //用 ts-jest 处理 .ts/.tsx 文件，使用项目的 tsconfig.json
  collectCoverageFrom: [
    "<rootDir>/**/src/**/*.{js,jsx,ts,tsx}",
    "!**/demo/**",
    "!**/example/**",
    "!**/es/**",
    "!**/lib/**",
    "!**/dist/**",
  ],
  //   指定统计覆盖率的文件范围：
  // 1. 包含 src/**/*.{js,jsx,ts,tsx}
  // 2. 排除 demo/, example/, es/, lib/, dist/ 目录
  transformIgnorePatterns: ["^.+\\.js$"],
  preset: "ts-jest/presets/js-with-ts", //使用 ts-jest 预设，支持测试 TypeScript 和 JavaScript 混合项目
  testEnvironment: "jsdom", //模拟浏览器环境（适用于 React 组件测试）
  clearMocks: true,
  testPathIgnorePatterns: ["/.history/"],
  modulePathIgnorePatterns: ["<rootDir>/package.json"],
  resetMocks: false, //不自动重置 mock 状态（保留跨测试的 mock 数据）
};
