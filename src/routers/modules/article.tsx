import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'

const articeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '文章',
    },
    children: [
      {
        path: '/article/ranking',
        element: lazyLoad(React.lazy(() => import('@/views/article/ranking'))),
        meta: {
          requiresAuth: true,
          title: '文章排名',
          key: 'ranking',
        },
      },
      {
        path: '/article/create',
        element: lazyLoad(React.lazy(() => import('@/views/article/create'))),
        meta: {
          requiresAuth: true,
          title: '创建文章',
          key: 'create',
        },
      },
    ],
  },
]

export default articeRouter
