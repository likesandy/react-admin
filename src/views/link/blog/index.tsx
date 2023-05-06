import type { FC } from 'react'
import { memo } from 'react'

interface IProps {}

const Note: FC<IProps> = memo(() => {
  return (
    <div className="card content-box">
      <span className="text">
        blog：
        <a href="https://codertao.icu" target="_blank" rel="noreferrer">
          https://codertao.icu
        </a>
        🍒🍉🍊
      </span>
    </div>
  )
})

export default Note
