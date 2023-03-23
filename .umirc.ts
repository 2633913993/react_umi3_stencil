import { defineConfig } from 'umi';
import routers from './src/routers';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: routers,
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://120.78.68.208:4000', //测试地址
      // target: 'http://192.168.0.151:4000', //本地地址
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
});
