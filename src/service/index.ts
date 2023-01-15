import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosCanceler } from './helper/axiosCancel'
import store from '@/store'
import { PORT1, TIME_OUT } from './config'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/config/serviceLoading'
import NProgress from '@/config/nprogress'

interface TInstanceInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

interface TRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: TInstanceInterceptors<T>
}

const axiosCanceler = new AxiosCanceler()

const config = {
  baseURL: PORT1,
  timeout: TIME_OUT,
}

class TRequest {
  instance: AxiosInstance

  constructor(config: TRequestConfig) {
    this.instance = axios.create(config)

    // 全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        NProgress.start()
        config.headers!.noLoading || showFullScreenLoading()
        const token: string = store.getState().global.token
        return { ...config, headers: { ...config.headers, 'x-access-token': token } }
      },
      (err) => {
        return err
      },
    )

    this.instance.interceptors.response.use(
      (res) => {
        NProgress.done()
        tryHideFullScreenLoading()
        return res.data
      },
      (err) => {
        return err
      },
    )

    // 实例的拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptor,
      config.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseInterceptor,
      config.interceptors?.responseInterceptorCatch,
    )
  }

  request<T = any>(config: TRequestConfig<T>) {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err: any) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err)
          }
          reject(err)
        })
    })
  }

  get<T = any>(config: TRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: TRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: TRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: TRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default new TRequest(config)
