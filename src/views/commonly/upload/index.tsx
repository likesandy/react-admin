import { PlusOutlined } from '@ant-design/icons'
import { message, Modal, ModalProps, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import React, { useState } from 'react'

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const uploadCommonly: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const onCancel = () => setPreviewOpen(false)

  const onPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewTitle(file.name || (file.url as string))
    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => setFileList(newFileList)

  const beforeUpload = (file: RcFile) => {
    const rules = /image\/*/
    const isImage = rules.test(file.type)
    const maxAge = 1024 * 1024 * 2

    if (!isImage) {
      message.error('只能上传图片')
    }

    if (file.size > maxAge) message.error('图片不能大于2M')
    return isImage || Upload.LIST_IGNORE
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上次图片</div>
    </div>
  )

  const uploadprops: UploadProps = {
    action: '#',
    listType: 'picture-card',
    fileList,
    onPreview,
    onChange,
    beforeUpload,
  }

  const modalProps: ModalProps = {
    title: previewTitle,
    footer: null,
    open: previewOpen,
    onCancel,
  }

  return (
    <>
      <Upload {...uploadprops}>{fileList.length >= 8 ? null : uploadButton}</Upload>
      <Modal {...modalProps}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
}

export default uploadCommonly
