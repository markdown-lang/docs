# `project_code_host` - 项目源码托管平台

此表只存储托管平台的连接信息，不存储用户信息。

## 字段

| 字段名        | 注释       | 类型         | 默认值 | 主键 | 可空 |
| ------------- | ---------- | ------------ | ------ | ---- | ---- |
| dbid          | 主键       | bigint       |        | 是   | 否   |
| project_id    | 项目标识   | bigint       |        |      | 否   |
| url           | 访问地址   | varchar(128) |        |      | 否   |
| owner_type    | 拥有者类型 | char(2)      | 01     |      | 否   |
| owner_name    | 拥有者名称 | varchar(32)  |        |      | 否   |
| software_name | 软件名称   | varchar(32)  |        |      | 否   |
| is_main       | 主平台     | boolean      | false  |      | 否   |
| create_by     | 创建人     | bigint       |        |      | 否   |
| create_time   | 创建时间   | datetime     |        |      | 否   |
| update_by     | 更新人     | bigint       |        |      | 是   |
| update_time   | 更新时间   | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_project_code_host`
2. 外键: `fk_project_code_host_project_id`，`project_id` 关联 `project.dbid`
3. 唯一：`uk_project_code_host_project_id_url`，关联字段 `project_id` 和 `url`

## 索引

无

## 说明

1. `url(访问地址)` 的格式为 `{协议}://{域名或ip}:{端口, 默认80}`，如 `https://github.com`
2. `owner_type(拥有者类型)` 的值详见 [项目拥有者类型](../data/dict/2013_project_owner_type.md)
3. `owner_name(拥有者名称)` 可以是用户名或分组名，当多层分组时用 `/` 分割，如 `group1/group2`
4. 本表设计只支持将同一个项目的 git 仓库放在同一个分组下
5. `is_main(主平台)`，一个项目只能有一个主托管平台，主托管平台用于日常源码提交；副托管平台可用于日常备份
6. `software_name(软件名称)` 的值详见[软件名称](../data/dict/2004_software_name)中的 `gitlab` 等源码托管平台