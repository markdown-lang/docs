# 模板项目

为一个模板项目添加一个配置文件，文件名为 `template.json`。

为模板项目配置相关信息，包括以下三个方面：

1. 组成项目的子模块列表
2. 关键文件路径与文件夹路径
3. 实例化项目时执行的操作

为自动化创建项目和配置项目提供信息。整体结构为：

```json
{
   "modules": [],
   "paths": {},
   "actions": [],
}
```

modules 和 paths 中包含会被替换名字时，直接使用变量表达式。

## Modules

一个项目中的子模块信息，主要包括：

1. `name` - 模块名，即目录名，如果目录名是动态替换的，则使用使用被替换后的变量，如 `"name": "{{project_name}}-server"`
1. `type` - 模块分类，跟 [子模块内容分类](../data/dict/2007_project_module_content_type.md) 保持一致，值为
   1. `program-manage`      项目管理
   2. `design-docs`         设计文档
   3. `backend-business`    后端业务代码
   4. `backend-system`      后端系统管理代码
   5. `frontend-business`   前端业务代码
   6. `browser-business`    浏览器端业务代码
   7. `mobile-business`     移动端业务代码
   8. `pc-business`         桌面端业务代码
   9. `help-docs`           帮助文档
2. `language` - 一个项目的主编程语言，跟 [编程语言](../data/dict/2008_program_language.md) 保持一致，值为
   1. `Java`      
   2. `TypeScript`
   3. `Markdown`  

```json
{
   "name": "",
   "type": "",
   "language": ""
}
```

## Paths

一个文件的路径或者文件夹的路径，相对于当前项目(不是子模块)根目录的路径。支持的路径信息与 [project_path_setting](../db/project_path_setting.md) 表中“支持的属性”保持一致

1. `entityBaseClassPath` - 实体类的基类路径，使用 `/` 分割，且不以 `/` 开头，1个
2. `mathUtilClassPath` - 数学工具类的路径，包含 `multiple100`、`multiple1000`、`divide100`、`divide1000` 静态方法，使用 `/` 分割，且不以 `/` 开头，1个
3. `controllerBaseClassPath` - 控制器类的基类路径，使用 `/` 分割，且不以 `/` 开头，1个
4. `javaBasePackageList` - 存放业务代码的基础包路径，包含模块项目名，使用 `/` 分割，且不以 `/` 开头，n个
5. `mybatisXmlRootDirList` - 存放 mybatis XML 配置文件的根目录，使用 `/` 分割，且不以 `/` 开头，n个
6. `docsDbRootDirList` - 存放表结构设计文档的根目录，使用 `/` 分割，且不以 `/` 开头，n个
7. `uiViewsRootDir` - 存放页面的根目录，使用 `/` 分割，且不以 `/` 开头，1个
8. `uiTypesRootDir` - 存放类型定义的根目录，使用 `/` 分割，且不以 `/` 开头，1个
9. `uiApisRootDir` - 存放 api 定义的根目录，使用 `/` 分割，且不以 `/` 开头，1个

```json
{
   "entityBaseClassPath": "a/b/BaseEntity.java",
   "mathUtilClassPath": "a/b/MathUtil.java",
   "controllerBaseClassPath": "a/b/BaseController.java",
   "javaBasePackageList": ["a/b/c", "a/d/e"],
   "mybatisXmlRootDirList": ["a/b/c", "a/d/e"],
   "docsDbRootDirList": ["a/db", "b/db"],
   "uiViewsRootDir": "a/b/views",
   "uiTypesRootDir": "a/b/types",
   "uiApisRootDir": "a/b/api"
}
```

注意，当有多个时，此处的变量名以 List 结尾。但属性名是不会以 List 结尾的，如 `javaBasePackageList` 与 `javaBasePackage`。

## Actions

以下设计取执行某项操作这个隐喻。

会分两个阶段执行操作，第一个阶段是在 push 之前，第二个阶段是在 push 之后。

### 模板替换语法

一个项目的模板配置信息存在 `template.json` 文件中，使用 `json` 格式定义配置文件。
不论是修改文件中的内容，还是修改文件名，都可以归类为一种操作，即修改文本。

#### 替换文件中的内容

字段说明

1. `action` - `replace-text` 表示替换文件中的内容
2. `when`
   1. `before-push` - 修改会提交到远端 git 仓库
   2. `after-push` - 修改只应用于开发者自己的电脑
