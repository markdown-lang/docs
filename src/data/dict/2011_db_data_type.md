# 数据库数据类型

## 基本信息

1. 编码ID: 2011
2. 编码(英文): db_data_type
3. 编码(中文): 数据库数据类型
4. 行业规范: 无

## 编码

| 序号 | 代码 | 代码含义   | 是否有效 |
| ---- | ---- | ---------- | -------- |
| 1    | 01   | BOOLEAN    | 有效     |
| 2    | 02   | CHAR       | 有效     |
| 3    | 03   | VARCHAR    | 有效     |
| 4    | 04   | NCHAR      | 有效     |
| 5    | 05   | NVARCHAR   | 有效     |
| 6    | 06   | CLOB       | 有效     |
| 7    | 07   | NUMBER     | 有效     |
| 8    | 08   | TINYINT    | 有效     |
| 9    | 09   | SMALLINT   | 有效     |
| 10   | 10   | MEDIUMINT  | 有效     |
| 11   | 11   | INT        | 有效     |
| 12   | 12   | BIGINT     | 有效     |
| 13   | 13   | FLOAT      | 有效     |
| 14   | 14   | DOUBLE     | 有效     |
| 15   | 15   | DECIMAL    | 有效     |
| 16   | 16   | CURRENCY   | 有效     |
| 17   | 17   | DATE       | 有效     |
| 18   | 18   | DATETIME   | 有效     |
| 19   | 19   | TIME       | 有效     |
| 20   | 20   | TIMESTAMP  | 有效     |
| 21   | 21   | UUID       | 有效     |
| 22   | 22   | BLOB       | 有效     |
| 23   | 23   | XML        | 有效     |
| 24   | 24   | JSON       | 有效     |
| 25   | 25   | TINYTEXT   | 有效     |
| 26   | 26   | MEDIUMTEXT | 有效     |
| 27   | 27   | LONGTEXT   | 有效     |
| 28   | 28   | TINYBLOB   | 有效     |
| 29   | 29   | MEDIUMBLOB | 有效     |
| 30   | 30   | LONGBLOB   | 有效     |

## 说明

1. 数据库通用的数据类型，liquibase 会转换为 mysql 或 oracle 等数据库专有的数据类型
2. 参考资料 [liquibase column](https://docs.liquibase.com/change-types/nested-tags/column.html)
3. tinyint：迷你整型，占用1个字节保存数据，能够表示256个数值
4. smallint：小整型，占用2个字节保存数据，能够表示65536个数值
5. mediumint：中整型，占用3个字节保存数据
6. int：标准整型，占用4个字节保存数据，42亿多
7. bigint：大整型，占用8个字节保存数据
8. clob 相当于 text