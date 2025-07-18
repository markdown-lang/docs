# `project_menu_action` - 程序模块的业务操作

存储一个程序模块的最新的业务操作。changeset系列表存的是过程数据，本表中存的是结果数据。

## 字段

| 字段名                | 注释                 | 类型        | 默认值 | 主键 | 可空 |
| --------------------- | -------------------- | ----------- | ------ | ---- | ---- |
| dbid                  | 主键                 | bigint(20)  |        | 是   | 否   |
| menu_id               | 菜单标识             | bigint(20)  |        |      | 否   |
| object_code           | 业务对象编码         | varchar(32) |        |      | 否   |
| object_name           | 业务对象名称         | varchar(32) |        |      | 否   |
| action_code           | 业务操作编码         | varchar(32) |        |      | 否   |
| action_name           | 业务操作名称         | varchar(64) |        |      | 否   |
| is_paging             | 是否分页             | boolean     |        |      | 是   |
| data_permi_dept_alias | 数据权限的部门表别名 | varchar(32) |        |      | 是   |
| data_permi_user_alias | 数据权限的用户表别名 | varchar(32) |        |      | 是   |
| data_permi_permission | 数据权限的权限字符   | varchar(32) |        |      | 是   |
| action_permi_part     | 操作权限标识         | varchar(64) |        |      | 是   |
| create_by             | 创建人               | bigint(20)  |        |      | 否   |
| create_time           | 创建时间             | datetime    |        |      | 否   |
| update_by             | 更新人               | bigint(20)  |        |      | 是   |
| update_time           | 更新时间             | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_project_menu_action`
2. 外键: `fk_project_menu_action_menu_id`，`menu_id` 对应 `project_menu` 表中的 `dbid`
3. 唯一：`uk_project_menu_action_menu_id_object_action_code`，对应字段为 `menu_id`、`object_code` 和 `action_code`

## 索引

无

## 说明

1. 业务操作的基本信息是用表字段存，还是存到一个xml中？要先将这些字段都梳理出来