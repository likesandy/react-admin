import { HOME_URL } from '@/config/config'
import { useAppDispatch } from '@/hooks/useStote'
import { Login } from '@/service/interface'
import { postLogin } from '@/service/modules/login'
import { setTokenAction } from '@/store/global/reducer'
import { setTabsListAction } from '@/store/tabs/reducer'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const LoginForm: FC<IProps> = memo(() => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onFinish = async (loginForm: Login.ReqLoginForm) => {
    setLoading(true)
    try {
      const { data } = await postLogin(loginForm)
      dispatch(setTokenAction(data?.token))
      dispatch(setTabsListAction([]))
      navigate(HOME_URL)
      message.success('登录成功！')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 5 }}
        initialValues={{ username: 'admin', password: '123456' }}
        size="large"
        autoComplete="off"
        onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password placeholder="密码：123456" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item className="login-btn">
          <Button type="primary" htmlType="submit" loading={loading} block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  )
})

export default LoginForm
