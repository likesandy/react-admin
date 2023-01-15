import store from '@/store'
import { searchRoute } from '@/utils/utils'
import type { FC } from 'react'
import { ReactElement } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { rootRouter } from '..'

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

  return children
}

export default AuthRouter
