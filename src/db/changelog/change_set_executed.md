# `change_set_executed` - 变更集执行记录

变更列表的执行情况，一个变更对应一个执行记录。代码生成完成后，在此表中记录。

## 字段

| 字段名        | 注释       | 类型        | 默认值 | 可空 | 单位 |
| ------------- | ---------- | ----------- | ------ | ---- | ---- |
| dbid          | 主键       | bigint      |        | 否   |      |
| change_set_id | 变更集标识 | bigint      |        | 否   |      |
| biz_id        | 业务标识   | bigint      |        | 是   |      |
| seq           | 序号       | int         |        | 否   |      |
| start_time    | 开始时间   | datetime(6) |        | 否   |      |
| end_time      | 结束时间   | datetime(6) |        | 是   |      |
| create_by     | 创建人     | bigint      |        | 否   |      |
| create_time   | 创建时间   | datetime    |        | 否   |      |
| update_by     | 更新人     | bigint      |        | 是   |      |
| update_time   | 更新时间   | datetime    |        | 是   |      |

## 约束

1. 主键: `pk_change_set_executed`
2. 外键: `fk_change_set_executed_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：`uk_change_set_executed_change_set_id`，关联字段 `change_set_id`

## 索引

无

## 说明

1. `seq(序号)`，每个项目从 `1` 开始，按照执行顺序编号
2. `biz_id(业务标识)` 关联变更与应用变更，`change_type_code(变更类型编码)` 对业务变关系：
   1. create_functional_module 对应 `project_menu_group(项目菜单分组)` 表中的 `dbid`
   2. create_program_module 对应 `project_menu(项目菜单信息)` 表中的 `dbid`