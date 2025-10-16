# `app_version` - APP版本

本 APP 的版本信息。

## 字段

| 字段名                | 注释         | 类型         | 默认值 | 可空 | 单位 |
| --------------------- | ------------ | ------------ | ------ | ---- | ---- |
| dbid                  | 主键         | bigint(20)   |        | 否   |      |
| version_name          | 语义版本号   | varchar(16)  |        | 否   |      |
| version_code          | 版本代码     | int unsigned |        | 否   |      |
| pub_time              | 发布时间     | datetime     |        | 否   |      |
| note                  | 发布日志     | text         |        | 是   |      |
| download_url_template | 下载地址模板 | varchar(64)  |        | 否   |      |
| create_by             | 创建人       | bigint(20)   |        | 否   |      |
| create_time           | 创建时间     | datetime     |        | 否   |      |
| update_by             | 更新人       | bigint(20)   |        | 是   |      |
| update_time           | 更新时间     | datetime     |        | 是   |      |

## 约束

1. 主键: `pk_app_version`
2. 外键: 无
3. 唯一：
   1. `uk_app_version_version_name`，关联字段 `version_name`
   2. `uk_app_version_version_code`，关联字段 `version_code`

## 索引

无

## 说明

1. `version_name(语义版本号)` 是外部版本号，遵循 [semver](https://semver.org/) 规范
2. `version_code(版本代码)` 是内部版本号，版本越高，版本代码越大，从 1 开始计数
3. `download_url_template(下载地址模板)` 用于生成 `app_artiface(安装包信息)` 表中的 `download_url(下载地址)`