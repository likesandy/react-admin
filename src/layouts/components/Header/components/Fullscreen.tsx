import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { FC, ReactNode, memo, useEffect, useState } from 'react'
import screenfull from 'screenfull'

interface IProps {
  children?: ReactNode
}

const Fullscreen: FC<IProps> = memo(() => {
  const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen)

  useEffect(() => {
    const callback = () => {
      if (screenfull.isFullscreen) setFullScreen(true)
      else setFullScreen(false)
    }

    screenfull.on('change', callback)
    return () => screenfull.off('change', callback)
  }, [])

  const handleFullScreen = () => {
    if (!screenfull.isEnabled) message.warning('当前您的浏览器不支持全屏 ❌')
    screenfull.toggle()
  }
  return (
    <>
      <div className="icon-style" onClick={handleFullScreen} id="full-screen">
        {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
      </div>
    </>
  )
})

export default Fullscreen
