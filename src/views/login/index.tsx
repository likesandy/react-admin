import loginLeft from '@/assets/images/login_left.png'
import logo from '@/assets/images/logo.png'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import LoginForm from './components/LoginForm'
import { LoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = memo(() => {
  return (
    <LoginWrapper>
      <div className="login-box">
        <div className="login-left">
          <img src={loginLeft} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <div className="logo-text">ilun-admin</div>
          </div>
          <LoginForm />
        </div>
      </div>
    </LoginWrapper>
  )
})

export default Login
