import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalState } from './type'
import { ThemeConfigType } from '../types'

const initialState: IGlobalState = {
  token: '',
  userInfo: '',
  themeConfig: {
    primary: '#1890ff',
    isDark: false,
    weakOrGray: '',
    breadcrumb: true,
    tabs: true,
    footer: false,
    collapsed: false,
  },
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
  },
})
const { reducer, actions } = GlobalSlice

export default reducer
export const { setTokenAction, setThemeConfig } = actions
