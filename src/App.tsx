import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers'
import AuthRouter from './routers/utils/authRouter'
import useTheme from './hooks/useTheme'
import { useAppSelector } from './hooks/useStote'
import { selectThemeConfig } from './store/global/selectState'
import { ConfigProvider, theme } from 'antd'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = memo(() => {
  const themeConfig = useAppSelector(selectThemeConfig)
  useTheme(themeConfig)
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: theme.compactAlgorithm,
        }}>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </BrowserRouter>
  )
})

export default App
