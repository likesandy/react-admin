import store from '@/store'
import { searchRoute } from '@/utils/utils'
import type { FC } from 'react'
import { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { rootRouter } from '..'
import { HOME_URL } from '@/config/config'

interface IProps {
  children: ReactElement
}

// *
const AuthRouter: FC<IProps> = ({ children }) => {
  const { pathname } = useLocation()
  const route = searchRoute(pathname, rootRouter)

  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return children

  // * 获取token
  const token = store.getState().global.token
  if (!token) return <Navigate to="/login" replace />

  // * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
  // const dynamicRouter = store.getState().auth.authRouter
  // * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
  const staticRouter = [HOME_URL, '/403']
  // const routerList: string[] = dynamicRouter.concat(staticRouter)
  // * 如果访问的地址没有在路由表中重定向到403页
  // if (!routerList.includes(pathname)) {
  // console.log('222222222')
  // return <Navigate to="/403" />
  // }

  return children
}

export default AuthRouter
