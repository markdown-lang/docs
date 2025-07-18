# 页面模板

模板按 `{组件库}/{模板套装}` 分组。

页面中的扩展点是严格跟业务操作关联的。一个页面明确为哪些业务操作预留扩展点，这个页面就从业务操作池中获取对应的信息生成代码，如果没有相关的业务操作信息，则移除相关代码。

## 单表维护页面

1. list.vue 页面中有查询列表操作，跳转到新增页面操作，跳转到查看页面操作等
2. new.vue 页面中有新增数据操作，跳转到列表页面操作
3. edit.vue 页面中有查询单条记录操作，修改单条记录的操作，跳转到列表页面的操作

有些操作已固化在模板中，如页面之间来回跳转。

如在一个页面中有一个业务操作，查询列表。

```vue
<script setup lang="ts">
import { 
  type DataTableColumns, 
  type PaginationProps, 
  NDataTable, 
} from 'naive-ui';

</script>
<template>
    <div>
        <template data-panel="query">
            <n-form>

            <n-form>
        </template>
        <template data-panel="list">
            <n-data-table
                :columns="columns"
                :data="dataList"
                :pagination="pagination"
                :loading="loading"
                :row-props="rowProps"
                bordered
            />
        </template>
    </div>
</template>
```

以上是最终生成的模板，在实现时采用模板方法模式，在扩展点插入代码。


1. 程序模块菜单信息
2. 程序模块的页面模板
3. 程序模块中的业务操作列表
4. 程序模块与表的关系

单表，则选择模板后，就直观的让选择一张表。这个是很明确的。
一个模板中支持哪些业务操作，一部分是固定的，一部分也是可以扩展进去的。所以默认显示固定的业务操作列表，又允许用户选择添加扩展的业务操作。

界面操作流程，就为用户先录入菜单基本信息，然后选择页面模板，接着选择数据库表，然后为每个操作配置信息。

列表查询操作
1. 设置查询条件，UI面板
2. 设置数据列表，UI面板
新增数据、修改数据（支持多个业务操作配一套数据，也可以分开定义）
1. form 表单