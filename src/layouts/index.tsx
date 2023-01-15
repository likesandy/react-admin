import { useAppSelector } from '@/hooks/useStote'
import { selectCollapsed } from '@/store/menu/selectState'
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
  const isCollapsed = useAppSelector(selectCollapsed)

  return (
    <LayoutsWrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={isCollapsed} width={220} theme="dark">
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
