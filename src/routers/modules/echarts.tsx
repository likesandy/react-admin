import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'

// dashboard 模块
const echartsRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Echarts',
    },
    children: [
      {
        path: '/echarts/waterChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/waterChart'))),
        meta: {
          requiresAuth: true,
          title: '水型图',
          key: 'waterChart',
        },
      },
      {
        path: '/echarts/columnChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/columnChart'))),
        meta: {
          requiresAuth: true,
          title: '柱状图',
          key: 'columnChart',
        },
      },
      {
        path: '/echarts/lineChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/lineChart'))),
        meta: {
          requiresAuth: true,
          title: '折线图',
          key: 'lineChart',
        },
      },
      {
        path: '/echarts/pieChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/pieChart'))),
        meta: {
          requiresAuth: true,
          title: '饼图',
          key: 'pieChart',
        },
      },
      {
        path: '/echarts/radarChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/radarChart'))),
        meta: {
          requiresAuth: true,
          title: '雷达图',
          key: 'radarChart',
        },
      },
      {
        path: '/echarts/nestedChart',
        element: lazyLoad(React.lazy(() => import('@/views/echarts/nestedChart'))),
        meta: {
          requiresAuth: true,
          title: '嵌套环形图',
          key: 'nestedChart',
        },
      },
    ],
  },
]

export default echartsRouter
