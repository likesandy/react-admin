import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DataVisualizeWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const DataVisualize: FC<IProps> = memo(() => {
  return (
    <DataVisualizeWrapper className="card content-box">
      <div>DataVisualize</div>
    </DataVisualizeWrapper>
  )
})

export default DataVisualize
