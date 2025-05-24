# `table_1` - 表注释

表说明。

## 字段

| 字段名      | 注释     | 类型         | 默认值 | 可空 | 单位 |
| ----------- | -------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键     | bigint       |        | 否   |      |
| master_id   | 主表标识 | bigint       |        | 否   |      |
| field_1     | 字段1    | varchar(64)  |        | 否   |      |
| field_2     | 字段2    | char(2)      | 01     | 是   |      |
| field_3     | 字段3    | decimal(8,2) | 0      | 是   | kg   |
| field_4     | 字段4    | date         |        | 是   |      |
| field_5     | 字段5    | int          | 0      | 是   | 个   |
| field_6     | 字段6    | decimal(3,2) | 0      | 是   | ,%   |
| create_by   | 创建人   | bigint       |        | 否   |      |
| create_time | 创建时间 | datetime     |        | 否   |      |
| update_by   | 更新人   | bigint       |        | 是   |      |
| update_time | 更新时间 | datetime     |        | 是   |      |

## 约束

* 主键: `pk_table_1`
* 外键: `fk_table_1_master_id`，`master_id` 关联 `master.dbid`
* 唯一: `uk_table_1_master_id_field_1`，关联字段 `master_id` 和 `field_1`

## 索引

无

## 说明

1. `field_1(字段1)` 的编号规则详见 [bill_1_no](./bill_no_rule.md#bill_1_no)
2. `field_2(字段2)` 的值详见 [分类编码1](./dict/1001_code_1.md)
