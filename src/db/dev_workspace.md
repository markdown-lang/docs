# `dev_workspace` - 开发环境工作空间

用户存储项目在开发环境的工作空间信息。本表在开发环境的 sqlite 数据库上创建。

## 字段

| 字段名      | 注释       | 类型         | 默认值 | 主键 | 可空 |
| ----------- | ---------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键       | bigint       |        | 是   | 否   |
| project_id  | 项目标识   | bigint       |        |      | 是   |
| create_by   | 创建人     | bigint       |        |      | 否   |
| create_time | 创建时间   | datetime     |        |      | 否   |
| update_by   | 更新人     | bigint       |        |      | 是   |
| update_time | 更新时间   | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_dev_workspace`
2. 外键: 无
3. 唯一：`uk_dev_workspace_project_id`，关联字段 `project_id`

## 索引

无

## 说明

1. 本表中最多只存储一条记录，存储当前工作空间的最新信息
2. `project_id(项目标识)` 对应 `project(项目基本信息)` 表中的 `dbid`
3. `project_id(项目标识)` 表示当前工作空间正在打开或者最近打开的项目，专用于用户打开好队友时默认加载项目