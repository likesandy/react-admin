import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuState } from '../interface'

const initialState: MenuState = {
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


export const { setMenuListAction } = menuSlice.actions
export default menuSlice.reducer
