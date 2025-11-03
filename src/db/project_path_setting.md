# `project_path_setting` - 项目级路径配置信息

代码生成相关的配置信息，都是相对项目根目录的路径。

## 字段

| 字段名      | 注释     | 类型         | 默认值 | 可空 | 单位 |
| ----------- | -------- | ------------ | ------ | ---- | ---- |
| dbid        | 主键     | bigint       |        | 否   |      |
| project_id  | 项目标识 | bigint       |        | 否   |      |
| prop_key    | 属性键   | varchar(32)  |        | 否   |      |
| prop_value  | 属性值   | varchar(256) |        | 否   |      |
| seq         | 序号     | tinyint      | 1      | 否   |      |
| create_by   | 创建人   | bigint       |        | 否   |      |
| create_time | 创建时间 | datetime     |        | 否   |      |
| update_by   | 更新人   | bigint       |        | 是   |      |
| update_time | 更新时间 | datetime     |        | 是   |      |

## 约束

* 主键: `pk_project_path_setting`
* 外键: `fk_project_path_setting_project_id`，`project_id` 关联 `project.dbid`
* 唯一：`uk_project_path_setting_project_id_prop_key_seq`, 关联字段 `project_id`、`prop_key` 和 `seq`

## 索引

无

## 说明

1. 注意，要明确哪些属性只能设置一次，哪些属性可以设置多次
2. 属性值为路径时，其中包含 git 仓库或子模块片段
3. 支持的属性有：
   1. `entityBaseClassPath` - 实体类的基类路径，使用 `/` 分割，且不以 `/` 开头，1个
   2. `mathUtilClassPath` - 数学工具类的路径，包含 `multiple100`、`multiple1000`、`divide100`、`divide1000` 静态方法，使用 `/` 分割，且不以 `/` 开头，1个
   3. `controllerBaseClassPath` - 控制器类的基类路径，使用 `/` 分割，且不以 `/` 开头，1个
   4. `javaBasePackage` - 存放业务代码的基础包路径，包含模块项目名，使用 `/` 分割，且不以 `/` 开头，n个
   5. `mybatisXmlRootDir` - 存放 mybatis XML 配置文件的根目录，使用 `/` 分割，且不以 `/` 开头，n个
   6. `docsDbRootDir` - 存放表结构设计文档的根目录，使用 `/` 分割，且不以 `/` 开头，n个
   7. `uiViewsRootDir` - 存放页面的根目录，使用 `/` 分割，且不以 `/` 开头，1个
   8. `uiTypesRootDir` - 存放类型定义的根目录，使用 `/` 分割，且不以 `/` 开头，1个
   9. `uiApisRootDir` - 存放 api 定义的根目录，使用 `/` 分割，且不以 `/` 开头，1个
4. `seq(序号)` 是每个属性，从 `1` 开始编码