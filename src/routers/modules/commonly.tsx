import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import React from 'react'
import lazyLoad from '../utils/lazyLoad'

// 常用组件模块
const commonlyRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'commonly',
    },
    children: [
      {
        path: '/commonly/guide',
        element: lazyLoad(React.lazy(() => import('@/views/commonly/guide'))),
        meta: {
          requiresAuth: true,
          title: 'guide',
          key: 'guide',
        },
      },
      {
        path: '/commonly/upload',
        element: lazyLoad(React.lazy(() => import('@/views/commonly/upload'))),
        meta: {
          requiresAuth: true,
          title: 'upload',
          key: 'upload',
        },
      },
      {
        path: '/commonly/internationalization',
        element: lazyLoad(React.lazy(() => import('@/views/commonly/internationalization'))),
        meta: {
          requiresAuth: true,
          title: 'internationalization',
          key: 'internationalization',
        },
      },
    ],
  },
]

export default commonlyRouter
