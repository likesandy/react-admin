import { Button, DatePicker, Modal, Pagination, Popconfirm, Space, TimePicker } from 'antd'
import { FC, ReactNode, memo, useState } from 'react'

interface IProps {
  children?: ReactNode
}

const info = () => {
  Modal.info({
    title: 'some info',
    content: 'some info',
  })
}

const confirm = () => {
  Modal.confirm({
    title: 'some info',
    content: 'some info',
  })
}

const internationalization: FC<IProps> = memo(() => {
  const [open, setOpen] = useState(false)
  const { RangePicker } = DatePicker

  const modalClick = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  const handleOk = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="card content-box">
        <Modal title="Locale Modal" open={open} onCancel={handleCancel} onOk={handleOk}>
          <p>Locale Modal</p>
        </Modal>
        <Space direction="vertical">
          <Space wrap>
            <Pagination defaultCurrent={6} total={500} />
          </Space>
          <Space wrap>
            <RangePicker />
            <DatePicker />
            <TimePicker />
          </Space>
          <Space wrap>
            <Button type="primary" onClick={modalClick}>
              Show Modal
            </Button>
            <Button onClick={modalClick}>Show info</Button>
            <Button onClick={confirm}>Show confirm</Button>
            <Popconfirm title="Question?">
              <a href="#">Click to confirm</a>
            </Popconfirm>
          </Space>
        </Space>
      </div>
    </>
  )
})

export default internationalization
