# `project_menu_table` - 程序模块使用的业务表

## 字段

| 字段名      | 注释                   | 类型         | 默认值 | 主键 | 可空 |
| ----------- | ---------------------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键                   | bigint(20)   |        | 是   | 否   |
| menu_id     | 菜单标识               | bigint(20)   |        |      | 否   |
| table_path  | 数据库表设计文档的路径 | varchar(128) |        |      | 否   |
| table_id    | 数据库表标识           | bigint(20)   |        |      | 是   |
| is_main     | 是否主表               | boolean      | false  |      | 否   |
| seq         | 序号                   | int          |        |      | 否   |
| create_by   | 创建人                 | bigint(20)   |        |      | 否   |
| create_time | 创建时间               | datetime     |        |      | 否   |
| update_by   | 更新人                 | bigint(20)   |        |      | 是   |
| update_time | 更新时间               | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_project_menu_table`
2. 外键: 
   1. `fk_project_menu_table_table_id`，`table_id` 对应 `db_table` 表中的 `dbid`
   2. `fk_project_menu_table_menu_id`，`menu_id` 对应 `project_menu` 表中的 `dbid`
3. 唯一：`uk_project_menu_table_menu_id_table_path`，对应字段为 `menu_id` 和 `table_path`

## 索引

无

## 说明

1. 一个程序模块通常使用1个主表，0到多个子表存储数据
2. `seq(序号)` 是每个菜单从1开始计数，主表排在前面，子表排在后面
3. `table_path(表结构设计文档的路径)` 是相对路径，相对开发人员本地的文件夹 + `/db`
4. `table_id(数据库表标识)` 在第一次生成表结构定义之前是没有值的，在 `db_table(数据库表)` 中登记之后再赋值 