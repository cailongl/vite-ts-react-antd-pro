export default [
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
        redirect: '/sub-page2',
      },
      {
        path: '/sub-page2',
        name: '欢迎页',
        component: () => import('@pages/welcome'),
      },
      {
        path: '/list/sub-page3',
        name: 'demo页',
        routes: [
          {
            path: '/sub-page2222',
            name: 'demo111',
            hideInMenu: true,
            key: 'demo',
            component: () => import('@pages/welcome'),
          },
          {
            path: '/tt/sub-page33333',
            name: 'dem222',
            key: 'demo',
            component: () => import('@pages/demo'),
          },
        ],
      },
    ],
  },
];
