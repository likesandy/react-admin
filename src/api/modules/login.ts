import tRequest from '..'
import { IToken, Login } from '../interface'

export const postLogin = (params: Login.ReqLoginForm): Promise<IToken> => {
  return tRequest.post('/login', { data: params })
  // return tRequest.post('/login', { params }) // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  // return tRequest.post('/login', { data: params, headers: { noLoading: true } }) // 控制当前请求不显示 loading
}

export const getMenuList = (): Promise<any> => {
  return tRequest.get('/menu/list')
}
