# `project_member` - 项目成员

一个项目中包含的成员信息，具有不同的访问级别。

## 字段

| 字段名       | 注释     | 类型     | 默认值 | 主键 | 可空 |
| ------------ | -------- | -------- | ------ | ---- | ---- |
| dbid         | 主键     | bigint   |        | 是   | 否   |
| project_id   | 项目标识 | bigint   |        |      | 否   |
| member_id    | 成员标识 | bigint   |        |      | 否   |
| access_level | 访问级别 | char(4)  |        |      | 否   |
| seq          | 显示顺序 | int      |        |      | 否   |
| create_by    | 创建人   | bigint   |        |      | 否   |
| create_time  | 创建时间 | datetime |        |      | 否   |
| update_by    | 更新人   | bigint   |        |      | 是   |
| update_time  | 更新时间 | datetime |        |      | 是   |

## 约束

1. 主键: `pk_project_member`
2. 外键: 
   1. `fk_project_member_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_project_member_member_id`，`member_id` 关联 `sys_user.user_id`
3. 唯一: `uk_project_member_project_id_member_id`，关联字段 `project_id` 和 `member_id`

## 索引

无

## 说明

1. `access_level(访问级别)` 的值详见[项目访问级别](../data/dict/1001_project_access_level)
2. `seq(显示顺序)` 是指一个成员所有可访问项目的显示顺序，从1开始计数
3. `create_by(创建人)` 是授权人标识