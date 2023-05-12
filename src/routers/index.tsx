import Login from '@/views/login'
import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from './interface'

type Module = { [key: string]: any }
// * 导入所有router
// import.meta.globEager 已经弃用，请使用 import.meta.glob('*', { eager: true }) 来代替。
const metaRouters = import.meta.glob('./modules/*.tsx', { eager: true }) as Record<string, Module>

// * 处理路由
export const routerArray: RouteObject[] = []
Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key])
  })
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/404" />,
  },
]

const Router = () => useRoutes(rootRouter as any)

export default Router
