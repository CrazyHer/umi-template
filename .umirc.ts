import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '../pages/index' },
    { path: '/login', component: '../pages/login/login' },
  ],
  fastRefresh: {},
  locale: { default: 'zh-CN' },
  history: { type: 'hash' },
  antd: {},
});
