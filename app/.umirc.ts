import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  proxy: {
    '/jsonrpc': {
      'target': 'http://127.0.0.1:8001/jsonrpc/',
      'changeOrigin': true,
    },
  },
  treeShaking: true,
  routes: [
    {
      antd :{},  //新增
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/a', component: '../pages/a' },
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'github',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
