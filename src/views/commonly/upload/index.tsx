import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UploadFileWrapper } from './style'
import UploadImgs from '@/components/Upload/imgs'

interface IProps {
  children?: ReactNode
}

const UploadFile: FC<IProps> = memo(() => {
  return (
    <UploadFileWrapper className="h-auto  card flex justify-center">
      <span className="text-2xl font-bold">多图片上传组件 🍓🍇🍈🍉</span>
      <div className="flex flex-wrap content-around w-90 my-[10px]">
        <UploadImgs borderRadius="100px" />
      </div>
    </UploadFileWrapper>
  )
})

export default UploadFile
