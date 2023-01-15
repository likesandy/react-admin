import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TinymceWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Tinymce: FC<IProps> = memo(() => {
  return (
    <TinymceWrapper className="card">
      <div>Tinymce</div>
    </TinymceWrapper>
  )
})

export default Tinymce
