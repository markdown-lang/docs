# `create_function_module` - 创建一个功能模块

定义一个程序模块的基本信息。

## 字段

| 字段名          | 注释               | 类型         | 默认值 | 主键 | 可空 |
| --------------- | ------------------ | ------------ | ------ | ---- | ---- |
| dbid            | 主键               | bigint       |        | 是   | 否   |
| project_id      | 项目标识           | bigint       |        |      | 否   |
| change_set_id   | 变更标识           | bigint       |        |      | 否   |
| name            | 模块名称           | varchar(64)  |        |      | 否   |
| user_group_id   | 用户定义的分组标识 | bigint       |        |      | 否   |
| seq             | 序号               | int          |        |      | 否   |
| path            | 路由路径           | varchar(256) |        |      | 是   |
| icon            | 图标               | varchar(64)  |        |      | 是   |
| client_type     | 客户端类型         | char(2)      |        |      | 否   |
| permission_part | 权限标识           | varchar(64)  |        |      | 是   |
| client_src_path | 前端源码路径       | varchar(256) |        |      | 否   |
| server_src_path | 后端源码路径       | varchar(256) |        |      | 否   |
| create_by       | 创建人             | bigint       |        |      | 否   |
| create_time     | 创建时间           | datetime     |        |      | 否   |
| update_by       | 更新人             | bigint       |        |      | 是   |
| update_time     | 更新时间           | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_create_function_module`
2. 外键: 
   1. `fk_create_function_module_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_create_function_module_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：`uk_create_function_module_change_set_id_user_group_id`，关联字段 `change_set_id` 和 `user_group_id`

## 索引

无

## 说明

1. `project_id(项目标识)` 是冗余字段，方便在项目层面操作数据
2. `seq(序号)` 用于排序，一个项目从 `1` 开始编号
3. `path(路由地址)` 对应 `vue-router` 中的 `path` 属性，不需要以 `/` 开头
4. `user_group_id(用户定义的分组标识)` 由用户指定，系统菜单标识使用此字段值
5. `client_src_path(前端源码路径)` 是存放前端页面组件的文件夹名称，默认跟 `path(路由地址)` 相同
6. `server_src_path(后端源码路径)` 是存放后端源码文件的文件夹名称，默认跟 `client_src_path(前端源码路径)` 相同
7. `icon(图标)` 的值由两部分组成，格式为 `{icon库}:{图标名}`，常用的 icon 库为
   1. `local` - 自定义的 icon 图标
   2. `bootstrap` - [Bootstrap Icons](https://icons.getbootstrap.com/)
   3. `ionicons5` - [ionicons5](https://xicons.org)
8. `permission_part(权限标识)` 是功能模块一层的权限字符串
9. 一个完整的 `permission(权限标识)` 至少由三层组成 `{功能模块权限标识}:{程序模块权限标识}:{操作权限标识}`，但不限于三层