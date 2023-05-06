import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GlobalState, ThemeConfigType } from '../interface'


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
  },
})

export const { setTokenAction, setThemeConfig, setLanguage } = globalSlice.actions
export default globalSlice.reducer
