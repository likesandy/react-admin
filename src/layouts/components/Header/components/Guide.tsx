import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SendOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const guide = () => {
  console.log('1')
}

const Guide: FC<IProps> = memo(() => {
  return (
    <>
      <SendOutlined onClick={guide} className="icon-style" />
    </>
  )
})

export default Guide
