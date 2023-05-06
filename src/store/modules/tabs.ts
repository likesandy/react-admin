import { HOME_URL } from '@/config/config'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TabsList } from '../interface'

const initialState: TabsList = {
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

export const { setTabsListAction } = tabsSlice.actions
export default tabsSlice.reducer
