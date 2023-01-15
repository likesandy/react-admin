import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { selectCollapsed } from '@/store/menu/selectState'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { setCollapsedAction } from '@/store/menu/reducer'

interface IProps {
  children?: ReactNode
}

const CollapseIcon: FC<IProps> = memo(() => {
  const isCollapsed = useAppSelector(selectCollapsed)
  const dispatch = useAppDispatch()
  return (
    <>
      <div
        className="collapsed"
        onClick={() => {
          dispatch(setCollapsedAction(!isCollapsed))
        }}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </>
  )
})

export default CollapseIcon