3. `path` - 文件的相对路径，相对于项目的根目录
4. `changes` - 数组
   1. `row` - 行索引，从0开始计数，-1表示最后一行
   2. `column` - 列索引，从0开始计数，是 `from_value` 中第一个字的列索引，即包含 `from_value` 的第一个字符
   3. `from_value` - 需被替换的文本
   4. `to_value` - 使用此变量的值替换，使用 `{{变量名}}` 来传入变量，变量表达式遵循 [handlebars](https://handlebarsjs.com) 规范

使用 `to_value` 指定变量的值替换掉 `from_value` 指定的文本。当前仅支持一行替换一次。

示例

```json
[{
    "action": "replace-text",
    "when": "before-push",
    "path": "you/file/path",
    "changes": [{
        "row": 1,
        "column": 2,
        "from_value": "被替换的文本",
        "to_value": "{{project_name}}"
    }]
}]
```

#### 修改文件夹或文件名称

要放在替换文件内容的后面。

字段说明。

1. `action` - `rename-dir` 表示修改的是最后一层文件夹的名称
2. `when`
   1. `before-push` - 修改会提交到远端 git 仓库
   2. `after-push` - 修改只应用于开发者自己的电脑
3. `path` 
   1. 文件的相对路径，相对于项目的根目录，不需要以 `/` 开头，多层目录以 `/` 分割
   2. `.` 表示当前目录，即项目的根目录，修改根目录的操作通常是最后一个操作
4. `changes` - 数组
   1. `row` - 行索引，值为-1，表示路径的最后一段
   2. `column` - 列索引，从0开始计数，是 `from_value` 中第一个字的列索引，即包含 `from_value` 的第一个字符
   3. `from_value` - 需被替换的文本，只替换匹配的文本
   4. `to_value` - 使用此变量的值替换，使用 `{{变量名}}` 传入变量，，变量表达式遵循 [handlebars](https://handlebarsjs.com) 规范

示例

```json
[{
    "action": "rename-dir",
    "when": "before-push",
    "path": "you/file/path",
    "changes": [{
        "row": -1,
        "column": 0,
        "from_value": "被替换的文件夹名称，可以替换一部分",
        "to_value": "`{{project_name}}`"
    }]
}]
```

注意，遇到以下情况时，操作的先后顺序至关重要：

1. 如果先修改文件夹名称，再修改文件夹里的文件，需要将修改顺序调整为先修改文件的内容，再重命名文件夹；
2. 如果一段路径要修改两次，则修改靠后路径的操作要往前放。

#### 执行 sql 脚本

```json
[{
    "action": "exec-sql-file",
    "when": "after-push",
    "url": "{{rd.software_name}}://{{rd.username}}:{{rd.password}}@{{rd.host}}:{{rd.port}}/{{rd.database_name}}",
    "path": "sql/quartz.sql"
}]
```

#### 安装 npm 依赖

```json
[{
    "action": "exec-node-command",
    "when": "after-push",
    "command": "npm install"
}]
```

### 数据对象

`to_value` 中引入的数据

1. `project_name` - 项目名称，英文字符表示
2. `project_label` - 项目名称，中文名
3. `project_description` - 项目描述
4. `repo_name` - 仓库名
5. `rd` - 关系数据库，是 relational database 的首字母
   1. `software_name` - 软件名，如 `mysql` 等
   2. `host` - 主机
   3. `port` - 端口
   4. `username` - 用户
   5. `password` - 密码
   6. `database_name` - 数据库名称
6. `md` - 内存数据库，是 memory database 的首字母，当前仅支持 redis
   1. `host` - 主机
   2. `port` - 端口
   3. `password` - 密码
   4. `database_name` - 数据库名称或索引

示例


每个人的信息存在本地配置文件中，不往git仓库提交

往 gitlab push 项目

为文档仓库创建一个 local.md 文档，用于配置用户级信息，不用提交

新增一个操作，在下载时创建 local.md 文档

记录下


做一个步骤功能，每次让当前步骤获取焦点，且居中，输入内容并完成后，收缩以完成的节点，形成自动聚焦的操作模式。
这是一种很重要的操作模式，用户想做一件事情，要做完这件事情，需要做好几个操作，就自动将这些操作聚合起来，并排好步骤，让逐步执行。
而不是让用户一直找模块或文件，减少用户花在寻找上面的时间。

甚至编写一个程序模块，也是自动展开关联的文件。