# `project_status_log` - 项目状态变更日志

注意，日志表不跟主表之间建立外键，因为当项目信息删除后，不删除状态变更日志表

## 字段

| 字段名             | 注释         | 类型     | 默认值 | 可空 | 单位 |
| ------------------ | ------------ | -------- | ------ | ---- | ---- |
| dbid               | 主键         | bigint   |        | 否   |      |
| project_id         | 项目标识     | bigint   |        | 否   |      |
| status             | 状态         | char(2)  |        | 否   |      |
| status_change_by   | 状态变更人   | bigint   |        | 否   |      |
| status_change_time | 状态变更时间 | datetime |        | 否   |      |

## 约束

1. 主键: `pk_project_status_log`
2. 外键: 无
3. 唯一：无

## 索引

无

## 说明

1. `status(状态)` 的值取自 `project(项目基本信息)` 表中的 `status(状态)`