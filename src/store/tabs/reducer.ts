import { HOME_URL } from '@/config/config'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITabsList } from './type'

const initialState: ITabsList = {
  tabsList: [{ title: '首页', path: HOME_URL }],
}

export const tabsSlice = createSlice({
  name: 'tabsSlice',
  initialState,
  reducers: {
    setTabsListAction(state, action: PayloadAction<Menu.MenuOptions[]>) {
      state.tabsList = action.payload
    },
  },
})

const { actions, reducer } = tabsSlice

export const { setTabsListAction } = actions

export default reducer
