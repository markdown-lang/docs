# 数据库表结构

## 数据库表

1. [project(项目基本信息)](./project)
2. [project_member(项目成员)](./project_member)
3. [project_member_setting(项目成员级设置信息)](./project_member_setting)
4. [software(软件信息)](./software) - 后续基于此表扩展出软件下载等表结构
5. [account(账号信息)](./account)
6. [account_auth(账号授权)](./account_auth)
7. changelog - 变更历史
   1. [change_set(变更列表)](./changelog/change_set.md)
   2. [create_function_module(创建一个功能模块)](./changelog/create_function_module.md)
   3. [create_program_module(创建一个程序模块)](./changelog/create_program_module.md)
   4. [list_biz_op(查询列表的业务操作)](./changelog/list_biz_op.md)
   5. [change_set_executed(变更列表执行记录)](./changelog/change_set_executed.md)


一张表存储所有模板项目，设计、前端、后端
一张表存储一个项目引用的模板项目。


关于程序模块有两套表，一套表记录变更历史，一套表记录最新情况（或称为最终结果）。