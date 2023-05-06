import avatar from '@/assets/images/avatar.jpg'
import { HOME_URL } from '@/config/config'
import store from '@/store'
import { setTokenAction } from '@/store/modules/global'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, MenuProps, message, Modal } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const AvatarIcon: FC<IProps> = memo(() => {
  const navigate = useNavigate()

  /**
   * 退出登录
   */
  const logout = () => {
    Modal.confirm({
      title: '温馨提示 🧡',
      icon: <ExclamationCircleOutlined />,
      content: '是否确认退出登录？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        //* 使用useAppDispatch报错（暂时无法解决）
        store.dispatch(setTokenAction(''))
        message.success('退出登录成功！')
        navigate('/login')
      },
    })
  }

  /**
   * 下拉菜单展示的menu数据
   */
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate(HOME_URL),
    },
    {
      key: '2',
      label: <span className="dropdown-item">个人信息</span>,
      // onClick: () => infoRef.current!.showModal({ name: 11 }),
    },
    {
      key: '3',
      label: <span className="dropdown-item">修改密码</span>,
      // onClick: () => passRef.current!.showModal({ name: 11 }),
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ]

  return (
    <>
      <Dropdown menu={{ items }} trigger={['click']} arrow>
        <Avatar src={avatar} size="large" />
      </Dropdown>
    </>
  )
})

export default AvatarIcon
