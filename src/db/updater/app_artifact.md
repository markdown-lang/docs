# `app_artifact` - 安装包信息

一个版本有多个操作系统，多个架构的安装包。

## 字段

| 字段名         | 注释         | 类型          | 默认值 | 可空 | 单位 |
| -------------- | ------------ | ------------- | ------ | ---- | ---- |
| dbid           | 主键         | bigint(20)    |        | 否   |      |
| version_id     | 版本标识     | bigint        |        | 否   |      |
| target         | 操作系统     | varchar(16)   |        | 否   |      |
| arch           | 架构信息     | varchar(16)   |        | 否   |      |
| app_file_id    | App文件标识  | bigint        |        | 否   |      |
| app_file_name  | App文件名    | varchar(64)   |        | 否   |      |
| sig_file_id    | 签名文件标识 | bigint        |        | 否   |      |
| sig_file_name  | 签名文件名   | varchar(64)   |        | 否   |      |
| signature      | 签名内容     | varchar(1024) |        | 否   |      |
| download_url   | 下载地址     | varchar(64)   |        | 否   |      |
| download_count | 下载次数     | int unsigned  | 0      | 否   |      |
| create_by      | 创建人       | bigint(20)    |        | 否   |      |
| create_time    | 创建时间     | datetime      |        | 否   |      |
| update_by      | 更新人       | bigint(20)    |        | 是   |      |
| update_time    | 更新时间     | datetime      |        | 是   |      |

## 约束

1. 主键: `pk_app_artifact`
2. 外键: 
   1. `fk_app_artifact_version_id`，`version_id` 关联 `app_version.dbid`
   2. `fk_app_artifact_app_file_id`，`app_file_id` 关联 `sys_upload_file_info.dbid`
   3. `fk_app_artifact_sig_file_id`，`sig_file_id` 关联 `sys_upload_file_info.dbid`
3. 唯一：
   1. `uk_app_artifact_version_id_target_arch`，关联字段 `version_id`、`target` 和 `arch`
   2. `uk_app_artifact_app_file_id`，关联字段 `app_file_id`
   3. `uk_app_artifact_sig_file_id`，关联字段 `sig_file_id`

## 索引

无

## 说明

1. 没有为 `signature(签名)` 添加唯一索引，因为提示 “Specified key was too long; max key length is 3072 bytes”
