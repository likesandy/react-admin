import { RootState, useAppDispatch, useSelector } from '@/store'
import { setThemeConfig } from '@/store/modules/global'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const CollapseIcon: FC<IProps> = memo(() => {
  const themeConfig = useSelector((state: RootState) => state.global.themeConfig)
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
