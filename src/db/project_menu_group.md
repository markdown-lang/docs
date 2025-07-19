# `project_menu_group` - 项目菜单分组

项目菜单的分组，支持一层分组。即功能模块基本信息。

## 字段

| 字段名            | 注释               | 类型         | 默认值 | 主键 | 可空 |
| ----------------- | ------------------ | ------------ | ------ | ---- | ---- |
| dbid              | 主键               | bigint(20)   |        | 是   | 否   |
| project_id        | 项目标识           | bigint(20)   |        |      | 否   |
| name              | 名称               | varchar(64)  |        |      | 否   |
| user_group_id     | 用户定义的分组标识 | int          |        |      | 否   |
| path              | 路由地址           | varchar(256) |        |      | 否   |
| icon              | 图标               | varchar(64)  |        |      | 是   |
| client_type       | 客户端类型         | char(2)      |        |      | 否   |
| seq               | 序号               | int          |        |      | 否   |
| client_src_path   | 前端源码路径       | varchar(256) |        |      | 否   |
| server_src_path   | 后端源码路径       | varchar(256) |        |      | 否   |
| action_permission | 操作权限字符       | varchar(64)  |        |      | 是   |
| create_by         | 创建人             | bigint(20)   |        |      | 否   |
| create_time       | 创建时间           | datetime     |        |      | 否   |
| update_by         | 更新人             | bigint(20)   |        |      | 是   |
| update_time       | 更新时间           | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_project_menu_group`
2. 外键: `fk_project_menu_group_project_id`，`project_id` 对应 `project` 表中的 `dbid`
3. 唯一：
   1. `uk_project_menu_group_project_id_name`，对应字段为 `project_id`、`name`
   2. `uk_project_menu_group_project_id_path`，对应字段为 `project_id`、`path`
   3. `uk_project_menu_group_project_id_user_group_id`，对应字段为 `project_id`、`user_group_id`

## 索引

无

## 说明

1. `seq(序号)` 用于排序，每个项目从 `1` 开始计数
2. `path(路由地址)` 对应 `vue-router` 中的 `path` 属性，不需要以 `/` 开头
3. `user_group_id(用户定义的分组标识)` 默认跟 `dbid` 相同，允许用户指定，系统菜单标识使用此字段值
4. `client_src_path(前端源码路径)` 是存放前端页面组件的文件夹名称，默认跟 `path(路由地址)` 相同
5. `server_src_path(后端源码路径)` 是存放后端源码文件的文件夹名称，默认跟 `client_src_path(前端源码路径)` 相同
6. `action_permission(操作权限字符)` 是功能模块一层的权限字符串，默认跟 `path(路由地址)` 相同