import { HOME_URL } from '@/config/config'
import { useAppDispatch, useAppSelector } from '@/hooks/useStote'
import { routerArray } from '@/routers'
import { setTabsListAction } from '@/store/tabs/reducer'
import { selectTabsList } from '@/store/tabs/selectState'
import { searchRoute } from '@/utils/utils'
import { HomeFilled, HomeOutlined } from '@ant-design/icons'
import { message, Tabs } from 'antd'
import { FC, memo, ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LayoutTabsWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const LayoutTabs: FC<IProps> = memo(() => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    addTabs()
  }, [pathname])

  const tabsList = useAppSelector(selectTabsList)
  const dispatch = useAppDispatch()

  // add tabs
  const addTabs = () => {
    const route = searchRoute(pathname, routerArray)
    let newTabsList = JSON.parse(JSON.stringify(tabsList))
    if (tabsList.every((item: any) => item.path !== route.path)) {
      newTabsList.push({ title: route.meta!.title, path: route.path })
    }
    dispatch(setTabsListAction(newTabsList))
  }

  /**
   * @desc tabs被点击
   */
  const onTabClick = (path: string) => {
    if (path === pathname) return
    navigate(path)
  }

  /**
   * @desc 删除选中的tab
   * @param tabPath
   * @returns
   */
  const delTabs = (tabPath?: string) => {
    if (tabPath === HOME_URL) return
    if (pathname === tabPath) {
      tabsList.forEach((item: Menu.MenuOptions, index: number) => {
        if (item.path !== pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.path)
      })
    }
    dispatch(setTabsListAction(tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath)))
  }

  return (
    <LayoutTabsWrapper>
      <Tabs
        animated
        hideAdd
        activeKey={pathname}
        type="editable-card"
        onTabClick={onTabClick}
        onEdit={(path) => {
          delTabs(path as string)
        }}
        items={tabsList.map((item: Menu.MenuOptions) => {
          return {
            label: (
              <span>
                {item.path == HOME_URL ? <HomeFilled /> : ''}
                {item.title}
              </span>
            ),
            key: item.path,
            closable: item.path !== HOME_URL,
          }
        })}
      />
    </LayoutTabsWrapper>
  )
})

export default LayoutTabs
