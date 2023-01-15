import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers'
import AuthRouter from './routers/utils/authRouter'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = memo(() => {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
})

export default App
