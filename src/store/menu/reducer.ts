import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMenuState } from './type'

const initialState: IMenuState = {
  menuList: [],
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuListAction(state, action: PayloadAction<[]>) {
      state.menuList = action.payload
    },
  },
})

const { actions, reducer } = menuSlice

export const { setMenuListAction } = actions

export default reducer
