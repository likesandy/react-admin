import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { setCollapsedAction } from '@/store/menu/reducer'
import { selectCollapsed } from '@/store/menu/selectState'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import type { FC, ReactNode } from 'react'
import React, { memo } from 'react'
import AvatarIcon from './components/AvatarIcon'
import BreadcrumbNav from './components/BreadcrumbNav'
import CollapseIcon from './components/CollapseIcon'
import HeaderSearch from './components/Search'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LayoutHeader: FC<IProps> = memo((props) => {
  const { Header } = Layout
  const isCollapsed = useAppSelector(selectCollapsed)
  const dispatch = useAppDispatch()
  return (
    <HeaderWrapper>
      <Header>
        <div className="header-left">
          <CollapseIcon />
          <BreadcrumbNav />
        </div>
        <div className="header-right">
          <HeaderSearch />
          <AvatarIcon />
          <span className="username">ilun</span>
        </div>
      </Header>
    </HeaderWrapper>
  )
})

export default LayoutHeader
