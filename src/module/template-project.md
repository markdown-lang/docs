# 模板项目

以下设计取执行某项操作这个隐喻。

## 模板替换语法

一个项目的模板配置信息存在 `template.json` 文件中，使用 `json` 格式定义配置文件。
不论是修改文件中的内容，还是修改文件名，都可以归类为一种操作，即修改文本。

### 替换文件中的内容

字段说明

1. `action` - `replace-text` 表示替换文件中的内容
2. `path` - 文件的相对路径，相对于项目的根目录
3. `changes` - 数组
   1. `row` - 行索引，从0开始计数，-1表示最后一行
   2. `column` - 列索引，从0开始计数，是 `from_value` 中第一个字的列索引，即包含 `from_value` 的第一个字符
   3. `from_value` - 需被替换的文本
   4. `to_value` - 使用此变量的值替换，使用 `{{变量名}}` 来传入变量，变量表达式遵循 [handlebars](https://handlebarsjs.com) 规范

使用 `to_value` 指定变量的值替换掉 `from_value` 指定的文本。当前仅支持一行替换一次。

示例

```json
[{
    "action": "replace-text",
    "path": "you/file/path",
    "changes": [{
        "row": 1,
        "column": 2,
        "from_value": "被替换的文本",
        "to_value": "{{project_name}}"
    }]
}]
```

### 修改文件夹或文件名称

要放在替换文件内容的后面。

字段说明。

1. `action` - `rename-dir` 表示修改的是最后一层文件夹的名称
2. `path` 
   1. 文件的相对路径，相对于项目的根目录，不需要以 `/` 开头，多层目录以 `/` 分割
   2. `.` 表示当前目录，即项目的根目录，修改根目录的操作通常是最后一个操作
3. `changes` - 数组
   1. `row` - 行索引，值为-1，表示路径的最后一段
   2. `column` - 列索引，从0开始计数，是 `from_value` 中第一个字的列索引，即包含 `from_value` 的第一个字符
   3. `from_value` - 需被替换的文本，只替换匹配的文本
   4. `to_value` - 使用此变量的值替换，使用 `{{变量名}}` 传入变量，，变量表达式遵循 [handlebars](https://handlebarsjs.com) 规范

示例

```json
[{
    "action": "rename-dir",
    "path": "you/file/path",
    "changes": [{
        "row": -1,
        "column": 0,
        "from_value": "被替换的文件夹名称，可以替换一部分",
        "to_value": "`{{project_name}}`"
    }]
}]
```

注意，如果先修改文件夹名称，再修改文件夹里的文件，需要将修改顺序调整为先修改文件的内容，再重命名文件夹。

### 执行 sql 脚本

```json
[{
    "action": "exec-sql-file",
    "url": "{{rd.software_name}}://{{rd.username}}:{{rd.password}}@{{rd.host}}:{{rd.port}}/{{rd.database_name}}",
    "path": "sql/quartz.sql"
}]
```

### 安装 npm 依赖

```json
[{
    "action": "exec-node-command",
    "command": "npm install"
}]
```

## 数据对象

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