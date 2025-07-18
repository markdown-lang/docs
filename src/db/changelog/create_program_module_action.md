# `create_program_module_action` - 创建一个程序模块的业务操作

是一个内嵌的标签，并不是一种变更，但可组成变更。

## 字段

| 字段名                   | 注释                 | 类型        | 默认值 | 主键 | 可空 |
| ------------------------ | -------------------- | ----------- | ------ | ---- | ---- |
| dbid                     | 主键                 | bigint      |        | 是   | 否   |
| project_id               | 项目标识             | bigint      |        |      | 否   |
| create_program_module_id | 创建程序模块标识     | bigint      |        |      | 否   |
| object_code              | 业务对象编码         | varchar(32) |        |      | 否   |
| object_name              | 业务对象名称         | varchar(32) |        |      | 否   |
| action_code              | 业务操作编码         | varchar(32) |        |      | 否   |
| action_name              | 业务操作名称         | varchar(64) |        |      | 否   |
| is_paging                | 是否分页             | boolean     |        |      | 是   |
| data_permi_dept_alias    | 数据权限的部门表别名 | varchar(32) |        |      | 是   |
| data_permi_user_alias    | 数据权限的用户表别名 | varchar(32) |        |      | 是   |
| data_permi_permission    | 数据权限的权限字符   | varchar(32) |        |      | 是   |
| action_permi_part        | 操作权限标识         | varchar(64) |        |      | 是   |
| create_by                | 创建人               | bigint      |        |      | 否   |
| create_time              | 创建时间             | datetime    |        |      | 否   |
| update_by                | 更新人               | bigint      |        |      | 是   |
| update_time              | 更新时间             | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_create_program_module_action`
2. 外键: 
   1. `fk_create_program_module_action_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_create_program_module_action_cpm_id`，`create_program_module_id` 关联 `create_program_module.dbid`
3. 唯一：`uk_create_program_module_action_cpm_id_object_action_code`，关联字段 `create_program_module_id`、`object_code` 和 `action_code`

## 索引

无

## 说明

1. `project_id(项目标识)` 是冗余字段，方便在项目层面操作数据
2. `action_code(业务操作编码)` 是需要全局唯一编码的，支持的业务操作有
   1. `queryList` - 列表，查询列表
   2. `queryOne` - 详情，（根据主键）查询单条
   3. `createOne` - 新增，新增单条
   4. `updateOne` - 更新，更新单条
   5. `deleteOne` - 删除，删除单条
3. 查询列表专用的属性：
   1. `is_paging(是否分页)`
   2. `data_permi_dept_alias(数据权限的部门表别名)`
   3. `data_permi_user_alias(数据权限的用户表别名)`
   4. `data_permi_permission(数据权限的权限字符)`
   5. 其他操作时，值为 `null`
4. `action_permi_part(操作权限标识)` 的值不为空，就意味着开启权限标识，否则没有开启