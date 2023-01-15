import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import global from './global'
import login from './login'
import menu from './menu'
import breadcrumb from './breadcrumb'
import tabs from './tabs'

const reducers = combineReducers({
  login,
  global,
  menu,
  breadcrumb,
  tabs,
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
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
