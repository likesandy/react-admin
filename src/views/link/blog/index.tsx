import type { FC } from 'react'
import { memo } from 'react'

interface IProps {}

const Note: FC<IProps> = memo(() => {
  return (
    <div className="card content-box">
      <span className="text">
        blog：
        <a href="https://codertao.notion.site/ilun-44ab5696061949129c63ded554abb88e" target="_blank" rel="noreferrer">
          https://codertao.notion.site/ilun-44ab5696061949129c63ded554abb88e
        </a>
        🍒🍉🍊
      </span>
    </div>
  )
})

export default Note
