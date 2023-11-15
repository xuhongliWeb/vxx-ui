<h1 align="center">
    vxx-UI
</h1>

![v](https://img.shields.io/npm/v/vxx-ui)
![d](https://img.shields.io/npm/dt/vxx-ui)



* 💪 Vue 3 Composition API
* 🔥 Written in TypeScript

<p align="center">vxx UI - A Vue.js 3 UI library</p>

## Install
```
npm i vxx-ui
```

## 快速开始

```html
<template>
    <Button type="primary">按钮</Button>
</template>
<script lang="ts" setup>
import { Button } from 'vxx-ui'
</script>
```

## 博客教程

[Vite+TypeScript从零搭建Vue3组件库](https://juejin.cn/column/7118932817119019015)


## 使用仓库相关命令

### 安装 pnpm

npm i pnpm -g

### 安装所有依赖

pnpm install

### 启动本地测试项目

pnpm run exm:dev

### 打包组件库

pnpm run build:vxx

### 发布

pnpm run publish:vxx

### 启动文档

- 进入site 目录

pnpm run docs:dev

### 打包文档

pnpm run docs:build

### 启动打包后文档服务

pnpm run docs:serve

### 单元测试

pnpm run test

### 查看测试覆盖率

pnpm run coverage



### 发布NPM


发布之前记得到npm官网注册个账户,如果你要发布@xx/xx这种包的话需要在npm新建个组织组织组织名就是@后面的，比如我建的组织就是vxx-ui,注册完之后你就可以发布了
首先要将我们代码提交到git仓库，不然pnpm发布无法通过，后面每次发版记得在对应包下执行 pnpm version patch你就会发现这个包的版本号patch(版本号第三个数) +1 了，同样的 pnpm version major major和 pnpm version minor 分别对应版本号的第一和第二位增加。
如果你发布的是公共包的话，在对应包下执行
arduino复制代码pnpm publish --access public


- 发布组件库
- 发布 utils

