# createProgramModule

`createProgramModule` 变更，用于创建一个程序模块。

## 属性

| 名称       | 说明                                                 | 必填 |
| ---------- | ---------------------------------------------------- | ---- |
| name       | 模块名称，即菜单名                                   | 是   |
| groupId    | 分组标识，即功能模块的菜单标识                       | 是   |
| menuId     | 本模块的菜单标识                                     | 是   |
| seq        | 菜单序号，用于排序，可相对于父菜单排序，也可全局排序 | 是   |
| path       | 路由地址                                             | 是   |
| component  | 组件路径                                             | 是   |
| icon       | 图标                                                 | 否   |
| permission | 权限标识                                             | 否   |
| visible    | 是否可见                                             | 是   |
| mainTable  | 主表表名，只允许一张主表                             | 否   |
| subTables  | 子表表名，多张子表时用英文逗号分割                   | 否   |

## 子标签

1. [listBusinessOperate](./nested-tags/listBusinessOperate.md)

## 说明

1. `icon` 的值由两部分组成，格式为 `{icon库}:{图标名}`，常用的 icon 库为
   1. `local` - 自定义的 icon 图标
   2. `bootstrap` - [Bootstrap Icons](https://icons.getbootstrap.com/)
   3. `ionicons5` - [ionicons5](https://xicons.org)
2. `visible` 指本菜单是否需要显示在菜单列表中，默认为 `true`，在页面中路由跳转的子页面，通常不需要在菜单中显示，它是依附于父页面的
3. `permission` 中有值，则需要启用

## 示例

```xml
<changeset>
    <createProgramModule>
        <listBusinessOperate/>
        <addBusinessOperate/>
        <changeStatusBusinessOperate
            columnName="{状态字段名}"
        />
    </createProgramModule>
</changeset>
```

注意，一套实现支持哪些业务操作，是需要明确指出的。
有状态字段的表，都会带一张附表，其中记录每一条记录的每一次状态变更。



在表中登记某一套实现，以及其中的具体细节。

记录下一个程序模块与表的关系，程序模块中的业务操作，程序模块关联的源码文件。


维护一下信息：

1. 程序模块菜单信息
2. 程序模块的页面模板
3. 程序模块中的业务操作列表
4. 程序模块与表的关系

