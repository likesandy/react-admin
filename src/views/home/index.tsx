import welecome from '@/assets/images/welecome.svg'
import { FC, ReactNode, memo } from 'react'
import { HomeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  return (
    <HomeWrapper className="card">
      <img src={welecome} />
    </HomeWrapper>
  )
})

export default Home
