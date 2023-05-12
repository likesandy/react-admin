import { RootState, useSelector } from '@/store'
import { Alert, Button, Col, Row, Space } from 'antd'
import type { FC, ReactNode } from 'react'
import { memo } from 'react'
import { ButtonViewWrapper } from './style'
import useAuthButtons from '@/hooks/useAuthButtons'

interface IProps {
  children?: ReactNode
}

const ButtonView: FC<IProps> = memo(() => {
  const { BUTTONS } = useAuthButtons()
  return (
    <ButtonViewWrapper className="card content-box">
      <span className="text">按钮权限 </span>
      <Alert message={`当前用户按钮权限：${JSON.stringify(Object.keys(BUTTONS))}`} />
      <Row className="row">
        {BUTTONS.add && <Button type="primary">新增</Button>}
        {BUTTONS.edit && <Button type="primary">修改</Button>}
        {BUTTONS.delect && <Button type="primary">删除</Button>}
        {BUTTONS.import && <Button type="primary">导入</Button>}
        {BUTTONS.export && <Button type="primary">导出</Button>}
      </Row>
    </ButtonViewWrapper>
  )
})

export default ButtonView
