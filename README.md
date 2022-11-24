# vite@3.0 + ts + react + antd Pro

脱离 umijs，单独使用 pro-component

文件命名规范，小写，`-`链接

## File tree

. ├── README.md ├── dist build 后的静态文件 ├── index.html 渲染 html 模板 ├── jsconfig.json ├── package-lock.json ├── package.json ├── public 公共资源 ├── src │   ├── App.tsx common layout 层 │   ├── assets 放 image，svg，等静态资源 │   ├── common │   ├── component │   ├── hook │   ├── index.less 入口样式 │   ├── main.tsx 入口文件 │   ├── pages │   ├── routes │   │   ├── index.tsx │   │   └── routes.ts 路由配置入口 │   ├── service │   │   └── axios.ts 请求 request │   ├── utils │   │   └── utils.ts 工具库 │   └── vite-env.d.ts ├── tsconfig.json ├── tsconfig.node.json └── vite.config.ts

## Path alias

```ts
  '@pages': resolve(__dirname, 'src/pages'),
  '@service': resolve(__dirname, 'src/service'),
  '@common': resolve(__dirname, 'src/common'),
  '@component': resolve(__dirname, 'src/component'),
  '@assets': resolve(__dirname, 'src/assets'),
  '@utils': resolve(__dirname, 'src/utils'),
  '@routes': resolve(__dirname, 'src/routes'),
```

## Routes config

```ts
// 参考 https://procomponents.ant.design/components/layout#menudataitem
  {
    path: '/welcome',
    name: '欢迎',
    component: React.lazy(() => import('@pages/xxx')), // 这些写为了打包的时候自动分chunk
  },

  // 可以再同一父级下配置不同前缀路径的路由
  {
    path: '/list',
    name: 'demo页',
    routes: [
      {
        redirect: '/first/sub-page',
      },
      {
        path: '/first/sub-page', // 绝对路径
        name: 'demo111',
        hideInMenu: true,
        key: 'demo',
        component: React.lazy(() => import('@pages/xxx')),
      },
      {
        path: 'seconde-page', // 相对路径
        name: 'dem222',
        key: 'demo',
        component: React.lazy(() => import('@pages/xxx')),
      },
    ],
  },
```

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

### Start project

```bash
npm run dev
```

### Build project

```bash
npm run build
```

### Format code

```bash
npm run prettier
```

### Eslint check and Fixed

```bash
npm run lint:fix
```
