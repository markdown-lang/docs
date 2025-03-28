# `project_member_setting` - 项目成员级设置信息

项目成员级别的设置，即同一个项目，不同用户对同一个选项可设置不同的值。

项目成员级别的设置是由各成员设置的。项目级别的设置先于项目成员级别的设置。

即使对该项目已没有权限，则之前配置过的信息也不能丢失。

## 字段

| 字段名            | 注释                     | 类型         | 默认值 | 主键 | 可空 |
| ----------------- | ------------------------ | ------------ | ------ | ---- | ---- |
| dbid              | 主键                     | bigint(20)   |        | 是   | 否   |
| project_id        | 项目标识                 | bigint(20)   |        |      | 否   |
| member_id         | 成员标识                 | bigint(20)   |        |      | 否   |
| local_root_dir    | 本地存放项目资料的根目录 | varchar(128) |        |      | 是   |
| local_db_root_dir | 本地存放表结构的根目录   | varchar(128) |        |      | 是   |
| create_by         | 创建人                   | bigint(20)   |        |      | 否   |
| create_time       | 创建时间                 | datetime     |        |      | 否   |
| update_by         | 更新人                   | bigint(20)   |        |      | 是   |
| update_time       | 更新时间                 | datetime     |        |      | 是   |

## 约束

1. 主键: `pk_project_member_setting`
2. 外键: 
   1. `fk_project_member_setting_project_id`，`project_id` 关联 `project.dbid`
   2. `fk_project_member_setting_member_id`，`member_id` 关联 `sys_user.user_id`
3. 唯一：`uk_project_member_setting_project_id_member_id`，关联字段 `project_id`、`member_id`

## 索引

无

## 说明

1. 本表主要用于存储用户的开发环境专有信息，这些信息因人而异
2. 本表没有跟 `project_member(项目成员)` 的 `dbid` 关联，是为了当删除授权信息后，不删除用户级的配置信息
3. `local_root_dir(本地存放项目资料根目录)` 是开发人员本地存放项目资料（主要是 git 仓库源码）的根目录，是绝对路径
4. `local_db_root_dir(本地存放表结构的根目录)` 是开发人员本地存放表结构设计文档、编码数据的根目录，是绝对路径
5. 约定同一个项目中的多个git仓库存在同一个文件夹下