import { Login } from '@/service/interface'
import { postLogin } from '@/service/modules/login'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ILoginState } from './type'

const initialState: ILoginState = {
  token: '',
  userInfo: '',
  userMenus: [],
  permissions: [],
  count: 0,
}

const fetchPostLoginAsync = createAsyncThunk('login/postLogin', async (loginForm: Login.ReqLoginForm, { dispatch }) => {
  const { data } = await postLogin(loginForm)
  dispatch(data)
})

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    postLoginAction(state, { payload }) {
      state.token = payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchHomeAllDataAsync.fulfilled, (state, { payload }) => {
  //     // 保存权限信息
  //     state.permissions = mapMenuToPersssions(payload)
  //     localCache.setCache(PERMISSIONS, state.permissions)
  //     // 动态添加路由
  //     addRoutesWithMenu(state.userMenus)
  //   })
  // },
})

export const {} = loginSlice.actions

export default loginSlice.reducer

export { fetchPostLoginAsync }
