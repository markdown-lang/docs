# `dev_account` - 开发环境账号信息

用户账号信息不往服务器存储，在用户开发环境的 sqlite 数据库中存储。
注意，在同一个本地开发环境，不同用户之间共享账号信息，所以不需要添加 `user_id` 字段。

## 字段

| 字段名            | 注释      | 类型              | 默认值 | 主键 | 可空 |
| ----------------- | --------- | ----------------- | ------ | ---- | ---- |
| dbid              | 主键      | bigint            |        | 是   | 否   |
| project_id        | 项目标识  | bigint            |        |      | 否   |
| software_category | 软件分类  | char(2)           |        |      | 否   |
| software_name     | 软件名称  | varchar(32)       |        |      | 否   |
| host              | 主机名    | varchar(128)      |        |      | 否   |
| port              | 端口号    | smallint unsigned | 80     |      | 否   |
| username          | 用户名    | varchar(64)       |        |      | 是   |
| password          | 密码      | varchar(64)       |        |      | 是   |
| access_token      | 访问token | varchar(64)       |        |      | 是   |
| schema_name       | 模式名称  | varchar(32)       |        |      | 是   |
| description       | 描述      | varchar(128)      |        |      | 是   |
| create_by         | 创建人    | bigint            |        |      | 否   |
| create_time       | 创建时间  | datetime          |        |      | 否   |
| update_by         | 更新人    | bigint            |        |      | 是   |
| update_time       | 更新时间  | datetime          |        |      | 是   |

## 约束

1. 主键: `pk_dev_account`
2. 外键: 无
3. 唯一：无

## 索引

无

## 说明

1. `project_id(项目标识)` 对应 `project(项目基本信息)` 表中的 `dbid`
2. `software_category(软件分类)` 的值详见[软件分类](../data/dict/2005_software_category)
3. `software_name(软件名称)` 的值详见[软件名称](../data/dict/2004_software_name)
4. `schema_name(模式名称)` 在软件下进一步细化出的概念，如存储 mysql 的数据库名，或者 redis 的数据库编号等
5. `host(主机名)` 的值可以是
   1. ip，如 `127.0.0.1` 或 `localhost`
   2. 域名，如 `db.example.com`，数据库连接地址不需要协议
   3. 网站访问地址，如 https://www.baidu.com，包含协议
6. `port(端口号)` 是一个16位的无符号整数，其取值范围从 0 到 65535
7. `access_token` 功能跟用户名与密码的功能相同，调用 REST API 时使用 
8. 本表在开发环境的 sqlite 数据库中创建，只存储开发人员开发环境的账号信息
9. `create_by(创建人)` 是一个重要的业务字段，是登记人标识
10. 在ui中，为不同类型的软件设计不同的录入界面，其中包含软件独有的属性