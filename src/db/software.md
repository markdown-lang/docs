# `software` - 软件信息

主要维护开发时常用的软件基本信息。

## 字段

| 字段名      | 注释     | 类型         | 默认值 | 主键 | 可空 |
| ----------- | -------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键     | bigint       |        | 是   | 否   |
| name        | 名称     | varchar(64)  |        |      | 否   |
| label       | 显示名   | varchar(64)  |        |      | 否   |
| description | 描述     | varchar(128) |        |      | 是   |
| create_by   | 创建人   | bigint       |        |      | 否   |
| create_time | 创建时间 | datetime     |        |      | 否   |
| update_by   | 更新人   | bigint       |        |      | 是   |
| update_time | 更新时间 | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_software`
2. 外键: 无
3. 唯一：`uk_software_name`，关联字段 `name`

## 索引

无

## 说明

1. `name(名称)`，如 `mysql`、`gitlab`、`git`、`ubuntu_server` 等具体软件，名称是在此处规范的

## 数据

| name          | label         | description |
| ------------- | ------------- | ----------- |
| mysql         | MySQL         |             |
| gitlab        | GitLab        |             |
| git           | Git           |             |
| ubuntu_server | Ubuntu Server |             |