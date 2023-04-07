import { useAppSelector } from '@/hooks/useStote'
import { setThemeConfig } from '@/store/global/reducer'
import { selectThemeConfig } from '@/store/global/selectState'
import { Switch } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useDispatch } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const SwitchDark: FC<IProps> = memo(() => {
  const themeConfig = useAppSelector(selectThemeConfig)
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
