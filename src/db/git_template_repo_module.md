# `git_template_repo_module` - git模板仓库模块

对于单模块项目，或者说单模块仓库，从文件的组织形式上看，是完全相同的，但这是两个概念，所以分开存储。

## 字段

| 字段名           | 注释         | 类型        | 默认值 | 可空 | 单位 |
| ---------------- | ------------ | ----------- | ------ | ---- | ---- |
| dbid             | 主键         | bigint      |        | 否   |      |
| template_repo_id | 模板仓库标识 | bigint      |        | 否   |      |
| module_name      | 模块名称     | varchar(32) |        | 否   |      |
| content_type     | 内容分类     | char(2)     |        | 否   |      |
| main_language    | 主要编程语言 | char(3)     |        | 是   |      |
| create_by        | 创建人       | bigint      |        | 否   |      |
| create_time      | 创建时间     | datetime    |        | 否   |      |
| update_by        | 更新人       | bigint      |        | 是   |      |
| update_time      | 更新时间     | datetime    |        | 是   |      |

## 约束

1. 主键: `pk_git_template_repo_module`
2. 外键: `fk_git_template_repo_module_template_repo_id`，`template_repo_id` 关联 `git_template_repo.dbid`
3. 唯一：`uk_git_template_repo_module_template_repo_id_module_name`，关联字段 `template_repo_id` 和 `module_name`

## 索引

无

## 说明

1. `content_type(内容分类)` 的值详见 [子模块内容分类](../data/dict/2007_project_module_content_type)，挂在末级模块上
2. `module_name(模块名称)` 是项目与子模块（或子项目）的名称，即目录名
3. 约定一个项目只能有一种主要编程语言
4. `main_language(主要编程语言)` 的值详见 [编程语言](../data/dict/2008_program_language)
5. 在模板项目的配置文件中取对应的路径
