import App from './App'
import '@/assets/css/index.css'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'

// react 17 创建，控制台会报错，暂时不影响使用（菜单折叠时不会出现闪烁）
//* github.com/ant-design/ant-design/issues/36174
https: ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
