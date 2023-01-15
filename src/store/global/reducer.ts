import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGlobalState } from './type'

const initialState: IGlobalState = {
  token: '',
  userInfo: '',
}

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setTokenAction(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
  },
})
const { reducer, actions } = GlobalSlice

export default reducer
export const { setTokenAction } = actions
