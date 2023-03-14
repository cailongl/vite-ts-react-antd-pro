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
    name: '欢迎',
    component: () => import('@pages/welcome'),
  },
  {
    name: '列表页',
    path: '/list',
    routes: [
      {
        redirect: 'sub-page2',
      },
      {
        path: 'sub-page2',
        name: '欢迎页',
        component: () => import('@pages/welcome'),
      },
      {
        path: '/list/sub-page3',
        name: 'demo页',
        routes: [
          {
            redirect: 'sub-page33333',
          },
          {
            path: '/sub-page2222',
            name: 'demo111',
            // hideInMenu: true,
            // key: 'demo',
            component: () => import('@pages/welcome'),
          },
          {
            path: 'sub-page33333',
            name: 'dem222',
            key: 'demo',
            component: () => import('@pages/demo'),
          },
        ],
      },
    ],
  },
];
