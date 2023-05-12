import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const MenuView: FC<IProps> = memo(() => {
  return (
    <>
      <div>MenuView</div>
    </>
  )
})

export default MenuView
