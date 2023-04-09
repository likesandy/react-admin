import { HOME_URL } from '@/config/config'
import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { setTabsListAction } from '@/store/tabs/reducer'
import { selectTabsList } from '@/store/tabs/selectState'
import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, MenuProps } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  delTabs: (tabPath?: string) => void
}

const MoreButton: FC<IProps> = memo(({ delTabs }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const tabsList = useAppSelector(selectTabsList)
  const dispatch = useAppDispatch()

  // close multipleTab
  const closeMultipleTab = (tabPath?: string) => {
    const handleTabsList = tabsList.filter((item: Menu.MenuOptions) => {
      return item.path === tabPath || item.path === HOME_URL
    })
    dispatch(setTabsListAction(handleTabsList))
    tabPath ?? navigate(HOME_URL)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>关闭当前</span>,
      onClick: () => delTabs(pathname),
    },
    {
      key: '2',
      label: <span>关闭其它</span>,
      onClick: () => closeMultipleTab(pathname),
    },
    {
      key: '3',
      label: <span>关闭所有</span>,
      onClick: () => closeMultipleTab(),
    },
  ]
  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
        trigger={['click']}>
        <Button type="primary" size="small">
          更多 <DownOutlined />
        </Button>
      </Dropdown>
    </>
  )
})

export default MoreButton
