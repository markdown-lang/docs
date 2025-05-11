# Change Types

以 add 开头的，都支持添加多个；对应的 remove 操作，也支持移除多个。

1. `createSubSystem` - 创建一个子系统，空目录
2. `removeEmptySubSystem` - 移除一个空的子系统，如果有功能模块，则提示不能移除
3. `createFunctionalModule` - 创建一个功能模块，空目录
4. `removeEmptyFunctionalModule` - 移除一个空的功能模块，如果有程序模块，则提示不能移除
5. [createProgramModule](./createProgramModule.md) - 创建一个程序模块
6. `removeProgramModule` - 移除一个程序模块，注意不移除被其他模块引用的代码块，只是引用数减1
7. 添加业务操作
   1. `addListBusinessOperate` - 新增一个查询列表的业务操作
   2. 
8. `removeBusinessOperates` - 移除业务操作
9.  `addUIQueryParams` - 在 UI 添加查询条件，ui
10. `removeUIQueryParams` - 在 UI 移除查询条件，ui
11. `addUITableColumns` - 在 UI 表格中添加列
12. `removeUITableColumns` - 在 UI 表格中移除列
13. `addDBTableColumns` - 在数据库表中添加列
14. `removeDbTableColumns` - 在数据表中移除列


## 嵌套标签

1. [listBusinessOperate](./nested-tags/listBusinessOperate.md) - 查询列表业务操作
2. `uiQueryParam` - UI 中，一个查询条件
3. `uiTableColumn` - UI 中，表格中的一列
4. `dbTableColumn` - 数据库中，表格中的一列

## 待确认

一种设计是定义一个业务操作变更，它可以容纳所有业务操作；
另一种设计是为每一个业务操作定义各自的标签
每一种业务操作，传入的信息有差异。

