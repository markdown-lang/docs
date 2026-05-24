# 菜单组

## 创建菜单组的 liquibase 脚本

1. 存放在 `src/main/resources/db/changelog/table/system/sys_menu/` 文件夹下
2. 文件名为 `{yyyyMMddHHmm}_insert_group_{group_key}.xml`
3. id 为 `{yyyyMMddHHmmssSSS}-{流水号,6位}`，尽量全局唯一

## 创建菜单的 liquibase 脚本

1. 存放在 `src/main/resources/db/changelog/table/system/sys_menu/` 文件夹下
2. 文件名为 `{yyyyMMddHHmm}_insert_menu_{group_key}.xml`
3. id 为 `{yyyyMMddHHmmssSSS}-{流水号,6位}`，尽量全局唯一


## 解释

1. `id` 时间戳，并且确保唯一，是为了在 `databasechangelog` 表中查数据时，id能按照写入时间正排序