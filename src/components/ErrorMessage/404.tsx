import { HOME_URL } from '@/config/config'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ErrMessageWrapper } from './style'

const NotFound = () => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate(HOME_URL)
  }
  return (
    <ErrMessageWrapper>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={goHome}>
            Back Home
          </Button>
        }
      />
    </ErrMessageWrapper>
  )
}

export default NotFound
