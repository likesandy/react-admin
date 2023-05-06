import { RootState, useSelector } from '@/store'
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
  const { collapsed } = useSelector((state: RootState) => state.global.themeConfig)

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
