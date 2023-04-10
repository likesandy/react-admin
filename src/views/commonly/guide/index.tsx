import steps from '@/layouts/components/Header/steps'
import { Alert, Button, Tour } from 'antd'
import { FC, ReactNode, memo, useState } from 'react'

interface IProps {
  children?: ReactNode
}

const Guide: FC<IProps> = memo(() => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className="card content-box">
      <Alert
        message="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 Antd的Tour组件实现."
        style={{ width: '100%' }}
        type="warning"
      />
      <div style={{ margin: '15px auto' }}>
        <Button type="primary" onClick={() => setOpen(true)}>
          打开引导页 🤹‍♂️
        </Button>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={steps}
          placement="bottomLeft"
          arrow={false}
        />
      </div>
    </div>
  )
})

export default Guide
