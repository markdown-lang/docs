# `project_menu` - 项目菜单信息

描述一个程序模块的基本信息，是访问该程序模块的菜单信息。

## 字段

| 字段名            | 注释               | 类型         | 默认值 | 可空 | 单位 |
| ----------------- | ------------------ | ------------ | ------ | ---- | ---- |
| dbid              | 主键               | bigint(20)   |        | 否   |      |
| project_id        | 项目标识           | bigint(20)   |        | 否   |      |
| group_id          | 菜单分组标识       | bigint(20)   |        | 否   |      |
| name              | 名称               | varchar(64)  |        | 否   |      |
| client_type       | 客户端类型         | char(2)      |        | 否   |      |
| path              | 路由地址           | varchar(256) |        | 是   |      |
| icon              | 图标               | varchar(64)  |        | 是   |      |
| component         | 组件路径           | varchar(256) |        | 是   |      |
| user_menu_id      | 用户定义的菜单标识 | int          |        | 是   |      |
| seq               | 序号               | int          |        | 否   |      |
| action_permission | 操作权限字符       | varchar(64)  |        | 是   |      |
| client_src_path   | 前端源码路径       | varchar(256) |        | 否   |      |
| visible           | 是否可见           | boolean      | true   | 否   |      |
| template_key      | 界面模板码         | varchar(32)  |        | 否   |      |
| create_by         | 创建人             | bigint(20)   |        | 否   |      |
| create_time       | 创建时间           | datetime     |        | 否   |      |
| update_by         | 更新人             | bigint(20)   |        | 是   |      |
| update_time       | 更新时间           | datetime     |        | 是   |      |

## 约束

1. 主键: `pk_project_menu`
2. 外键: 
   1. `fk_project_menu_group_id`，`group_id` 对应 `project_menu_group` 表中的 `dbid`
   2. `fk_project_menu_project_id`，`project_id` 对应 `project` 表中的 `dbid`
3. 唯一：
   1. `uk_project_menu_group_id_name`，对应字段为 `group_id` 和 `name`
   2. `uk_project_menu_group_id_path`，对应字段为 `group_id` 和 `path`
   3. `uk_project_menu_project_id_user_menu_id`，对应字段为 `project_id` 和 `user_menu_id`

## 索引

无

## 说明

1. `component(组件路径)` 用于指定组件路径，如 `home/index`，对应的组件为 `/src/views/home/index.vue`
2. `component(组件路径)` 不能以 `/` 开头，由分组的 `project_menu_group.client_src_path` 与本表的 `client_src_path`，使用 `/` 连接而成
3. `seq(序号)` 用于排序，每个分组从 `1` 开始计数
4. `user_menu_id(用户定义的菜单标识)` 默认跟 `dbid` 相同，允许用户指定，系统菜单标识使用此字段值
5. `action_permission(操作权限字符)` 是程序模块一层的权限字符串
6. `client_type(客户端类型)` 对应字典 [客户端类型](../data/dict/2009_client_type.md), 必须跟功能模块保持一致
7. 当 `client_type(客户端类型)` 的值为 `05(API)` 时，以下字段允许为空，界面上不用显示
   1. `ui_template(界面模板)`
   2. `path(路由地址)`
   3. `component(组件路径)`
   4. `icon(图标)`
   5. `user_menu_id(用户定义的菜单标识)`
