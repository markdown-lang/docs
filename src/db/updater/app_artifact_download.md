# `app_artifact_download` - 安装包下载信息

安装包的下载信息。

## 字段

| 字段名      | 注释       | 类型        | 默认值 | 可空 | 单位 |
| ----------- | ---------- | ----------- | ------ | ---- | ---- |
| dbid        | 主键       | bigint(20)  |        | 否   |      |
| artifact_id | 安装包标识 | bigint      |        | 否   |      |
| ip          | ip地址     | varchar(64) |        | 是   |      |
| create_by   | 创建人     | bigint(20)  |        | 否   |      |
| create_time | 创建时间   | datetime    |        | 否   |      |
| update_by   | 更新人     | bigint(20)  |        | 是   |      |
| update_time | 更新时间   | datetime    |        | 是   |      |
|             |
## 约束

1. 主键: `pk_app_artifact_download`
2. 外键: `fk_app_artifact_download_artifact_id`，`artifact_id` 关联 `app_artifact.dbid`
3. 唯一：无

## 索引

无

## 说明

无
