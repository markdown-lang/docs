# 项目信息

存储项目基本信息，如项目名称、mysql 数据库访问信息、redis 数据库访问信息。

## 基本信息

1. 项目名称：project_name
2. 项目显示名: project_label
3. 项目描述: project_description

## gitlab

description 中有换行时，写在一行，使用 `\n` 分割。
支持多层分组。

1. Server Url: {{gitlab.server.url}}
2. 分组: 
   1. {{gitlab.group.name}}({{gitlab.group.description}})
   2. {{gitlab.group.name}}({{gitlab.group.description}})
3. 项目:
4. 