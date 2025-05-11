# `create_program_module` - 创建一个程序模块

定义一个程序模块的基本信息。

## 字段

| 字段名          | 注释               | 类型         | 默认值 | 主键 | 可空 |
| --------------- | ------------------ | ------------ | ------ | ---- | ---- |
| dbid            | 主键               | bigint       |        | 是   | 否   |
| project_id      | 项目标识           | bigint       |        |      | 否   |
| change_set_id   | 变更标识           | bigint       |        |      | 否   |
| name            | 模块名称           | varchar(64)  |        |      | 否   |
| user_group_id   | 用户定义的分组标识 | bigint       |        |      | 否   |
| user_menu_id    | 用户定义的菜单标识 | bigint       |        |      | 否   |
| seq             | 序号               | int          |        |      | 否   |
| path            | 路由路径           | varchar(256) |        |      | 是   |
| icon            | 图标               | varchar(64)  |        |      | 是   |
| permission_part | 权限标识           | varchar(64)  |        |      | 是   |
| visible         | 是否可见           | boolean      | true   |      | 否   |
| client_type     | 客户端类型         | char(2)      |        |      | 否   |
| create_by       | 创建人             | bigint       |        |      | 否   |
| create_time     | 创建时间           | datetime     |        |      | 否   |
| update_by       | 更新人             | bigint       |        |      | 是   |
| update_time     | 更新时间           | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_create_program_module`
2. 外键: 
   1. `fk_create_program_module_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_create_program_module_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：
   1. `uk_create_program_module_change_set_id_user_group_id_name`，关联字段 `change_set_id`、`user_group_id` 和 `name`
   2. `uk_create_program_module_change_set_id_menu_id`，关联字段 `change_set_id` 和 `menu_id`

## 索引

无

## 说明

1. `project_id(项目标识)` 是冗余字段，方便在项目层面操作数据
2. `seq(序号)` 用于排序，可相对于父分组排序，也可全局排序
3. `user_menu_id(用户定义的菜单标识)` 由用户指定，系统菜单标识使用此字段值
4. `icon(图标)` 的值由两部分组成，格式为 `{icon库}:{图标名}`，常用的 icon 库为
   1. `local` - 自定义的 icon 图标
   2. `bootstrap` - [Bootstrap Icons](https://icons.getbootstrap.com/)
   3. `ionicons5` - [ionicons5](https://xicons.org)
5. `permission_part(权限标识)` 是程序模块一层的权限字符串。
6. 一个完整的 `permission(权限标识)` 至少由三层组成 `{功能模块权限标识}:{程序模块权限标识}:{操作权限标识}`，但不限于三层
7. `client_type(客户端类型)` 对应字典 [客户端类型](../data/dict/2009_client_type.md), 必须跟功能模块保持一致