# 开发手册

## 目录

- [开发手册](#开发手册)
  - [目录](#目录)
  - [项目概述](#项目概述)
    - [项目名称](#项目名称)
    - [技术栈](#技术栈)
  - [项目结构](#项目结构)
    - [项目根目录](#项目根目录)
    - [主要目录结构](#主要目录结构)
      - [`/components`](#components)
      - [`/server`](#server)
      - [`/pages`](#pages)
      - [`/public`](#public)
      - [`/types`](#types)
    - [配置文件](#配置文件)
  - [开发环境搭建](#开发环境搭建)
  - [常用命令](#常用命令)
  - [代码规范](#代码规范)
  - [工作流与版本控制](#工作流与版本控制)
  - [测试与调试](#测试与调试)
  - [部署流程](#部署流程)
  - [常见问题与解决方案](#常见问题与解决方案)
    - [结语](#结语)

---

## 项目概述

### 项目名称

Trans in Academia! (TiA!) Website

### 技术栈

- **前端框架**: [Nuxt.js](https://nuxtjs.org/)
- **样式框架**: [Tailwind CSS](https://tailwindcss.com/)
- **图标库**: [NuxtIcon](https://github.com/nuxt/icon)
- **包管理工具**: [pnpm](https://pnpm.io/)
- **代码规范化工具**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **数据库**: [Cloudflare KV](https://developers.cloudflare.com/workers/platform/kv)
- **CI/CD 工具**: GitHub Actions

---

## 项目结构

### 项目根目录

```
.
├── app.vue                # 项目的根组件，初始化页面渲染
├── assets                 # 存放静态资源（如 css 等）
├── components             # 存放 Vue 组件
├── docs                   # 项目文档（如当前文档）
├── eslint.config.mjs       # ESLint 配置文件（不需要修改）
├── i18n                   # 国际化文件夹，包含多语言翻译
├── nuxt.config.ts         # Nuxt.js 配置文件
├── package.json           # 项目依赖和配置文件
├── pages                  # 存放页面组件（由 Nuxt.js 自动路由）
├── pnpm-lock.yaml         # pnpm 锁定文件，记录依赖关系（不需要修改）
├── prettier.config.cjs    # Prettier 配置文件（不需要修改）
├── public                 # 存放静态文件（如 favicon 等）
├── README-EN.md           # 英文版 README
├── README.md              # 中文版 README
├── server                 # 服务器端代码（API 路由等）
├── tailwind.config.ts     # Tailwind CSS 配置文件
├── tsconfig.json          # TypeScript 配置文件（不需要修改）
└── types                  # 存放 TypeScript 类型定义文件
```

---

### 主要目录结构

#### `/components`

存放项目中的 Vue 组件。

```
components
├── layout
│   ├── SiteFooter.vue      # 网站页脚组件
│   ├── SiteHeader.vue      # 网站头部组件
│   └── SiteHeaderMenu.vue  # 网站头部菜单组件
├── pages
│   ├── EventList.vue       # 活动列表页面组件
│   └── SocialLinks.vue     # 社交链接组件
└── ui
    ├── BackToTop.vue       # 回到顶部按钮组件
    ├── Card.vue            # 卡片组件
    └── ProgressBar.vue     # 顶部进度条组件
```

#### `/server`

存放服务器端 API 路由及处理逻辑，处理与后端交互的功能。

```
server
├── api
│   └── events.ts           # 获取 KV 中活动数据的 API
└── tsconfig.json           # TypeScript 配置文件（不需要修改）
```

#### `/pages`

存放页面级组件，Nuxt.js 会根据该目录自动生成路由。

```
pages
└── index.vue               # 主页组件
```

#### `/public`

存放静态文件，这些文件会被直接暴露在根路径下，如图标、manifest 等。

```
public
└── favicon.ico             # 网站图标
```

#### `/types`

存放 TypeScript 类型定义文件。

```
types
└── index.d.ts              # 全局类型定义
```

---

### 配置文件

- `nuxt.config.ts`: Nuxt.js 配置文件，包含 Nuxt.js 的全局设置，例如页面标题、路由规则等。
- `tailwind.config.ts`: Tailwind CSS 配置文件，设置自定义样式。

---

## 开发环境搭建

1. **安装 Node.js**: 安装 Node.js（建议使用 LTS 版本 22+），可以从 [Node.js 官网](https://nodejs.org/) 下载并安装（或使用 nvm 进行管理）。
2. **安装 pnpm**: 需要 pnpm 作为包管理工具，执行以下命令进行安装：

   ```bash
   corepack enable pnpm
   ```

   如果 macOS 中提示找不到 corepack 命令，可以使用 Homebrew 安装

   ```bash
   brew install corepack
   ```

   如果你是 Windows 用户，可以使用以下命令安装（优先使用 corepack——：

   ```bash
    npm install -g pnpm
   ```

3. **克隆项目代码**:

   ```bash
   git clone https://github.com/transinacademia/trans-in-academia-web.git tia-web
   cd tia-web
   ```

4. **安装依赖**:

   ```bash
   pnpm install
   ```

5. **运行开发服务器**:

   ```bash
   pnpm dev
   ```

   访问 [http://localhost:3000](http://localhost:3000) 以查看本地开发环境。

6. **停止开发服务器**:

   使用 `Ctrl + C` 组合键停止开发服务器。

---

## 常用命令

- **开发模式**: `pnpm dev` 启动开发服务器
- **打包构建**: `pnpm build` 构建生产环境代码
- **代码格式化**: `pnpm format` 使用 Prettier 格式化代码
- **修复代码问题**: `pnpm lint:fix` 自动修复代码中的 ESLint 问题

---

## 代码规范

1. **使用 ESLint**: 项目中已经配置了 ESLint，请遵循 [Vue.js Style Guide](https://v3.vuejs.org/style-guide/)。
2. **代码格式化**: 使用 Prettier 来统一代码风格，确保代码整洁统一。

3. **注释规范**:

   - 关键函数和模块要有详细的注释，解释其功能、输入输出。
   - 避免过多的注释，代码应该尽可能自解释。

4. **命名规范**:
   - 变量、函数名应该具有描述性，使用 camelCase 格式。
   - 文件名和组件名使用 PascalCase（例如：`Component.vue`）。

---

## 工作流与版本控制

1. **Git 分支管理**:

   - `main` 分支用于生产环境，只有在代码完全测试并准备好部署时才合并到 `main`。
   - 功能开发使用功能分支，格式为：`feature/{功能描述}`。
   - 修复 Bug 使用 `bugfix/{bug描述}`。

2. **提交信息规范**:

   - 提交信息应简洁明了，遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范。
   - 示例：`feat: add user authentication` 或 `fix: resolve UI bug in login page`。

3. **Pull Request**:
   - 提交 PR 时，确保代码通过了 lint 检查，并且所有功能经过充分测试。
   - PR 描述清楚更改的内容，使用 `WIP` 标记表示“工作进行中”。

---

## 测试与调试

1. **测试**: 本项目不包含自动化测试，但建议开发人员进行手动测试。提交 PR 前请确保代码没有报错，并且 UI 功能正常。

2. **调试**: 使用浏览器的开发者工具进行调试，检查控制台输出和网络请求。可以在代码中使用 `console.log` 输出调试信息。

---

## 部署流程

1. **预部署检查**: 在部署到生产环境之前，请确保：

   - 代码格式化和 lint 检查通过。
   - 所有新功能已经经过测试。

2. **CI/CD**:

   - 使用 GitHub Actions 进行持续集成和部署。当代码合并到 `main` 分支时，自动触发构建和部署流程。

3. **部署**: 本项目部署在 [Cloudflare Pages](https://pages.cloudflare.com/)，合并到 `main` 分支后，会自动部署到生产环境。

---

## 常见问题与解决方案

- **问题**: 安装依赖时出现错误。

  - **解决方案**: 清空缓存后重新安装依赖。执行 `pnpm store prune` 然后重新运行 `pnpm install`。

- **问题**: 代码无法启动，报错 `port already in use`。
  - **解决方案**: 修改端口号，使用 `pnpm dev --port 4000` 来指定不同的端口。

---

### 结语

以上是项目的基本开发手册。请确保遵守代码规范，保持代码整洁，并在每次提交前仔细检查代码。如果有任何疑问或需要帮助，请随时联系团队其他成员。
