# `change_set` - 变更集

定义变更。是一次变更的基本单元。一个变更列表中最好只包含一种类型的变更。

## 字段

| 字段名      | 注释     | 类型         | 默认值 | 主键 | 可空 |
| ----------- | -------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键     | bigint       |        | 是   | 否   |
| project_id  | 项目标识 | bigint       |        |      | 否   |
| title       | 标题     | varchar(64)  |        |      | 否   |
| description | 描述     | varchar(256) |        |      | 是   |
| create_by   | 创建人   | bigint       |        |      | 否   |
| create_time | 创建时间 | datetime     |        |      | 否   |
| update_by   | 更新人   | bigint       |        |      | 是   |
| update_time | 更新时间 | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_change_set`
2. 外键: `fk_change_set_project_id`，`project_id` 关联 `project.dbid`
3. 唯一：无

## 索引

无

## 说明

无