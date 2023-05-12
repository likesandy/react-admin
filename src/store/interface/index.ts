import { SizeType } from 'antd/es/config-provider/SizeContext'

export interface BreadcrumbState {
  breadcrumbList: {}
}

export interface AuthStoreState {
  authButtonList: {
    [key: string]: string[]
  }
}

export interface GlobalState {
  token: string
  userInfo: any
  themeConfig: {
    // 默认 primary 主题颜色
    primary: string
    // 深色模式
    isDark: boolean
    // 色弱模式(weak) || 灰色模式(gray)
    weakOrGray: 'weak' | 'gray' | string
    // 面包屑导航
    breadcrumb: boolean
    // 标签页
    tabs: boolean
    // 页脚
    footer: boolean
    // 菜单折叠
    collapsed: boolean
  }
  language: string
  assemblySize: SizeType
}

export interface MenuState {
  menuList: []
}

export interface TabsList {
  tabsList: Menu.MenuOptions[]
}

export interface ThemeConfigType {
  primary: string
  isDark: boolean
  weakOrGray: 'weak' | 'gray' | string
  breadcrumb: boolean
  tabs: boolean
  footer: boolean
  collapsed: boolean
}
