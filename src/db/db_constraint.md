# `db_constraint` - 数据库约束

存储外键约束、唯一约束、Check 约束的基本信息。

## 字段

| 字段名      | 注释         | 类型        | 默认值 | 主键 | 可空 |
| ----------- | ------------ | ----------- | ------ | ---- | ---- |
| dbid        | 主键         | bigint(20)  |        | 是   | 否   |
| table_id    | 数据库表标识 | bigint(20)  |        |      | 否   |
| name        | 约束名       | varchar(64) |        |      | 否   |
| type        | 约束类型     | char(2)     |        |      | 否   |
| create_by   | 创建人       | bigint(20)  |        |      | 否   |
| create_time | 创建时间     | datetime    |        |      | 否   |
| update_by   | 更新人       | bigint(20)  |        |      | 是   |
| update_time | 更新时间     | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_db_constraint`
2. 外键: `fk_db_constraint_table_id`，`table_id` 对应 `db_table` 表中的 `dbid`
3. 唯一: `uk_db_constraint_table_id_name`，对应字段为 `table_id`、`name`

## 索引

无

## 说明

1. `type(约束类型)` 的值详见 [数据库约束类型](../data/dict/2012_db_constraint_type.md)