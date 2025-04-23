# `dev_project` - 开发环境项目信息

用户存储项目在开发环境的相关信息。本表在开发环境的 sqlite 数据库上创建。

## 字段

| 字段名           | 注释         | 类型         | 默认值 | 主键 | 可空 |
| ---------------- | ------------ | ------------ | ------ | ---- | ---- |
| dbid             | 主键         | bigint       |        | 是   | 否   |
| project_id       | 项目标识     | bigint       |        |      | 否   |
| project_name     | 项目名称     | varchar(64)  |        |      | 否   |
| project_label    | 项目显示名   | varchar(64)  |        |      | 否   |
| root_dir         | 项目根目录   | varchar(128) |        |      | 否   |
| latest_open_time | 最近打开时间 | datetime     |        |      | 否   |
| create_by        | 创建人       | bigint       |        |      | 否   |
| create_time      | 创建时间     | datetime     |        |      | 否   |
| update_by        | 更新人       | bigint       |        |      | 是   |
| update_time      | 更新时间     | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_dev_project`
2. 外键: 无
3. 唯一：`uk_dev_project_project_id`，关联字段 `project_id`

## 索引

无

## 说明

1. `project_id(项目标识)` 对应 `project(项目基本信息)` 表中的 `dbid`
2. `root_dir(项目根目录)` 是本项目的在开发环境中的根目录，是绝对路径，最后一段是项目名
3. `latest_open_time(最近打开时间)` 是用户最近打开项目的时间，常用于排序