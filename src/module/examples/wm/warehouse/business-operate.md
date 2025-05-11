# 仓库基本信息

## 查询仓库列表

1. 类型: `list`
2. 编号: `list-warehouse`
3. 代码块：
   1. 功能
      1. 分页: 是
      2. 数据权限：是
      3. 功能权限：是
      4. API日志：否
   2. 前端
      1. 变量
         1. `queryParams`
         2. `warehouseList`
      2. 函数
         1. `onQueryWarehouseList`
            1. warehouseList = api:fetchWarehouseList(queryParams)
      3. UI
         1. `query-panel` - 查询条件面板，编号 `list-warehouse-params`
            1. data - `queryParams`
         2. `action` - 查询按钮，编号 `list-warehouse-action`
            1. click - `onQueryWarehouseList`
         3. `out` - 数据表格，编号 `list-warehouse-table`
            1. data - `warehouseList`
   3. 后端
      1. `api` - `GET:wm/warehouses`
      2. `controller` - `WarehouseController#selectWarehouseList`
      3. `service` - `IWarehouseService#selectWarehouseList`
      4. `mapper` - `WarehouseMapper#selectWarehouseList`
      5. `domain` - `Warehouse`
      6. `table` - `warehouse`



WarehouseController#selectWarehouseList 中的代码如何写，主要看 type 的值 `list`。

有两个信息
1. 代码
2. 代码的位置

函数描述的是变量之间的关系
1. 如转换关系


目标，只描述意图，不描述实现细节。
细节放在具体的业务操作实现中去。