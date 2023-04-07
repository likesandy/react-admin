import type { FC } from 'react'
import { memo } from 'react'

interface IProps {}

const Note: FC<IProps> = memo(() => {
  return (
    <div className="card content-box">
      <span className="text">
        Github：
        <a href="https://github.com/likesandy" target="_blank" rel="noreferrer">
          https://github.com/likesandy
        </a>
        🍒🍉🍊
      </span>
    </div>
  )
})

export default Note
