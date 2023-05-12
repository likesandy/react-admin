import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'

const authRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '权限',
    },
    children: [
      {
        path: '/auth/menu',
        element: lazyLoad(React.lazy(() => import('@/views/auth/menu'))),
        meta: {
          requiresAuth: true,
          title: '菜单权限',
          key: 'menu',
        },
      },
      {
        path: '/auth/button',
        element: lazyLoad(React.lazy(() => import('@/views/auth/button'))),
        meta: {
          requiresAuth: true,
          title: '按钮权限',
          key: 'authButton',
        },
      },
    ],
  },
]

export default authRouter
