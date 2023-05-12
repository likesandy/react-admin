import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import type { FC, ReactNode } from 'react'
import { memo, useEffect, useRef } from 'react'
import { MarkDownWrapper } from './style'
import { Button, Input } from 'antd'

interface IProps {
  children?: ReactNode
  title: string
  detail: Record<string, any>
}

const MackDown: FC<IProps> = memo(({ title, detail }) => {
  // const mkEditor = useRef<Editor>()
  const editorRef = useRef<Editor>(null)

  const iniEditor = () => {}
  const handleClick = () => {}

  useEffect(() => {
    editorRef?.current?.setState(detail.content)
    return () => {}
  }, [detail])

  return (
    <>
      <MarkDownWrapper>
        <Input bordered={false} placeholder="请输入标题" />
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
        />
        <Button onClick={handleClick} className="submit">
          提交
        </Button>
      </MarkDownWrapper>
    </>
  )
})

export default MackDown
