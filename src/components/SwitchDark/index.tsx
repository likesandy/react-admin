import { RootState, useSelector } from '@/store'
import { setThemeConfig } from '@/store/modules/global'
import { Switch } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const SwitchDark: FC<IProps> = memo(() => {
  const themeConfig = useSelector((state: RootState) => state.global.themeConfig)
  const dispath = useDispatch()
  const onChange = (checked: boolean) => {
    dispath(setThemeConfig({ ...themeConfig, isDark: checked }))
  }
  return (
    <>
      <Switch
        checkedChildren={<>🌞</>}
        unCheckedChildren={<>🌜</>}
        className="dark"
        defaultChecked={themeConfig.isDark}
        onChange={onChange}
      />
    </>
  )
})

export default SwitchDark
