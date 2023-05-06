import SwitchDark from '@/components/SwitchDark'
import { RootState, useAppDispatch, useSelector } from '@/store'
import { setThemeConfig } from '@/store/modules/global'
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
  const themeConfig = useSelector((state: RootState) => state.global.themeConfig)
  const { collapsed, weakOrGray, footer, tabs, breadcrumb } = themeConfig
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
      <SkinOutlined
        className="icon-style"
        id="theme"
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
            checked={!breadcrumb}
            onChange={(e) => {
              onChange(e, 'breadcrumb')
            }}
          />
        </div>
        <div className="theme-item">
          <span>标签栏</span>
          <Switch
            checked={!tabs}
            onChange={(e) => {
              onChange(e, 'tabs')
            }}
          />
        </div>
        <div className="theme-item">
          <span>页脚</span>
          <Switch
            checked={!footer}
            onChange={(e) => {
              onChange(e, 'footer')
            }}
          />
        </div>
      </Drawer>
    </>
  )
})

export default Theme
