
import { Button, Space, Table, Tag } from 'antd';
import { useEffect } from 'react';
const columns = [
  {
    title: 'Serial',
    dataIndex: 'number',
    key: 'number',
    render:(_id,record,index) =>{return (index+1)}
   
  },

  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p style={{color:'blue', fontWeight: 'bold'}}>{text}</p>,
  },
   {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Ram',
    dataIndex: 'ram',
    key: 'ram',
  },
 
  {
    title: 'Storage',
    dataIndex: 'storage',
    key: 'storage',
  },
 
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
 
  {
    title: 'Img',
    dataIndex: 'img',
    key: 'img',
  },
 
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
 
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
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
 
  
];
export default function AllVariant() {
  useEffect(()=>{

  }, )
  return (
    <>
    <h1 style={{margin: 10}}>All Variants</h1>
    <Table columns={columns} dataSource={data} />
    </>
  )
}
