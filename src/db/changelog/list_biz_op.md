# `list_biz_op_cpm` - 查询列表的业务操作

是一个内嵌的标签，并不属于变更，但可组成变更。
及时嵌套标签相同，也不存在一张表内，而是为不同的变更，分别定义嵌套标签表。
表名以变更类型结尾，如 `cpm` 是 `create program module` 的简写。

## 字段

| 字段名                   | 注释             | 类型        | 默认值 | 主键 | 可空 |
| ------------------------ | ---------------- | ----------- | ------ | ---- | ---- |
| dbid                     | 主键             | bigint      |        | 是   | 否   |
| project_id               | 项目标识         | bigint      |        |      | 否   |
| create_program_module_id | 创建程序模块标识 | bigint      |        |      | 否   |
| code                     | 业务操作编码     | varchar(32) |        |      | 否   |
| name                     | 业务操作名称     | varchar(64) |        |      | 否   |
| is_paging                | 是否分页         | boolean     | true   |      | 否   |
| enable_data_permi        | 开启数据权限     | boolean     | true   |      | 否   |
| enable_op_permi          | 开启操作权限     | boolean     | true   |      | 否   |
| db_table_name            | 表名             | varchar(32) |        |      | 是   |
| create_by                | 创建人           | bigint      |        |      | 否   |
| create_time              | 创建时间         | datetime    |        |      | 否   |
| update_by                | 更新人           | bigint      |        |      | 是   |
| update_time              | 更新时间         | datetime    |        |      | 是   |

## 约束

1. 主键: `pk_list_biz_op_cpm`
2. 外键: 
   1. `fk_list_biz_op_cpm_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_list_biz_op_cpm_create_program_module_id`，`create_program_module_id` 关联 `create_program_module.dbid`
3. 唯一：`uk_list_biz_op_cpm_create_program_module_id`，关联字段 `create_program_module_id`

## 索引

无

## 说明

1. `project_id(项目标识)` 是冗余字段，方便在项目层面操作数据