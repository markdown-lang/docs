# 数据库解析

markdown 数据库设计的模板的设计原则：

1. 必须是完全用自然语言表述，不能为了解析需要刻意留下锚点

## 怎么判断是编码字段

1. 判断规则
   1. 在说明区域
   2. 是超链接
   3. 且链接到 `dict` 目录下
2. 示例：
   ```md
   `repo_category(仓库分类)` 的值详见[git模板仓库分类](../data/dict/2002_git_template_repo_category.md)
   ```