import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeConfigType } from '../types'
import { IGlobalState } from './type'

const initialState: IGlobalState = {
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

const GlobalSlice = createSlice({
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
const { reducer, actions } = GlobalSlice

export default reducer
export const { setTokenAction, setThemeConfig, setLanguage } = actions
