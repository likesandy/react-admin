import { Layout } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import AvatarIcon from './components/AvatarIcon'
import BreadcrumbNav from './components/BreadcrumbNav'
import CollapseIcon from './components/CollapseIcon'
import Fullscreen from './components/Fullscreen'
import HeaderSearch from './components/Search'
import Theme from './components/Theme'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LayoutHeader: FC<IProps> = memo((props) => {
  const { Header } = Layout
  return (
    <HeaderWrapper>
      <Header>
        <div className="header-left">
          <CollapseIcon />
          <BreadcrumbNav />
        </div>
        <div className="header-right">
          <HeaderSearch />
          <Theme />
          <Fullscreen />
          <span className="username">ilun</span>
          <AvatarIcon />
        </div>
      </Header>
    </HeaderWrapper>
  )
})

export default LayoutHeader
