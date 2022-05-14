import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../pages/index',
      wrappers: ['../components/layout', '../components/accessAuth'],
    },
    { path: '/login', component: '../pages/login' },
  ],
  fastRefresh: {},
  locale: { default: 'zh-CN', antd: true },
  history: { type: 'hash' },
  antd: {},
  mock: {},
  publicPath: './',
});
