# vite@3.0 + ts + react + antd Pro

脱离 umijs，单独使用 pro-component

## File tree

```
.
├── README.md
├── dist build -------------------------- 后的静态文件 
├── index.html -------------------------- 渲染 html 模板 
├── env --------------------------------- 环境变量
├── jsconfig.json
├── package-lock.json
├── package.json
├── public ------------------------------ 公共资源
├── src --------------------------------- 源码目录
│   ├── App.tsx ------------------------- common layout 层 
│   ├── assets -------------------------- 放 image，svg，等静态资源 
│   ├── common -------------------------- 通用工具的文件夹
│   │   └── common.less ----------------- 公共样式，集成flex快捷className
│   ├── component ----------------------- 公共业务组件目录
│   ├── hook ---------------------------- 公共hook目录
│   ├── index.less ---------------------- 入口样式
│   ├── main.tsx ------------------------ 入口文件
│   ├── pages --------------------------- 页面集合目录
│   ├── routes
│   │   ├── index.tsx
│   │   └── routes.ts ------------------- 路由配置
│   ├── service
│   │   └── axios.ts -------------------- 请求 request公共处理
│   ├── utils --------------------------- 工具库目录
│   │   └── utils.ts -------------------- 工具库
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Path alias

```ts
  '@pages': resolve(__dirname, 'src/pages'),
  '@service': resolve(__dirname, 'src/service'),
  '@common': resolve(__dirname, 'src/common'),
  '@hook': resolve(__dirname, 'src/hook'),
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
