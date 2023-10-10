import { getMenuList } from '@/api/modules/login'

import { findAllBreadcrumb, getOpenKeys, searchRoute } from '@/utils/utils'
import * as Icons from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from './components/Logo'
import { MenuWrapper } from './style'
import { RootState, useAppDispatch, useSelector } from '@/store'
import { setBreadcrumbListAction } from '@/store/modules/breadcrumb'
import { setMenuListAction } from '@/store/modules/menu'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}
interface IProps {
  children?: ReactNode
}

const LayoutMenu: FC<IProps> = () => {
  const [menuList, setMenuList] = useState<any[]>([])

  /**
   * 动态渲染 Icon 图标
   */
  const customIcons: { [key: string]: any } = Icons
  const addIcon = (name: string) => {
    return React.createElement(customIcons[name])
  }

  // 处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
    menuList.forEach((item: Menu.MenuOptions) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length)
        return newArr.push(getItem(item.title, item.path, item.icon && addIcon(item.icon)))
      newArr.push(
        getItem(
          item.title,
          item.path,
          item.icon && addIcon(item?.icon),
          deepLoopFloat(item.children),
        ),
      )
    })
    return newArr
  }

  // 点击当前菜单跳转页面
  const navigate = useNavigate()
  const storeMenuList = useSelector((state: RootState) => state.menu.menuList)
  const clickMenu: MenuProps['onClick'] = ({ key }: { key: string }) => {
    const route = searchRoute(key, storeMenuList)
    if (route.isLink) window.open(route.isLink, '_blank')
    navigate(key)
  }

  const dispatch = useAppDispatch()
  const getMenuData = async () => {
    const data = await getMenuList()
    console.log('🚀 ~ file: index.tsx:69 ~ getMenuData ~ data:', data)
    if (!data) return
    setMenuList(deepLoopFloat(data))
    // 存储处理过后的所有面包屑导航栏到 redux 中
    dispatch(setBreadcrumbListAction(findAllBreadcrumb(data)))
    dispatch(setMenuListAction(data))
  }
  useEffect(() => {
    getMenuData()
  }, [])

  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname])

  /**
   * 刷新页面菜单状态不变
   */
  const { collapsed } = useSelector((state: RootState) => state.global.themeConfig)
  useEffect(() => {
    setSelectedKeys([pathname])
    !collapsed ? '' : setOpenKeys(getOpenKeys(pathname))
  }, [pathname, collapsed])

  const [openKeys, setOpenKeys] = useState<string[]>([])
  /**
   * @desc SubMenu 展开/关闭的回调
   * @param openKeys
   * @returns
   */
  const onOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys)

    // 针对多层menu
    const latestOpenKey = openKeys.at(-1)!
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
    setOpenKeys([latestOpenKey])
  }

  return (
    <MenuWrapper>
      <Logo isCollapse={!collapsed} />
      <Menu
        mode="inline"
        theme="dark"
        triggerSubMenuAction="click"
        items={menuList}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={clickMenu}
      />
    </MenuWrapper>
  )
}

export default LayoutMenu
