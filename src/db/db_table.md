# `db_table` - 数据库表

数据库表的基本信息。

## 字段

| 字段名      | 注释     | 类型         | 默认值 | 主键 | 可空 |
| ----------- | -------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键     | bigint(20)   |        | 是   | 否   |
| project_id  | 项目标识 | bigint(20)   |        |      | 否   |
| name        | 表名     | varchar(64)  |        |      | 否   |
| comment     | 注释     | varchar(64)  |        |      | 否   |
| description | 描述     | varchar(256) |        |      | 是   |
| type        | 类型     | char(2)      | 01     |      | 否   |
| create_by   | 创建人   | bigint(20)   |        |      | 否   |
| create_time | 创建时间 | datetime     |        |      | 否   |
| update_by   | 更新人   | bigint(20)   |        |      | 是   |
| update_time | 更新时间 | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_db_table`
2. 外键: `fk_db_table_project_id`，`project_id` 对应 `project` 表中的 `dbid`
3. 唯一: `uk_db_table_project_id_name`，对应字段为 `project_id`、`name`

## 索引

无

## 说明

1. `type(类型)` 的值详见 [数据库表类型](../data/dict/2010_db_table_type.md)