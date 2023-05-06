import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BreadcrumbState } from '../interface'

const initialState: BreadcrumbState = {
  breadcrumbList: {},
}

export const breadcrumbSlice = createSlice({
  name: 'breadcrumbSlice',
  initialState,
  reducers: {
    setBreadcrumbListAction(state, action: PayloadAction<{}>) {
      state.breadcrumbList = action.payload
    },
  },
})

export const { setBreadcrumbListAction } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
