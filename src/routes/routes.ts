import React from 'react';

// 可采用相当路径 or 绝对路径，而且path 可以前缀不一致也可以放在一起
export default [
  {
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: '欢迎',
    component: React.lazy(() => import('@pages/welcome')),
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
        component: React.lazy(() => import('@pages/welcome')),
      },
      {
        path: '/list/sub-page3',
        name: 'demo页',
        routes: [
          {
            redirect: '/tt/sub-page33333',
          },
          {
            path: '/sub-page2222',
            name: 'demo111',
            hideInMenu: true,
            key: 'demo',
            component: React.lazy(() => import('@pages/welcome')),
          },
          {
            path: '/tt/sub-page33333',
            name: 'dem222',
            key: 'demo',
            component: React.lazy(() => import('@pages/demo')),
          },
        ],
      },
    ],
  },
];
