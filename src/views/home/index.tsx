import { Button, DatePicker, Modal, Pagination, Popconfirm, Space, TimePicker } from 'antd'
import { FC, ReactNode, memo, useState } from 'react'
import { HomeWrapper } from './style'

interface IProps {
  children?: ReactNode
}



const Home: FC<IProps> = memo(() => {
  // const language = useAppSelector(selectLanguage)

  return (
    <HomeWrapper className="card">
      <div>home</div>
    </HomeWrapper>
  )
})

export default Home
