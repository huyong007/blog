
// 12 路由归类
// 关于数据库的讲解中下面这段文字应该是讲解的一个新的知识点
// 将PostSchema模型关联到'Post'这张表中，如果没有Post这张表就创建一个。
// 这种关联很有意思，假如你想在PostSchema中增加一个字段，只需要加上并重新启动应用即可，mongoose会自动帮你在数据库表中增加一个字段。
// 在初始化app.js最开头就连接数据库
- 2019/04/12进度 ：https://github.com/xugy0926/learn-webapp-guideline/blob/master/20-views-template.md

### 问题集合
- 关于数据库的讲解中下面这段文字应该是讲解的一个新的知识点将PostSchema模型关联到'Post'这张表中，如果没有Post这张表就创建一个。这种关联很有意思，假如你想在PostSchema中增加一个字段，需要加上并重新启动应用即可，mongoose会自动帮你在数据库表中增加一个字段。
在初始化app.js最开头就连接数据库
- 关键是他拿到id的方式是通过ejs的方式拿到的直接在script中使用的
