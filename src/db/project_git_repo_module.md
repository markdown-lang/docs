# `project_git_repo_module` - git仓库子模块

管理一个git仓库中存储的所有源码项目，我们将这个层级的源码项目称为模块(取自 maven 的名称)。

## 字段

| 字段名        | 注释         | 类型         | 默认值 | 主键 | 可空 |
| ------------- | ------------ | ------------ | ------ | ---- | ---- |
| dbid          | 主键         | bigint       |        | 是   | 否   |
| git_repo_id   | git仓库标识  | bigint       |        |      | 否   |
| content_type  | 内容分类     | char(2)      |        |      | 否   |
| module_name   | 模块名称     | varchar(32)  |        |      | 是   |
| base_package  | 包的根路径   | varchar(128) |        |      | 是   |
| main_language | 主要编程语言 | char(3)      |        |      | 是   |
| create_by     | 创建人       | bigint       |        |      | 否   |
| create_time   | 创建时间     | datetime     |        |      | 否   |
| update_by     | 更新人       | bigint       |        |      | 是   |
| update_time   | 更新时间     | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_project_git_repo_module`
2. 外键: `fk_project_git_repo_module_git_repo_id`，`git_repo_id` 关联 `project_git_repo.dbid`
3. 唯一：
   1. `uk_project_git_repo_module_git_repo_id_content_type`，对应字段 `git_repo_id`、`content_type`
   2. `uk_project_git_repo_module_git_repo_id_module_name`，对应字段 `git_repo_id`、`module_name`

## 索引

无

## 说明

1. `content_type(内容分类)` 的值详见 [子模块内容分类](../data/dict/2007_module_content_type)
2. `module_name(模块名称)` 是子模块（或子项目）的名称，即目录名
3. 如果 `repo_type(仓库类型)` 是`单模块`，则也要在此表中登记
4. 约定一个项目只能有一种主要编程语言
5. `base_package(包的根路径)` 是一个相对路径，相对于 `module_name(模块名称)`
6. `main_language(主要编程语言)` 的值详见 [编程语言](../data/dict/2008_program_language)
7. 在模板项目的配置文件中取对应的路径
