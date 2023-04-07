import { useAppSelector } from '@/hooks/useStote'
import { selectThemeConfig } from '@/store/global/selectState'
import { Layout } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import LayoutFooter from './components/Footer'
import LayoutHeader from './components/Header'
import LayoutMenu from './components/Menu'
import LayoutTabs from './components/Tabs'
import { LayoutsWrapper } from './style'

const { Sider, Content } = Layout

const App: React.FC = () => {
  const { collapsed } = useAppSelector(selectThemeConfig)

  return (
    <LayoutsWrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={!collapsed} width={220} theme="dark">
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <LayoutTabs />
          <Content>
            <Outlet />
          </Content>
          <LayoutFooter />
        </Layout>
      </Layout>
    </LayoutsWrapper>
  )
}

export default App
