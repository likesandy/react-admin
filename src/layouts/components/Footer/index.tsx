import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { LayoutFooterWrapper } from './style'
import { RootState, useSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const LayoutFooter: FC<IProps> = memo(() => {
  const { footer } = useSelector((state: RootState) => state.global.themeConfig)
  return (
    <>
      {!footer && (
        <LayoutFooterWrapper>
          <div>LayoutFooter</div>
        </LayoutFooterWrapper>
      )}
    </>
  )
})

export default LayoutFooter
