
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AllVariant() {
  const [variantData, setVariantData] = useState([]);

  // get all variant data fetching 
  useEffect(()=>{
  const fetchVariant = async ()=>{
    const response = await axios.get("http://localhost:7000/api/v1/allget/getvariant");
    setVariantData(response.data);
  }
  fetchVariant()
  }, [variantData])
  
  // show all fetching data serial by serial
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
      render: (_id,record,text) => <p style={{color:'blue', fontWeight: 'bold'}}>{record?.productId?.name}</p>,
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
      render : (_id,record) => (
        <img style={{ width: 100 }} src={record?.img}alt="img" />
      )
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
          <Button onClick={()=>handleDelete(record?._id)} type="primary" danger>Delete </Button>
        </Space>
      ),
    },
  ];

  // delete variant id 
 const handleDelete = async (id) =>{
  try {
    await axios.post("http://localhost:7000/api/v1/alldelete/variantDelete/",{
      id: id
    })
  } catch (error) {
   console.log(error); 
  }
 }
  return (
    <>
    <h1 style={{margin: 10}}>All Variants</h1>
    <Table 
    bordered  
      columns={columns} 
      dataSource={variantData} />
    </>
  )
}
