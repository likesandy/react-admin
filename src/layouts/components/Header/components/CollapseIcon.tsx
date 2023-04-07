import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { setThemeConfig } from '@/store/global/reducer'
import { selectThemeConfig } from '@/store/global/selectState'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const CollapseIcon: FC<IProps> = memo(() => {
  const themeConfig = useAppSelector(selectThemeConfig)
  const { collapsed } = themeConfig
  const dispatch = useAppDispatch()
  return (
    <>
      <div
        className="collapsed"
        onClick={() => {
          dispatch(setThemeConfig({ ...themeConfig, collapsed: !collapsed }))
        }}>
        {collapsed ? <MenuFoldOutlined id="isCollapse" /> : <MenuUnfoldOutlined id="isCollapse" />}
      </div>
    </>
  )
})

export default CollapseIcon
