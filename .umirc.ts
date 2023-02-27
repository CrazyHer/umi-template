import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/locale'],
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login', layout: false },
  ],
  clientLoader: {},
  npmClient: 'pnpm',
  antd: {},
  locale: {},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
});
