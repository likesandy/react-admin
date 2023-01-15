import { Spin } from 'antd'
import { FC, memo } from 'react'
import { LoadingWrapper } from './style'

interface IProps {
  children?: React.ReactNode
  tip?: string
}

const Loading: FC<IProps> = memo((props) => {
  const { tip = 'Loading' } = props
  return (
    <LoadingWrapper>
      <Spin tip={tip} size="large" className="request-loading" />
    </LoadingWrapper>
  )
})

export default Loading
