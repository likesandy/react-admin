import NProgress from '@/config/nprogress'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import { RequestEnum, ResultEnum } from '@/enums/httpEnum'
import store from '@/store'
import { setTokenAction } from '@/store/modules/global'
import { message } from 'antd'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios, { AxiosError } from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import { AxiosCanceler } from './helper/axiosCancel'
import { checkStatus } from './helper/checkStatus'
import { RequestOptions } from './interface'

// 单独实例拦截器
// interface TInstanceInterceptors<T = AxiosResponse> {
//   requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
//   requestInterceptorCatch?: (err: any) => any
//   responseInterceptor?: (res: T) => T
//   responseInterceptorCatch?: (err: any) => any
// }

interface TRequestConfig<T = any> extends AxiosRequestConfig {
  // interceptors?: TInstanceInterceptors<T>
  url: string
}

// ? 这个注释好神奇是蓝色的
// TODO 这个都知道

const axiosCanceler = new AxiosCanceler()

const config = {
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 跨域请求时是否需要使用凭证
  // https://axios-http.com/zh/docs/req_config
  // withCredentials: true,
}

class TRequest {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    /**
     * @description 全局请求拦截器
     * 客户端发送请求 -> [请求拦截器] -> 服务器
     * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
     */
    this.instance.interceptors.request.use(
      (config) => {
        // * 将当前请求添加到 pending 中
        NProgress.start()
        // * 如果当前请求不需要显示 loading,在api服务中通过指定的第三个参数: { headers: { noLoading: true } }来控制不显示loading，参见loginApi
        // TODO 目前和Suspense有冲突，会有两个loading效果，暂不使用自定义loading
        config.headers!.noLoading || showFullScreenLoading()

        // * 从Store里获取token
        const token = store.getState().global.token
        // 添加token到请求头
        return { ...config, headers: { ...config.headers, 'x-access-token': token } }
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      },
    )

    /**
     * @description 全局响应拦截器
     * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        const { data, config } = res
        // * 在请求结束后，移除本次请求(关闭loading)
        NProgress.done()
        axiosCanceler.removePending(config)
        tryHideFullScreenLoading()
        // * 登录失效（code == 599）
        if (data.code == ResultEnum.OVERDUE) {
          store.dispatch(setTokenAction(''))
          message.error(data.msg)
          window.location.hash = '/login'
          return Promise.reject(data)
        }
        // * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
        if (data.code && data.code !== ResultEnum.SUCCESS) {
          message.error(data.msg)
          return Promise.reject(data)
        }
        // * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
        return data
      },
      (err: AxiosError) => {
        const { response } = err
        // * 即使请求失败，也需要关闭loadding
        NProgress.done()
        // tryHideFullScreenLoading()
        // * 请求超时单独处理（超时信息在err.message中）
        if (err.message.includes('timeout')) message.error('请求超时！')
        // * 根据不同的http状态码，做不同的处理
        if (response) checkStatus(response.status)
        // * 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) {
          message.error('网络已断开，请检查网络！')
          window.location.hash = '/500'
        }
        return Promise.reject(err)
      },
    )

    // 实例的拦截器
    // this.instance.interceptors.request.use(
    //   config.interceptors?.requestInterceptor,
    //   config.interceptors?.requestInterceptorCatch,
    // )
    // this.instance.interceptors.response.use(
    //   config.interceptors?.responseInterceptor,
    //   config.interceptors?.responseInterceptorCatch,
    // )
  }

  private async request<T>(method: string, url: string, options?: RequestOptions) {
    const config: AxiosRequestConfig = {
      method,
      url,
      headers: options?.headers,
      params: options?.params,
      data: options?.data,
    }
    const response: AxiosResponse<T> = await this.instance.request(config)
    return response.data
  }

  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(RequestEnum.GET, url, options)
  }

  post<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(RequestEnum.POST, url, options)
  }
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(RequestEnum.DELETE, url, options)
  }

  patch<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(RequestEnum.PATCH, url, options)
  }

  put<T>(url: string, options?: RequestOptions): Promise<T> {
    return this.request<T>(RequestEnum.PUT, url, options)
  }
}

export default new TRequest(config)
