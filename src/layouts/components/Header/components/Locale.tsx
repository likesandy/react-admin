import { RootState, useAppDispatch, useSelector } from '@/store'
import { setLanguage } from '@/store/modules/global'
import { TranslationOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Locale: FC<IProps> = memo(() => {
  const language = useSelector((state: RootState) => state.global.language)
  const dispatch = useAppDispatch()
  const items: MenuProps['items'] = [
    {
      label: <div>简体中文</div>,
      onClick: () => dispatch(setLanguage('zh-cn')),
      key: '0',
      disabled: language === 'zh-cn',
    },
    {
      label: <div>English</div>,
      onClick: () => dispatch(setLanguage('en')),
      key: '1',
      disabled: language === 'en',
    },
  ]
  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']}>
        <TranslationOutlined className="icon-style" id="internationalization" />
      </Dropdown>
    </>
  )
})

export default Locale
