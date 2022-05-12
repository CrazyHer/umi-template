# Umi-template

## 目录结构

```md
.
├── package.json
├── .umirc.ts   umi配置文件, 在此配置路由
├── .env
├── dist
├── mock
├── public
├── aseets      图片等静态资源存放目录
└── src
    ├── .umi
    ├── locales 存放国际化语言文案
    ├── mobxStore 使用mobx进行状态管理
    ├── services  使用rap2进行接口同步，使用命令yarn rapper即可完成同步
    ├── pages 所有页面
        ├── login 
            ├── login.tsx          登录页
            ├── login.module.less  登录页的局部样式
        ├── index.less 全局样式
        └── index.tsx  首页
    └── app.tsx  umi运行时配置，启动应用时加载一次
```

## rap2接口定义地址
http://rap2.taobao.org/organization/repository/editor?id=302425
