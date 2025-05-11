# `db_constraint_column` - 数据库约束使用的列

## 字段

| 字段名        | 注释         | 类型       | 默认值 | 主键 | 可空 |
| ------------- | ------------ | ---------- | ------ | ---- | ---- |
| dbid          | 主键         | bigint(20) |        | 是   | 否   |
| constraint_id | 约束标识     | bigint(20) |        |      | 否   |
| column_id     | 列标识       | bigint(20) |        |      | 否   |
| ref_table_id  | 引用的表标识 | bigint(20) |        |      | 是   |
| ref_column_id | 引用的列标识 | bigint(20) |        |      | 是   |
| seq           | 序号         | tinyint    |        |      | 否   |
| create_by     | 创建人       | bigint(20) |        |      | 否   |
| create_time   | 创建时间     | datetime   |        |      | 否   |
| update_by     | 更新人       | bigint(20) |        |      | 是   |
| update_time   | 更新时间     | datetime   |        |      | 是   |

## 约束

1. 主键: `pk_db_constraint_column`
2. 外键: 
   1. `fk_db_constraint_column_constraint_id`，`constraint_id` 对应 `db_constraint` 表中的 `dbid`
   2. `fk_db_constraint_column_column_id`，`column_id` 对应 `db_column` 表中的 `dbid`
   3. `fk_db_constraint_column_ref_table_id`，`ref_table_id` 对应 `db_table` 表中的 `dbid`
   4. `fk_db_constraint_column_ref_column_id`，`ref_column_id` 对应 `db_column` 表中的 `dbid`
3. 唯一: `uk_db_constraint_column_constraint_id_column_id`，对应字段为 `constraint_id`、`column_id`

## 索引

无

## 说明

1. `seq(序号)`，每个约束从1开始计数
2. 定义一个外键时，`column_id(列标识)` 存储的是基本表中列，`ref_column_id(引用的列标识)` 中存的是引用表中的列标识 