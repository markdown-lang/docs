# `project_menu_action` - 程序模块的业务操作

存储一个程序模块的最新的业务操作。changeset系列表存的是过程数据，本表中存的是结果数据。

## 字段

| 字段名                     | 注释                 | 类型        | 默认值 | 可空 | 单位 |
| -------------------------- | -------------------- | ----------- | ------ | ---- | ---- |
| dbid                       | 主键                 | bigint      |        | 否   |      |
| menu_id                    | 菜单标识             | bigint      |        | 否   |      |
| object_code                | 业务对象编码         | varchar(32) |        | 否   |      |
| object_name                | 业务对象名称         | varchar(32) |        | 否   |      |
| action_code                | 业务操作编码         | varchar(32) |        | 否   |      |
| action_name                | 业务操作名称         | varchar(64) |        | 否   |      |
| is_paging                  | 是否分页             | boolean     |        | 是   |      |
| data_permission_dept_alias | 数据权限的部门表别名 | varchar(32) |        | 是   |      |
| data_permission_user_alias | 数据权限的用户表别名 | varchar(32) |        | 是   |      |
| data_permission            | 数据权限的权限字符   | varchar(32) |        | 是   |      |
| action_permission          | 操作权限字符         | varchar(64) |        | 是   |      |
| create_by                  | 创建人               | bigint      |        | 否   |      |
| create_time                | 创建时间             | datetime    |        | 否   |      |
| update_by                  | 更新人               | bigint      |        | 是   |      |
| update_time                | 更新时间             | datetime    |        | 是   |      |

## 约束

1. 主键: `pk_project_menu_action`
2. 外键: `fk_project_menu_action_menu_id`，`menu_id` 关联 `project_menu.dbid`
3. 唯一：`uk_project_menu_action_menu_id_object_action_code`，关联字段 `menu_id`、`object_code` 和 `action_code`

## 索引

无

## 说明

1. `action_code(业务操作编码)` 是需要全局唯一编码的，支持的业务操作有
   1. `queryList` - 列表，查询列表
   2. `queryOne` - 详情，（根据主键）查询单条
   3. `createOne` - 新增，新增单条
   4. `updateOne` - 更新，更新单条
   5. `deleteOne` - 删除，删除单条
2. 查询列表专用的属性：
   1. `is_paging(是否分页)`
   2. `data_permission_dept_alias(数据权限的部门表别名)`
   3. `data_permission_user_alias(数据权限的用户表别名)`
   4. `data_permission_permission(数据权限的权限字符)`，角色的权限字符，多个时用英文逗号分割，详见 [若依的注解参数说明](https://doc.ruoyi.vip/ruoyi/document/htsc.html)
   5. 其他操作时，值为 `null`
3. `action_permission(操作权限字符)` 的值不为空，就意味着开启权限字符，否则没有开启