import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LayoutFooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LayoutFooter: FC<IProps> = memo(() => {
  return (
    <LayoutFooterWrapper>
      <div>LayoutFooter</div>
    </LayoutFooterWrapper>
  )
})

export default LayoutFooter
