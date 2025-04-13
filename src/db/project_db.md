# `project_db` - 项目使用的数据库

此表仅存储项目使用的数据库类型信息，并不存数据库连接信息。连接信息作为敏感数据，存储在用户的开发电脑上。

## 字段

| 字段名           | 注释           | 类型        | 默认值 | 主键 | 可空 |
| ---------------- | -------------- | ----------- | ------ | ---- | ---- |
| dbid             | 主键           | bigint      |        | 是   | 否   |
| project_id       | 项目标识       | bigint      |        |      | 否   |
| relation_db_name | 关系数据库名称 | varchar(32) |        |      | 否   |
| memory_db_name   | 内存数据库名称 | varchar(32) |        |      | 是   |
| create_by        | 创建人         | bigint      |        |      | 否   |
| create_time      | 创建时间       | datetime    |        |      | 否   |
| update_by        | 更新人         | bigint      |        |      | 是   |
| update_time      | 更新时间       | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_project_db`
2. 外键: `fk_project_db_project_id`，`project_id` 关联 `project.dbid`
3. 唯一：`uk_project_db_project_id`，关联字段 `project_id`

## 索引

无

## 说明

1. `relation_db_name(关系数据库名称)` 的值详见[软件名称](../data/dict/2004_software_name)中的 `mysql`、`postgressql` 等关系数据库
2. `memory_db_name(内存数据库名称)` 的值详见[软件名称](../data/dict/2004_software_name)中的 `redis` 等内存数据库