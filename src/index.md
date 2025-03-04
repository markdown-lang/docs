---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Markdown Lang"
  text: "用markdown开发软件"
  tagline: 结构化、层级化、规范化的软件设计语言，配套源码生成工具。 
  actions:
    - theme: brand
      text: 为什么使用 Markdown Lang
      link: /introduction
    - theme: alt
      text: 快速入门
      link: /getting-started

features:
  - title: 无代码
    details: 用户只关注诉求，然后按照规则生成代码
  - title: 步步递进
    details: 设计和代码的转换不追求100%，每天多一点
  - title: 分分合合
    details: 每个功能独立描述，但又能组合起来
  - title: 不联网
    details: 生成工具部署在开发者电脑上，不联网
---

## 设计出发点

### 设计层面

1. 一个业务场景由多个程序模块的多个操作组合而成。
2. 一个程序模块由一个UI和多个API组合而成
3. 一个UI由多个变量、面板、布局、基本元素和操作组成
4. 一个API由多张数据库表和功能组件组成

### 实现层面

1. 最大化复用已有的组件库
2. 按规则生成与AI生成相结合