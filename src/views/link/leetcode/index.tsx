import type { FC } from 'react'
import { memo } from 'react'

interface IProps {}

const Note: FC<IProps> = memo(() => {
  return (
    <div className="card content-box">
      <span className="text">
        leetcode：
        <a href="https://leetcode.cn/u/codertao-n/" target="_blank" rel="noreferrer">
          https://leetcode.cn/u/codertao-n/
        </a>
        🍒🍉🍊
      </span>
    </div>
  )
})

export default Note
