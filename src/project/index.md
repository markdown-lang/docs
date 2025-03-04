# 项目信息

存储项目基本信息，如项目名称、mysql 数据库访问信息、redis 数据库访问信息。

## 基本信息

1. 项目名称：project_name
2. 项目显示名: project_label
3. 项目描述: project_description

## 本地开发环境

每位开发者本地环境的配置信息各不相同，所以此处使用变量的方式引用本地配置的信息。

### mysql

1. host: ${local.mysql.host}
2. port: ${local.mysql.port}
3. user: ${local.mysql.user}
4. password: ${local.mysql.password}
5. database: ${local.mysql.{project_name}.database}

### redis

1. host: ${local.redis.host}
2. port: ${local.redis.port}
3. user: ${local.redis.user}
4. password: ${local.redis.password}
5. database: ${local.redis.database}