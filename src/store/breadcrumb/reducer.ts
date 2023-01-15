import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IbreadcrumbState } from './type'

const initialState: IbreadcrumbState = {
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

const { actions, reducer } = breadcrumbSlice

export const { setBreadcrumbListAction } = actions

export default reducer
