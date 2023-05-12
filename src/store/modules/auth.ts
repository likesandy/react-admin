import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthStoreState } from '../interface'

const initialState: AuthStoreState = {
  authButtonList: {},
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthButtons(state, action: PayloadAction<any>) {
      state.authButtonList = action.payload
    },
  },
})

export const { setAuthButtons } = authSlice.actions
export default authSlice.reducer
