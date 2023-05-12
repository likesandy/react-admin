import { ConfigProvider } from 'antd'
import { FC, ReactNode, memo, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useTheme from './hooks/useTheme'
import Router from './routers'
import AuthRouter from './routers/utils/authRouter'

import { Locale } from 'antd/es/locale'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'
// import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import i18n from './language'
import { RootState, useSelector } from './store'
import { setLanguage } from './store/modules/global'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = memo(() => {
  const { themeConfig, language } = useSelector((state: RootState) => state.global)
  useTheme(themeConfig)

  const [locale, setLocal] = useState<Locale>(zhCN)
  // dayjs.locale(language)

  // 设置 antd 语言国际化
  // const setAntdLanguage = () => {
  //   switch (language) {
  //     case 'zh-cn':
  //       setLocal(zhCN)
  //       dayjs.locale('zh-cn')
  //       break
  //     default:
  //     case 'cn':
  //       setLocal(enUS)
  //       dayjs.locale('en')
  //   }
  // }

  const setAntdLanguage = (language: string) => {
    // 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
    if (language && language == 'zh') return setLocal(zhCN)
    if (language && language == 'en') return setLocal(enUS)
  }

  // useEffect(() => {
  //   setAntdLanguage()
  // }, [language])
  useEffect(() => {
    i18n.changeLanguage(language)
    setAntdLanguage(language)
    setLanguage(language)
  }, [language])

  const componentSize = useSelector((state: RootState) => state.global.assemblySize)

  return (
    <BrowserRouter>
      <ConfigProvider locale={locale} componentSize={componentSize}>
        <AuthRouter>
          <Router />
        </AuthRouter>
      </ConfigProvider>
    </BrowserRouter>
  )
})

export default App
