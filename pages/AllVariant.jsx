
import { Button, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
   
  },

  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
         <Button type="primary" >Edit</Button>
        <Button type="primary" danger>Delete </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function AllVariant() {
  return (
    <>
    <h1 style={{margin: 10}}>All Variants</h1>
    <Table columns={columns} dataSource={data} />
    </>
  )
}
