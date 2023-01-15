import tRequest from '..'
import { Login } from '../interface'

export const postLogin = (params: Login.ReqLoginForm) => {
  return tRequest.post({
    url: '/login',
    params,
  })
}

export const getMenuList = () => {
  return tRequest.get({
    url: '/menu/list',
  })
}
