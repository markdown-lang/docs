# `change_set_file` - 变更关联的源码文件

记录每次变更调整了哪些文件，调整了多少行代码等。

## 字段

| 字段名             | 注释                     | 类型         | 默认值 | 可空 | 单位 |
| ------------------ | ------------------------ | ------------ | ------ | ---- | ---- |
| dbid               | 主键                     | bigint(20)   |        | 否   |      |
| change_set_id      | 变更集标识               | bigint       |        | 否   |      |
| biz_id             | 业务标识                 | bigint       |        | 否   |      |
| change_type        | 变更类型                 | varchar(16)  |        | 否   |      |
| file_path          | 源码文件相对路径         | varchar(512) |        | 否   |      |
| added_line_count   | 新增代码行数             | int          | 0      | 是   |      |
| removed_line_count | 删除代码行数             | int          | 0      | 是   |      |
| seq                | 序号                     | int          |        | 否   |      |
| before_commit_id   | 变更前的 git commit 标识 | varchar(64)  |        | 是   |      |
| create_by          | 创建人                   | bigint(20)   |        | 否   |      |
| create_time        | 创建时间                 | datetime     |        | 否   |      |
| update_by          | 更新人                   | bigint(20)   |        | 是   |      |
| update_time        | 更新时间                 | datetime     |        | 是   |      |

## 约束

1. 主键: `pk_change_set_file`
2. 外键: `fk_change_set_file_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：`uk_change_set_file_change_set_id_file_path`，关联字段 `change_set_id` 和 `file_path`

## 索引

无

## 说明

1. 一次变更关联到多个前端与后端文件
2. `seq(序号)` 是每次变更从 `1` 开始计数，按照前端往后端数据传递的顺序排列
3. `file_path(源码文件相对路径)` 相对项目的根目录（不包含根目录），不以 `/` 开头
4. `change_type(变更类型)` 的值为：`create`、`modify` 和 `delete`
5. `before_commit_id(变更前的 git commit 标识)` 记录变更前的 git commit id，可找到变更前的文件内容