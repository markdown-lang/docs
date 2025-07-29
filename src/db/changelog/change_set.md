# `change_set` - 变更集

定义变更。是一次变更的基本单元。一个变更列表中最好只包含一种类型的变更。

## 字段

| 字段名           | 注释         | 类型         | 默认值 | 可空 | 单位 |
| ---------------- | ------------ | ------------ | ------ | ---- | ---- |
| dbid             | 主键         | bigint       |        | 否   |      |
| project_id       | 项目标识     | bigint       |        | 否   |      |
| change_type_code | 变更类型编码 | varchar(32)  |        | 否   |      |
| change_type_name | 变更类型名称 | varchar(64)  |        | 否   |      |
| title            | 标题         | varchar(64)  |        | 否   |      |
| description      | 描述         | varchar(256) |        | 是   |      |
| biz_id           | 业务标识     | bigint       |        | 是   |      |
| create_by        | 创建人       | bigint       |        | 否   |      |
| create_time      | 创建时间     | datetime     |        | 否   |      |
| update_by        | 更新人       | bigint       |        | 是   |      |
| update_time      | 更新时间     | datetime     |        | 是   |      |

## 约束

* 主键: `pk_change_set`
* 外键: `fk_change_set_project_id`，`project_id` 关联 `project.dbid`
* 唯一：无

## 索引

无

## 说明

1. `change_type_code(变更类型编码)` 的值与对应变更的数据库表名保持一致：
   1. create_functional_module - 创建功能模块
   2. create_program_module - 创建程序模块
2. `biz_id(业务标识)` 关联具体的变更信息，在具体变更信息创建完成后，补充该字段，`change_type_code(变更类型编码)` 对业务变关系：
   1. create_functional_module 对应 `create_functional_module(创建一个功能模块)` 表中的 `dbid`
   2. create_program_module 对应 `create_program_module(创建一个程序模块)` 表中的 `dbid`
