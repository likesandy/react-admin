// * 登录
export namespace Login {
  export interface ReqLoginForm {
    username: string
    password: string
  }
  export interface ResLogin {
    access_token: string
  }
  export interface ResAuthButtons {
    [propName: string]: any
  }
}

// * 请求响应参数(不包含data)
export interface Result {
  code: string
  msg: string
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data: T
}

// * 请求参数
export interface RequestOptions {
  headers?: Record<string, any>
  params?: any
  data?: any
}

export interface RequestConfig extends RequestOptions {
  method: string
  url: string
}

export interface IToken {
  token: string
}

export interface IAuthButtons {
  authButtonList: {
    [key: string]: string[]
  }
}
