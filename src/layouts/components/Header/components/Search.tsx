import { SearchOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import { FC, useState } from 'react'

const HeaderSearch: FC = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <SearchOutlined style={{ fontSize: '20px' }} />
      <Select
        showSearch
        disabled
        placeholder="Select a person"
        optionFilterProp="children"
        options={[]}
        className={isShow ? 'show' : ''}
      />
    </>
  )
}
export default HeaderSearch
