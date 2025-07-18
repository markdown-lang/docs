# `create_program_module_table` - 创建一个程序模块使用的数据库表

是一个内嵌标签，并不是一种变更，但可组成变更。

## 字段

| 字段名                   | 注释                   | 类型         | 默认值 | 主键 | 可空 |
| ------------------------ | ---------------------- | ------------ | ------ | ---- | ---- |
| dbid                     | 主键                   | bigint       |        | 是   | 否   |
| project_id               | 项目标识               | bigint       |        |      | 否   |
| create_program_module_id | 创建程序模块标识       | bigint       |        |      | 否   |
| table_path               | 数据库表设计文档的路径 | varchar(128) |        |      | 否   |
| is_main                  | 是否主表               | boolean      | false  |      | 否   |
| seq                      | 序号                   | int          |        |      | 否   |
| create_by                | 创建人                 | bigint       |        |      | 否   |
| create_time              | 创建时间               | datetime     |        |      | 否   |
| update_by                | 更新人                 | bigint       |        |      | 是   |
| update_time              | 更新时间               | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_create_program_module_table`
2. 外键: 
   1. `fk_create_program_module_table_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_create_program_module_table_cpm_id`，`create_program_module_id` 关联 `create_program_module.dbid`
   3. `fk_create_program_module_table_table_id`，`table_id` 关联 `db_table.dbid`
3. 唯一：`uk_create_program_module_table_cpm_id_table_path`，关联字段 `create_program_module_id` 和 `table_path`

## 索引

无

## 说明

1. 一个程序模块通常使用1个主表，0到多个子表存储数据
2. `seq(序号)` 是每个菜单从1开始计数，主表排在前面，子表排在后面
3. `table_path(表结构设计文档的路径)` 是相对路径，相对开发人员本地的文件夹 + `/db`
