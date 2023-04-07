import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import lazyLoad from '../utils/lazyLoad'
import { lazy } from 'react'

// 首页模块
const homeRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '外部链接',
    },
    children: [
      {
        path: '/link/github',
        element: lazyLoad(lazy(() => import('@/views/link/github'))),
        meta: {
          title: 'github',
          key: 'github',
        },
      },
      {
        path: '/link/blog',
        element: lazyLoad(lazy(() => import('@/views/link/blog'))),
        meta: {
          title: 'Blog',
          key: 'blog',
        },
      },
      {
        path: '/link/leetcode',
        element: lazyLoad(lazy(() => import('@/views/link/leetcode'))),
        meta: {
          title: 'leetcode',
          key: 'leetcode',
        },
      },
    ],
  },
]

export default homeRouter
