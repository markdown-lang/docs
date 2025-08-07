# `change_set_log` - 变更执行日志

一次变更记录一次变更日志，json格式。

## 字段

| 字段名        | 注释       | 类型       | 默认值 | 可空 | 单位 |
| ------------- | ---------- | ---------- | ------ | ---- | ---- |
| dbid          | 主键       | bigint(20) |        | 否   |      |
| change_set_id | 变更集标识 | bigint     |        | 否   |      |
| biz_id        | 业务标识   | bigint     |        | 否   |      |
| content       | 内容       | json       |        | 否   |      |
| create_by     | 创建人     | bigint(20) |        | 否   |      |
| create_time   | 创建时间   | datetime   |        | 否   |      |
| update_by     | 更新人     | bigint(20) |        | 是   |      |
| update_time   | 更新时间   | datetime   |        | 是   |      |

## 约束

1. 主键: `pk_change_set_log`
2. 外键: `fk_change_set_log_change_set_id`，`change_set_id` 关联 `change_set.dbid`
3. 唯一：`uk_change_set_log_change_set_id`，关联字段 `change_set_id`

## 索引

无

## 说明

1. 日志示例
   ```json
    [
      { "type": "group", "title": "一次操作"},
      { "type": "item", "content": "", "path": "相对路径", "addedLineCount": 0, "removedLineCount": 0}
    ]
   ```