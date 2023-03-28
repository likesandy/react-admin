import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { selectCollapsed } from '@/store/menu/selectState'
import { Layout } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import AvatarIcon from './components/AvatarIcon'
import BreadcrumbNav from './components/BreadcrumbNav'
import CollapseIcon from './components/CollapseIcon'
import Guide from './components/Guide'
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
          <Guide />
          <HeaderSearch />
          <AvatarIcon />
          <span className="username">ilun</span>
        </div>
      </Header>
    </HeaderWrapper>
  )
})

export default LayoutHeader
