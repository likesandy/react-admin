import '@toast-ui/editor/dist/toastui-editor.css'
import { FC, memo, ReactNode, useEffect } from 'react'
import { MarkDownWrapper } from './style'
import ToastEditor from './toastEditor'

interface IProps {
  children?: ReactNode
}

const MarkDown: FC<IProps> = memo(() => {
  useEffect(() => {
    new ToastEditor('#editor', '100%', 'Hello World')
  }, [])

  return (
    <MarkDownWrapper>
      <div id="editor"></div>
    </MarkDownWrapper>
  )
})

export default MarkDown
