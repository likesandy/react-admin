import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { IframeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Embedded: FC<IProps> = memo(() => {
  return (
    <IframeWrapper className="card content-box">
      <iframe src="https://www.bing.com/" className="full-iframe" />
    </IframeWrapper>
  )
})

export default Embedded
