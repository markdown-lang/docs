# intent.config.json

原则：
1. 支持多项目

参数
1. liquibase changelog 配置入口文件
2. 存放系统菜单 liquibase 文件的文件夹

```markdown
1. project1
    1. liquibase_root_file_path: liquibase changelog 入口文件路径，相对于项目名称
    2. liquibase_sys_menu_dir_path: 存放维护菜单的目录路径，相对于项目名称
2. project2
```

```json
{
    "service": {
        "name": "intent-ruoyi-vue-ts"
    },
    "projects": [
        {
            "name": "project1",
            "liquibaseRootFilePath": "",
            "liquibaseSysMenuDirPath": ""
        },
        {
            "name": "project2",
            "liquibaseRootFilePath": "",
            "liquibaseSysMenuDirPath": ""
        }
    ]
}
```

一个 service 就是一整套源码生成方案，所以只支持定义一个 service