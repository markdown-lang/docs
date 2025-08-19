# `db_column` - 数据库列

## 字段

| 字段名        | 注释           | 类型          | 默认值 | 可空 | 单位 |
| ------------- | -------------- | ------------- | ------ | ---- | ---- |
| dbid          | 主键           | bigint        |        | 否   |      |
| table_id      | 数据库表标识   | bigint        |        | 否   |      |
| name          | 列名           | varchar(64)   |        | 否   |      |
| comment       | 注释           | varchar(64)   |        | 否   |      |
| data_type     | 数据类型       | char(2)       |        | 否   |      |
| is_unsigned   | 是否无符号     | boolean       |        | 是   |      |
| max_length    | 最大长度       | int           |        | 是   |      |
| scale         | 标度           | tinyint       |        | 是   |      |
| description   | 描述           | varchar(256)  |        | 是   |      |
| is_primary    | 是否主键       | boolean       | false  | 是   |      |
| is_nullable   | 是否可空       | boolean       | true   | 是   |      |
| default_value | 默认值         | varchar(1024) |        | 是   |      |
| seq           | 序号           | tinyint       |        | 否   |      |
| db_unit       | 计量单位(存储) | char(4)       |        | 是   |      |
| ui_unit       | 计量单位(展示) | char(4)       |        | 是   |      |
| dict_type     | 字典类型       | varchar(32)   |        | 是   |      |
| bill_key      | 单据码         | varchar(32)   |        | 是   |      |
| create_by     | 创建人         | bigint        |        | 否   |      |
| create_time   | 创建时间       | datetime      |        | 否   |      |
| update_by     | 更新人         | bigint        |        | 是   |      |
| update_time   | 更新时间       | datetime      |        | 是   |      |

## 约束

1. 主键: `pk_db_column`
2. 外键: `fk_db_column_table_id`，`table_id` 关联 `db_table.dbid`
3. 唯一: `uk_db_column_table_id_name`，关联字段 `table_id` 和 `name`

## 索引

无

## 说明

1. `max_length(最大长度)` 的值：
   1. 当类型是 `varchar` 或 `char`，表示最大长度
   2. 当类型是 `decimal`，表示精度(precision)，包含了小数的位数
2. `scale(标度)` 只适用于小数类型，用来表示小数点后面的长度
3. `unsigned(无符号)` 用于数字类型，`true` 表示没有符号，即包含正数和负数，`false` 表示有符号，都是正数
4. `data_type(数据类型)` 的值详见 [数据库数据类型](../data/dict/2011_db_data_type.md)
5. `seq(序号)` 是基于数据库表的，从1开始计数
6. 主键约束、可空约束和默认值约束作用在一个字段上，所以在此表中定义
7. 增加一个功能，支持快速添加一些常规字段，如创建人、创建时间、修改人和修改时间等列，支持自定义常规字段
8. 计量单位的值详见 [计量单位](../data/dict/1002_measurement_unit.md)
   1. `db_unit(计量单位(存储))` 是数据存储时使用的计量单位
   2. `ui_unit(计量单位(展示))` 在维护界面显示的计量单位，默认跟 `db_unit(计量单位(存储))` 一致
9. `dict_type(字典类型)` 是字段关联的分类编码
10. `bill_key(单据码)` 是字段关联的单据编号，会指向单据编号的规则

## TODO

1. 如果是编码，则要跟编码表关联