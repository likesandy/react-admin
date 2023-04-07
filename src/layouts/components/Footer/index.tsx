import { useAppSelector } from '@/hooks/useStote'
import { selectThemeConfig } from '@/store/global/selectState'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { LayoutFooterWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LayoutFooter: FC<IProps> = memo(() => {
  const themeConfig = useAppSelector(selectThemeConfig)
  return (
    <>
      {themeConfig.footer && (
        <LayoutFooterWrapper>
          <div>LayoutFooter</div>
        </LayoutFooterWrapper>
      )}
    </>
  )
})

export default LayoutFooter
