# `git_template_repo` - git模板仓库

存储git模板项目的访问信息，基于模板项目创建新项目。模板项目可以是公开的，也可以是私有的。

常用的模板项目有：
1. 设计文档项目
2. 前端源码项目
3. 后端源码项目
4. 全栈源码项目

## 字段

| 字段名        | 注释     | 类型         | 默认值 | 主键 | 可空 |
| ------------- | -------- | ------------ | ------ | ---- | ---- |
| dbid          | 主键     | bigint       |        | 是   | 否   |
| repo_category | 仓库分类 | char(2)      |        |      | 否   |
| http_url      | http url | varchar(128) |        |      | 否   |
| is_private    | 是否私有 | boolean      | false  |      | 否   |
| description   | 描述     | varchar(128) |        |      | 是   |
| software_id   | 软件标识 | bigint       |        |      | 否   |
| repo_name     | 仓库名称 | varchar(32)  |        |      | 否   |
| create_by     | 创建人   | bigint       |        |      | 否   |
| create_time   | 创建时间 | datetime     |        |      | 否   |
| update_by     | 更新人   | bigint       |        |      | 是   |
| update_time   | 更新时间 | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_git_template_repo`
2. 外键: `fk_git_template_repo_software_id`，`software_id` 关联 `software.dbid`
3. 唯一：`uk_git_template_repo_http_url`，关联字段 `http_url`

## 索引

无

## 说明

1. `repo_category(仓库分类)` 的值详见[git模板仓库分类](../data/dict/2002_git_template_repo_category.md)
2. `http_url` 是访问 git 仓库的 http 网址
3. `is_private(是否私有)` 仓库是私有的，还是可公开访问的，如果是私有的，在克隆时就需要提供用户和密码
4. 克隆仓库时使用的用户和密码，是从 `account(账号信息)` 表中获取登录用户的账号信息（最好不要存在服务器端）
5. `software_id(软件标识)` 是指代码托管在哪个平台上，如 `GitLab`、`GitHub` 或 `Gitee` 等
6. `repo_name(仓库名称)` 是基于此模板创建 git 仓库时，推荐的仓库名称
