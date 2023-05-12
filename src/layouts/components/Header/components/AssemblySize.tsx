import { RootState, useSelector } from '@/store'
import { ColumnHeightOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { setAssemblySize } from '@/store/modules/global'

interface IProps {
  children?: ReactNode
}

const AssemblySize: FC<IProps> = memo(() => {
  const assemblySize = useSelector((state: RootState) => state.global.assemblySize)
  const dispatch = useDispatch()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '默认',
      disabled: assemblySize === 'middle',
      onClick: () => dispatch(setAssemblySize('middle')),
    },
    {
      key: '2',
      label: '大型',
      disabled: assemblySize === 'large',
      onClick: () => dispatch(setAssemblySize('large')),
    },
    {
      key: '3',
      label: '小型',
      disabled: assemblySize === 'small',
      onClick: () => dispatch(setAssemblySize('small')),
    },
  ]
  return (
    <>
      <div>
        <Dropdown menu={{ items }} trigger={['click']}>
          <ColumnHeightOutlined className="icon-style" id="component-size" />
        </Dropdown>
      </div>
    </>
  )
})

export default AssemblySize
