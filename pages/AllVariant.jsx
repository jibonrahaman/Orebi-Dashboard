
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
    render:(_id,record)=> console.log(render); 
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
  const [variantData, setVariantData] = useState([]);

  useEffect(()=>{
  const fetchVariant = async ()=>{
    const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct");
    setVariantData(response.data);
  }
  fetchVariant()
  }, [])
  return (
    <>
    <h1 style={{margin: 10}}>All Variants</h1>
    <Table columns={columns} dataSource={variantData} />
    </>
  )
}
