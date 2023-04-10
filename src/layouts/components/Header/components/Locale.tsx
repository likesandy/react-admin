import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { setLanguage } from '@/store/global/reducer'
import { selectLanguage } from '@/store/global/selectState'
import { TranslationOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'

interface IProps {
  children?: ReactNode
}

const Locale: FC<IProps> = memo(() => {
  const language = useAppSelector(selectLanguage)
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
