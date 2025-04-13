# Markdown Lang

Markdown Lang 是一套软件设计表述规范。并基于这些规范生成前端与后端源码。

本项目既是 Markdown Lang 的设计文档，也是按照 Markdown Lang 的语法格式编写的。

使用 [Markdown](https://spec.commonmark.org/0.31.2/) 编写设计文档。

一个可以转换为实现代码的设计文档，应具备以下内容：

1. 业务场景或用例
2. 程序模块
3. UI
4. API
5. 表结构
6. 主数据

## 编写文档

使用 [vitepress](https://vitepress.dev/) 编写文档。

```sh
# 安装依赖
npm install
# 边写边看
npm run docs:dev
# 构建
npm run docs:build
```

为什么不再开发低代码平台了？因为想通了一个道理，[形式应追随功能，而不是功能受困于形式](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/)。