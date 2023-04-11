// sys-setting-ui
// import sysRoutes from '@/common-biz/sys-setting-ui/routes';

// 可采用相当路径 or 绝对路径，而且path 可以前缀不一致也可以放在一起
export default [
  // ...sysRoutes,
  {
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: '首页',
    // 内部是否有nestRoutes
    isNestRoutes: true,
    component: () => import('@pages/welcome'),
  },
  {
    name: '列表页',
    path: '/list',
    routes: [
      {
        redirect: 'sub-page',
      },
      {
        path: 'sub-page',
        name: 'SubPage',
        component: () => import('@pages/demo/sub-page'),
      },
      {
        // 绝对路径
        path: '/list/sub-page2',
        name: 'demo页',
        routes: [
          {
            redirect: 'sub-page2',
          },
          {
            // 绝对路径
            path: 'sub-demo',
            name: 'sub-demo',
            hideInMenu: true,
            // key: 'demo',
            component: () => import('@pages/demo'),
          },
          {
            // 绝对路径
            path: 'sub-page2',
            name: 'sub-page2',
            // hideInMenu: true,
            // key: 'demo',
            component: () => import('@pages/demo/sub-page2'),
          },
          {
            path: '/sub-page3',
            name: 'sub-page3',
            // key: 'demo',
            component: () => import('@pages/demo/sub-page3'),
          },
        ],
      },
    ],
  },
];
