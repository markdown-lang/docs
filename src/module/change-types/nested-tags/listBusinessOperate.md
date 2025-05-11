# listBusinessOperate

`listBusinessOperate` 标签定义查询列表的业务操作。

## 属性

| 名称              | 说明             | 默认值 | 必填 |
| ----------------- | ---------------- | ------ | ---- |
| code              | 业务操作编号     |        | 是   |
| name              | 业务操作名称     |        | 是   |
| paging            | 是否分页         | true   | 是   |
| dataPermission    | 是否开启数据权限 | true   | 是   |
| operatePermission | 是否开启操作权限 | true   | 是   |

## 说明

1. `code` 的值为 `list-{业务的英文名}`，业务的英文名通常是主表的表名，全局唯一
2. `dataPermission` 的值为 `true`，则支持按部门过滤与按用户过滤数据
3. `operatePermission` 的值为 `true`，则会生成权限标识