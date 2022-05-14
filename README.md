# umi-template

Umi+React+Mobx模板

## 目录结构

```md
.
├── package.json
├── .umirc.ts   umi配置文件, 在此配置路由
├── mock        
    ├── api.ts  umi前端mock数据
├── aseets      存放图片等静态资源
└── src
    ├── locales     国际化语言文案
    ├── mobxStore   状态管理, 使用mobx
    ├── services    网络请求, 带接口类型定义, 使用rap2进行接口同步
    ├── components  公共组件
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
