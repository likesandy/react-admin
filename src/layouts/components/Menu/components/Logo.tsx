import logo from '@/assets/images/logo.png'
import { LogoWrapper } from './style'

const Logo = (props: any) => {
  const { isCollapse } = props
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" className="logo-img" />
      {!isCollapse ? <h2 className="logo-text">ilun Admin</h2> : null}
    </LogoWrapper>
  )
}

export default Logo
