import { getAuthorButtons } from '@/api/modules/auth'
import { RootState, useSelector } from '@/store'
import { setAuthButtons } from '@/store/modules/auth'
import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import LayoutFooter from './components/Footer'
import LayoutHeader from './components/Header'
import LayoutMenu from './components/Menu'
import LayoutTabs from './components/Tabs'
import { LayoutsWrapper } from './style'

const { Sider, Content } = Layout

const LayoutIndex: React.FC = () => {
  const { collapsed } = useSelector((state: RootState) => state.global.themeConfig)
  const dispatch = useDispatch()

  // const getAuthButtons = async () => {
  //   const data = await getAuthorButtons()
  //   dispatch(setAuthButtons(data))
  // }

  // useEffect(() => {
  //   getAuthButtons()
  // }, [])

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

export default LayoutIndex
