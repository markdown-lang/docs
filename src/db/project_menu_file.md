# `project_menu_file` - 程序模块关联的源码文件

跟踪一个程序模块关联了哪些源码文件。记录的是结果，过程记录在 `change_set_file` 表中。

## 字段

| 字段名          | 注释             | 类型         | 默认值 | 可空 | 单位 |
| --------------- | ---------------- | ------------ | ------ | ---- | ---- |
| dbid            | 主键             | bigint       |        | 否   |      |
| menu_id         | 菜单标识         | bigint       |        | 否   |      |
| file_path       | 源码文件相对路径 | varchar(512) |        | 否   |      |
| init_line_count | 初始代码行数     | int          | 0      | 否   |      |
| seq             | 序号             | int          |        | 否   |      |
| create_by       | 创建人           | bigint       |        | 否   |      |
| create_time     | 创建时间         | datetime     |        | 否   |      |
| update_by       | 更新人           | bigint       |        | 是   |      |
| update_time     | 更新时间         | datetime     |        | 是   |      |

## 约束

1. 主键: `pk_project_menu_file`
2. 外键: `fk_project_menu_file_menu_id`，`menu_id` 关联 `project_menu.dbid`
3. 唯一：`uk_project_menu_file_menu_id_file_path`，关联字段 `menu_id` 和 `file_path`

## 索引

无

## 说明

1. 一个程序模块会关联到多个前端与后端文件
2. `seq(序号)` 是每个菜单从 `1` 开始计数，按照前端往后端数据传递的顺序排列
3. `file_path(源码文件相对路径)` 相对**总**项目的根目录（不包含根目录），不以 `/` 开头
4. `init_line_count(初始代码行数)` 存的是初始生成该文件时，自动生成的代码行数，一处应用是比较当前行与自动生成的代码行数