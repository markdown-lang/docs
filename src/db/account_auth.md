# `account_auth` - 账号授权

哪些用户可以看到这些账号信息，默认创建者能看到自己登记的账号，即在此表中存一条记录。

## 字段

| 字段名       | 注释         | 类型     | 默认值 | 主键 | 可空 |
| ------------ | ------------ | -------- | ------ | ---- | ---- |
| dbid         | 主键         | bigint   |        | 是   | 否   |
| account_id   | 账号标识     | bigint   |        |      | 否   |
| user_id      | 用户标识     | bigint   |        |      | 否   |
| start_time   | 授权开始时间 | datetime |        |      | 否   |
| end_time     | 授权结束时间 | datetime |        |      | 是   |
| access_level | 访问级别     | char(4)  |        |      | 否   |
| create_by    | 创建人       | bigint   |        |      | 否   |
| create_time  | 创建时间     | datetime |        |      | 否   |
| update_by    | 更新人       | bigint   |        |      | 是   |
| update_time  | 更新时间     | datetime |        |      | 是   |

## 约束

1. 主键: `pk_account_auth`
2. 外键: 
   1. `fk_account_auth_account_id`，`account_id` 关联 `account.dbid`
   2. `fk_account_auth_user_id`，`user_id` 关联 `sys_user.user_id`
3. 唯一: `uk_account_auth_account_id_user_id`，关联字段 `account_id` 和 `user_id`

## 索引

无

## 说明

1. `user_id(用户标识)` 是被授权人标识
2. `end_time(授权结束时间)`，值为 `null` 表示永久授权
3. `access_level(访问级别)` 的值详见[账号访问级别](../data/dict/2001_account_access_level)
4. `create_by(创建人)` 是授权人标识
