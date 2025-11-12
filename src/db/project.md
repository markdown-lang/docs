# `project` - 项目基本信息

## 字段

| 字段名             | 注释         | 类型         | 默认值 | 可空 | 单位 |
| ------------------ | ------------ | ------------ | ------ | ---- | ---- |
| dbid               | 主键         | bigint       |        | 否   |      |
| name               | 名称         | varchar(64)  |        | 否   |      |
| label              | 显示名       | varchar(64)  |        | 否   |      |
| description        | 描述         | varchar(128) |        | 是   |      |
| is_private         | 是否私有     | boolean      | true   | 否   |      |
| last_active_time   | 最近活动时间 | datetime     |        | 否   |      |
| init_mode          | 初始化方式   | char(2)      | 01     | 否   |      |
| status             | 状态         | char(2)      | 01     | 否   |      |
| status_change_by   | 状态变更人   | bigint       |        | 否   |      |
| status_change_time | 状态变更时间 | datetime     |        | 否   |      |
| create_by          | 创建人       | bigint       |        | 否   |      |
| create_time        | 创建时间     | datetime     |        | 否   |      |
| update_by          | 更新人       | bigint       |        | 是   |      |
| update_time        | 更新时间     | datetime     |        | 是   |      |

## 约束

1. 主键: `pk_project`
2. 外键: 无
3. 唯一：`uk_project_name_create_by`，关联字段 `name` 和 `create_by`

## 索引

无

## 说明

1. `name(名称)` 必须由字母、数字、表情符号、下划线或中划线组成。其余字符无效，如空格等
2. `label(显示名)` 必须简短，任意字符都是有效的，用于向用户提供友好名称
3. `description(描述)` 用于大篇幅展开描述
4. `is_private(是否私有)` 用于表示项目可见性，`true` 表示私有，`false` 表示公开
5. `last_active_time(最近活动时间)` 记录项目内容的最近修改时间，而 `update_by` 记录的是项目基本信息的最近修改时间
6. `status(状态)` 的值：
   1. `01` - 创建，包括新建与导入两种方式
   2. `02` - 开发中
   3. `09` - 归档
7. `init_mode(初始化方式)` 是指以什么方式创建的项目，值为：
   1. `01` - 新建
   2. `02` - 导入
8. `status_change_by(状态变更人)`，新增记录时，与 `create_by(创建人)` 相同
9. `status_change_time(状态变更时间)`，新增记录时，与 `create_time(创建时间)` 相同