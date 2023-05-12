import { FC, ReactNode, memo, useState } from 'react'
import MarkDown from './components/MarkDown'

interface IProps {
  children?: ReactNode
}

const CreateArticle: FC<IProps> = memo(() => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState({})
  return (
    <>
      <div className="card content-box">
        <MarkDown title={title} detail={detail} />
      </div>
    </>
  )
})

export default CreateArticle
