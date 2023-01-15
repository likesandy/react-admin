import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMenuState } from './type'

const initialState: IMenuState = {
  isCollapsed: false,
  menuList: [],
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCollapsedAction(state, action: PayloadAction<boolean>) {
      state.isCollapsed = action.payload
    },
    setMenuListAction(state, action: PayloadAction<[]>) {
      state.menuList = action.payload
    },
  },
})

const { actions, reducer } = menuSlice

export const { setCollapsedAction, setMenuListAction } = actions

export default reducer
