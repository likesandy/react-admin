import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import React from 'react'
import lazyLoad from '../utils/lazyLoad'

// 首页模块
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
    ],
  },
]

export default commonlyRouter
