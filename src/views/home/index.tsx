import welome from '@/assets/images/welcome.png'
import { FC, ReactNode, memo } from 'react'
import { HomeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = memo(() => {
  return (
    <HomeWrapper className="card">
      <img src={welome} />
    </HomeWrapper>
  )
})

export default Home
