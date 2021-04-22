# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

技术栈

    编程语言：TypeScript 4.x + JavaScript
    构建工具：Vite 2.x
    前端框架：Vue 3.x
    路由工具：Vue Router 4.x
    状态管理：Vuex 4.x
    UI 框架：Element Plus
    CSS 预编译：Stylus / Sass / Less
    HTTP 工具：Axios
    Git Hook 工具：husky + lint-staged
    代码规范：EditorConfig + Prettier + ESLint + Airbnb JavaScript Style Guide
    提交规范：Commitizen + Commitlint
    单元测试：vue-test-utils + jest + vue-jest + ts-jest
    自动部署：GitHub Actions




架构搭建

    使用 Vite 快速初始化项目雏形
    修改 Vite 配置文件
    规范目录结构
    集成路由工具 Vue Router
    集成状态管理工具 Vuex
    集成 UI 框架 Element Plus
    集成 HTTP 工具 Axios
    集成 CSS 预编译器 Stylus/Sass/Less

代码规范

    集成 EditorConfig 配置
    集成 Prettier 配置
    集成 ESLint 配置
    解决 Prettier 和 ESLint 的冲突
    集成 husky 和 lint-staged
      配置 husky
      配置 lint-staged

提交规范

    commit message 格式规范
      Header
        type    必需    用于说明 commit 的提交类型
        scope   可选    scope 用于指定本次 commit 影响的范围
        subject 必需    subject 是本次 commit 的简洁描述
      Body      body 是对本次 commit 的详细描述 (可省略)              
      Footer    如果本次提交的代码是突破性的变更或关闭缺陷，则 Footer 必需，否则可以省略
      参考例子   feat(browser): onUrlChange event (popstate/hashchange/polling)
      规范 commit message 的好处 
      集成 Commitizen 实现规范提交
        安装 Commitizen
        初始化项目
        使用 Commitizen   以前我们提交代码都是 git commit -m "xxx"，现在改为 git cz
        自定义配置提交说明
          cz-customizable 初始化项目
          cz-customizable 初始化项目
  
  单元测试

      安装核心依赖
      创建jest配置文件
      创建单元测试文件
      集成@types/jest
      添加eslint-plugin-jext
      执行单元测试
      单元测试约束

自动部署

    什么是Github Actions
    配置Github Actions
      创建Github仓库
      创建Github Token
      在仓库中添加secret
      创建Actions配置文件
    自动部署出发原理  













    ├── publish/
    └── src/
    ├── assets/ // 静态资源目录
    ├── common/ // 通用类库目录
    ├── components/ // 公共组件目录
    ├── router/ // 路由配置目录
    ├── store/ // 状态管理目录
    ├── style/ // 通用 CSS 目录
    ├── utils/ // 工具函数目录
    ├── views/ // 页面组件目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
    ├── tests/ // 单元测试目录
    ├── index.html
    ├── tsconfig.json // TypeScript 配置文件
    ├── vite.config.ts // Vite 配置文件
    └── package.json




