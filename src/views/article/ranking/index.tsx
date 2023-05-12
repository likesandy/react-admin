import { Card, Checkbox, Table } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { ColumnsType } from 'antd/es/table'
import { FC, ReactNode, memo, useState } from 'react'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const CheckboxGroup = Checkbox.Group
const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
]

const data: DataType[] = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  })
}

const Ranking: FC<IProps> = memo(() => {
  const [indeterminate, setIndeterminate] = useState(true)
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList)
  const [checkAll, setCheckAll] = useState(false)

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : [])
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }
  return (
    <RankingWrapper className="content-box">
      <Card className="table-card">
        <span>动态展示</span>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange}>
          Check all
        </Checkbox>
        <CheckboxGroup options={plainOptions} value={checkedList} />
      </Card>
      <Card>
        <Table columns={columns} dataSource={data} bordered />
      </Card>
    </RankingWrapper>
  )
})

export default Ranking
