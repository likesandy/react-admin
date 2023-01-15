import { RootState } from '..'

export const selectToken = (state: RootState) => state.global.token
export const selectUserInfo = (state: RootState) => state.global.userInfo
