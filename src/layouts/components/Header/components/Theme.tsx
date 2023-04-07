import SwitchDark from '@/components/SwitchDark'
import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { setThemeConfig } from '@/store/global/reducer'
import { selectThemeConfig } from '@/store/global/selectState'
import { FireOutlined, SettingOutlined, SkinOutlined } from '@ant-design/icons'
import { Divider, Drawer, Switch } from 'antd'
import { FC, ReactNode, memo, useState } from 'react'

interface IProps {
  children?: ReactNode
}

const Theme: FC<IProps> = memo(() => {
  const [open, setOpen] = useState<boolean>(false)
  const onClose = () => {
    setOpen(false)
  }
  const themeConfig = useAppSelector(selectThemeConfig)
  const { collapsed, weakOrGray } = themeConfig
  const dispatch = useAppDispatch()

  const onChange = (checked: boolean, keyName: string) => {
    return dispatch(setThemeConfig({ ...themeConfig, [keyName]: !checked }))
  }

  const setWeakOrGray = (checked: boolean, theme: string) => {
    if (checked) return dispatch(setThemeConfig({ ...themeConfig, weakOrGray: theme }))
    dispatch(setThemeConfig({ ...themeConfig, weakOrGray: '' }))
  }

  return (
    <>
      <div>
        <SkinOutlined
          className="icon-style"
          onClick={() => {
            setOpen(true)
          }}
        />
        <Drawer title="布局设置" placement="right" onClose={onClose} open={open} closable={false}>
          {/* 全局主题 */}
          <Divider className="divider">
            <FireOutlined /> 全局主题
          </Divider>
          <div className="theme-item">
            <span>暗黑模式</span>
            <SwitchDark />
          </div>
          <div className="theme-item">
            <span>灰色模式</span>
            <Switch
              checked={weakOrGray === 'gray'}
              onChange={(e) => {
                setWeakOrGray(e, 'gray')
              }}
            />
          </div>
          <div className="theme-item">
            <span>色弱模式</span>
            <Switch
              checked={weakOrGray === 'weak'}
              onChange={(e) => {
                setWeakOrGray(e, 'weak')
              }}
            />
          </div>

          {/* 界面设置 */}
          <Divider className="divider">
            <SettingOutlined /> 界面设置
          </Divider>
          <div className="theme-item">
            <span>折叠菜单</span>
            <Switch
              checked={!collapsed}
              onChange={(e) => {
                onChange(e, 'collapsed')
              }}
            />
          </div>
          <div className="theme-item">
            <span>面包屑导航</span>
            <Switch
              onChange={(e) => {
                onChange(e, 'breadcrumb')
              }}
            />
          </div>
          <div className="theme-item">
            <span>标签栏</span>
            <Switch
              onChange={(e) => {
                onChange(e, 'tabs')
              }}
            />
          </div>
          <div className="theme-item">
            <span>页脚</span>
            <Switch
              onChange={(e) => {
                onChange(e, 'footer')
              }}
            />
          </div>
        </Drawer>
      </div>
    </>
  )
})

export default Theme
