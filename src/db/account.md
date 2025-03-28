# `account` - 账号信息

每位用户管理自己使用软件的账号。管理到用户这一级。

## 字段

| 字段名       | 注释      | 类型              | 默认值 | 主键 | 可空 |
| ------------ | --------- | ----------------- | ------ | ---- | ---- |
| dbid         | 主键      | bigint            |        | 是   | 否   |
| software_id  | 软件标识  | bigint            |        |      | 否   |
| host         | 主机名    | varchar(128)      |        |      | 否   |
| port         | 端口号    | smallint unsigned | 80     |      | 否   |
| username     | 用户名    | varchar(64)       |        |      | 是   |
| password     | 密码      | varchar(64)       |        |      | 是   |
| access_token | 访问token | varchar(64)       |        |      | 是   |
| schema_name  | 模式名称  | varchar(32)       |        |      | 是   |
| description  | 描述      | varchar(128)      |        |      | 是   |
| create_by    | 创建人    | bigint            |        |      | 否   |
| create_time  | 创建时间  | datetime          |        |      | 否   |
| update_by    | 更新人    | bigint            |        |      | 是   |
| update_time  | 更新时间  | datetime          |        |      | 是   |

## 约束

1. 主键: `pk_account`
2. 外键: `fk_account_software_id`，`software_id` 关联 `software.dbid`
3. 唯一：无

## 索引

无

## 说明

1. `schema_name(模式名称)` 在软件下进一步细化出的概念，如存储 mysql 的数据库名，或者 redis 的数据库编号等
2. `host(主机名)` 的值可以是
   1. ip，如 `127.0.0.1` 或 `localhost`
   2. 域名，如 `db.example.com`，数据库连接地址不需要协议
   3. 网站访问地址，如 https://www.baidu.com，包含协议
3. `port(端口号)` 是一个16位的无符号整数，其取值范围从 0 到 65535
4. `access_token` 功能跟用户名与密码的功能相同，调用 REST API 时使用 
5. 本表中没有存储开发、测试或生产的环境信息，当账号跟项目关联时，存在关系表中更合适
6. `create_by(创建人)` 是一个重要的业务字段，是登记人标识
7. 在ui中，为不同类型的软件设计不同的录入界面，其中包含软件独有的属性