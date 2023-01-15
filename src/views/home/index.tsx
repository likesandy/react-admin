import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  return (
    <HomeWrapper className="card">
      <div>home</div>
    </HomeWrapper>
  )
})

export default Home
