# `project_template` - 项目模板

一个项目包含一到多个模板仓库。本表只用于存储一个项目中使用的模板信息，是推导出 git 仓库信息的源头之一。

## 字段

| 字段名           | 注释         | 类型        | 默认值 | 主键 | 可空 |
| ---------------- | ------------ | ----------- | ------ | ---- | ---- |
| dbid             | 主键         | bigint      |        | 是   | 否   |
| project_id       | 项目标识     | bigint      |        |      | 否   |
| template_repo_id | 模板仓库标识 | bigint      |        |      | 否   |
| repo_name        | 仓库名称     | varchar(32) |        |      | 否   |
| create_by        | 创建人       | bigint      |        |      | 否   |
| create_time      | 创建时间     | datetime    |        |      | 否   |

## 约束

1. 主键: `pk_project_template`
2. 外键: 
   1. `fk_project_template_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_project_template_template_repo_id`，`template_repo_id` 关联 `git_template_repo.dbid`
3. 唯一: `uk_project_template_project_id_template_repo_id`，关联字段 `project_id` 和 `template_repo_id`

## 索引

无

## 说明

1. `repo_name(仓库名称)` 是推荐的或默认的仓库名称
2. 本表存储一个项目使用了哪些 git 模板，而 `project_git_repo(项目git仓库)` 存储根据模板生成具体 git 仓库信息。
3. 之所以分开存，是为了支持没有基于 git 模板创建的项目