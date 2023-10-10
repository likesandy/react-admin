import { Login } from '@/api/interface'
import { postLogin } from '@/api/modules/login'
import { HOME_URL } from '@/config/config'
import { useAppDispatch } from '@/store'
import { setTokenAction } from '@/store/modules/global'
import { setTabsListAction } from '@/store/modules/tabs'

import { CloseCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, message } from 'antd'
import { FC, ReactNode, memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const LoginForm: FC<IProps> = memo(() => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  // 登录
  const onFinish = async (loginForm: Login.ReqLoginForm) => {
    try {
      setLoading(true)
      // loginForm.password = md5(loginForm.password)
      const { token } = await postLogin(loginForm)
      dispatch(setTokenAction(token))
      dispatch(setTabsListAction([]))
      navigate(HOME_URL)
      message.success('登录成功！')
    } finally {
      setLoading(false)
    }
  }

  const { t } = useTranslation()

  return (
    <>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 5 }}
        // initialValues={{ username: 'admin', password: '123456' }}
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
          <Button
            onClick={() => {
              form.resetFields()
            }}
            icon={<CloseCircleOutlined />}>
            {t('login.reset')}
          </Button>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {t('login.confirm')}
          </Button>
        </Form.Item>
      </Form>
    </>
  )
})

export default LoginForm
