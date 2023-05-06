import { HOME_URL } from '@/config/config'
import { RootState, useSelector } from '@/store'
import { Breadcrumb } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useLocation } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const BreadcrumbNav: FC<IProps> = memo(() => {
  const { pathname } = useLocation()
  const breadcrumbList = useSelector<any>((state: RootState) => state.breadcrumb.breadcrumbList)[
    pathname
  ]

  const themeConfig = useSelector((state: RootState) => state.global.themeConfig)
  return (
    <>
      {!themeConfig?.breadcrumb && (
        <div id="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item key="home" href={HOME_URL}>
              首页
            </Breadcrumb.Item>
            {breadcrumbList?.map((item: string) => {
              //* 这里使用null或者undefined
              //* 使用""会显示/
              return <Breadcrumb.Item key={item}>{item === '首页' ? null : item}</Breadcrumb.Item>
            })}
          </Breadcrumb>
        </div>
      )}
    </>
  )
})

export default BreadcrumbNav
