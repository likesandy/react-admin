import { LayoutIndex } from '@/routers/constant'
import { RouteObject } from '@/routers/interface'
import lazyLoad from '@/routers/utils/lazyLoad'
import React from 'react'

const editorRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'editor',
    },
    children: [
      {
        path: '/editor/markdown',
        element: lazyLoad(React.lazy(() => import('@/views/markdown'))),
        meta: {
          requiresAuth: true,
          title: 'markdown',
          key: 'markdown',
        },
      },
      {
        path: '/editor/tinymce',
        element: lazyLoad(React.lazy(() => import('@/views/tinymce'))),
        meta: {
          requiresAuth: true,
          title: '富文本编辑器',
          key: 'tinymce',
        },
      },
    ],
  },
]

export default editorRouter
