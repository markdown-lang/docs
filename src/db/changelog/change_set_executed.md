# `change_set_executed` - 变更列表执行记录

变更列表的执行情况，一个变更对应一个执行记录。代码生成完成后，在此表中记录。

## 字段

| 字段名        | 注释     | 类型     | 默认值 | 主键 | 可空 |
| ------------- | -------- | -------- | ------ | ---- | ---- |
| dbid          | 主键     | bigint   |        | 是   | 否   |
| change_set_id | 变更标识 | bigint   |        |      | 否   |
| seq           | 序号     | int      |        |      | 否   |
| create_by     | 创建人   | bigint   |        |      | 否   |
| create_time   | 创建时间 | datetime |        |      | 否   |
| update_by     | 更新人   | bigint   |        |      | 是   |
| update_time   | 更新时间 | datetime |        |      | 是   |

## 约束

1. 主键: `pk_change_set_executed`
2. 外键: `fk_change_set_executed_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：`uk_change_set_executed_change_set_id`，关联字段 `change_set_id`

## 索引

无

## 说明

1. `seq(序号)`，每个项目从 `1` 开始，按照执行顺序编号