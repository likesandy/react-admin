import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from 'react-redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import breadcrumb from './modules/breadcrumb'
import global from './modules/global'
import menu from './modules/menu'
import tabs from './modules/tabs'
import auth from './modules/auth'

const reducers = combineReducers({
  global,
  menu,
  breadcrumb,
  tabs,
  auth,
})

// redux 持久化配置
const persistConfig = {
  key: 'redux-state',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// 创建持久化 store
const persistor = persistStore(store)

export { persistor }
export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
