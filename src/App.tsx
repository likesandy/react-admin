import { ConfigProvider } from 'antd'
import { FC, ReactNode, memo, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAppSelector } from './hooks/useStote'
import useTheme from './hooks/useTheme'
import Router from './routers'
import AuthRouter from './routers/utils/authRouter'
import { selectLanguage, selectThemeConfig } from './store/global/selectState'

import { Locale } from 'antd/es/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = memo(() => {
  const themeConfig = useAppSelector(selectThemeConfig)
  useTheme(themeConfig)

  const [locale, setLocal] = useState<Locale>(zhCN)
  const language = useAppSelector(selectLanguage)
  dayjs.locale(language)

  // 设置 antd 语言国际化
  const setAntdLanguage = () => {
    switch (language) {
      case 'zh-cn':
        setLocal(zhCN)
        dayjs.locale('zh-cn')
        break
      default:
      case 'cn':
        setLocal(enUS)
        dayjs.locale('en')
    }
  }

  useEffect(() => {
    setAntdLanguage()
  }, [language])

  return (
    <BrowserRouter>
      <ConfigProvider locale={locale}>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </BrowserRouter>
  )
})

export default App
