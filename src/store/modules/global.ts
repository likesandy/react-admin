import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalState, ThemeConfigType } from '../interface'
import { SizeType } from 'antd/es/config-provider/SizeContext'

const initialState: GlobalState = {
  token: '',
  userInfo: '',
  themeConfig: {
    primary: '#1890ff',
    isDark: false,
    weakOrGray: '',
    breadcrumb: false,
    tabs: false,
    footer: false,
    collapsed: false,
  },
  language: 'en',
  assemblySize: 'middle',
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTokenAction(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    setThemeConfig(state, action: PayloadAction<ThemeConfigType>) {
      state.themeConfig = action.payload
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
    },
    setAssemblySize(state, action: PayloadAction<SizeType>) {
      state.assemblySize = action.payload
    },
  },
})

export const { setTokenAction, setThemeConfig, setLanguage, setAssemblySize } = globalSlice.actions
export default globalSlice.reducer
