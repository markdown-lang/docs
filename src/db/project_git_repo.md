# `project_git_repo` - 项目git仓库

管理一个项目的所有git仓库，一个项目下有多个源码仓库。

## 字段

| 字段名           | 注释         | 类型        | 默认值 | 主键 | 可空 |
| ---------------- | ------------ | ----------- | ------ | ---- | ---- |
| dbid             | 主键         | bigint      |        | 是   | 否   |
| host_id          | 托管平台标识 | bigint      |        |      | 否   |
| repo_name        | 仓库名称     | varchar(64) |        |      | 否   |
| http_url         | http url     | varchar(64) |        |      | 否   |
| repo_module_type | 仓库模块类型 | char(2)     |        |      | 否   |
| template_repo_id | 模板仓库标识 | bigint(20)  |        |      | 是   |
| create_by        | 创建人       | bigint      |        |      | 否   |
| create_time      | 创建时间     | datetime    |        |      | 否   |
| update_by        | 更新人       | bigint      |        |      | 是   |
| update_time      | 更新时间     | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_project_git_repo`
2. 外键: 
   1. `fk_project_git_repo_host_id`，`host_id` 关联 `project_code_host.dbid`
   2. `fk_project_git_repo_template_repo_id`, `template_repo_id` 关联 `git_template_repo.dbid`
3. 唯一：`uk_project_git_repo_host_id_repo_name`，关联字段 `host_id` 和 `repo_name`

## 索引

无

## 说明

1. `repo_name(仓库名称)` 默认取 `project_template(项目模板)` 表中的 `repo_name(仓库名称)`
2. `http_url(http url)` 是 git 中基于 http(s) 的下载地址，包含 `.git` 后缀
3. `repo_module_type(仓库模块类型)` 的值详见 [git仓库模块类型](../data/dict/2006_git_repo_module_type)
