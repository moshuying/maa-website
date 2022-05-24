# maa-website

这里存放的是 Maa 的官网源码，使用 `Nuxt.js 3` 编写

> `Nuxt.js 3` 仍未发布稳定版，当前使用 `Release Candidate` 版本

## 参与开发

请确保已经安装了 `pnpm` 包管理器

在项目根目录执行

```sh
pnpm install --shamefully-hoist
```

> 如果出现了 `ERR_PNPM_PEER_DEP_ISSUES Unmet peer dependencies` 错误，不必理会

启动开发服务器

```sh
pnpm dev
```

在提交代码前，请先在本地进行 Lint 格式化测试

```sh
pnpm lint
```

若 Lint 不通过，执行以下命令进行修复

```sh
pnpm lintfix
```

尝试 Build 发布版本

```sh
pnpm build
```
