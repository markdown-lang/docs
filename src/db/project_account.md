# `project_account` - 项目使用的账号信息

存储一个项目所关联的所有账户信息，对应所有环境，如开发环境、测试环境、甚至是生产环境。以及项目托管到哪个平台。

## 字段

| 字段名      | 注释     | 类型     | 默认值 | 主键 | 可空 |
| ----------- | -------- | -------- | ------ | ---- | ---- |
| dbid        | 主键     | bigint   |        | 是   | 否   |
| project_id  | 项目标识 | bigint   |        |      | 否   |
| account_id  | 账户标识 | bigint   |        |      | 否   |
| deploy_env  | 部署环境 | char(2)  |        |      | 是   |
| create_by   | 创建人   | bigint   |        |      | 否   |
| create_time | 创建时间 | datetime |        |      | 否   |
| update_by   | 更新人   | bigint   |        |      | 是   |
| update_time | 更新时间 | datetime |        |      | 是   |

## 约束

1. 主键: `pk_project_account`
2. 外键: 
   1. `fk_project_account_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_project_account_account_id`，`account_id` 关联 `account.dbid`
3. 唯一: `uk_project_account_project_id_account_id`，关联字段 `project_id` 和 `account_id`

## 索引

无

## 说明

1. `deploy_env(部署环境)` 的值详见[部署环境](../data/dict/2003_deploy_env)