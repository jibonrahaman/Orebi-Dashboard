import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
export default function CategoryStatus() {
 const [fetchCategory , setfetchCategory] = useState([])
  useEffect(()=>{
   const fetchGetCategoyr =async ()=>{
    try {
      const response = await axios.get("http://localhost:7000/api/v1/allget/getAllCategory")
      setfetchCategory(response.data.CATEGORYS);
    } catch (error) {
       console.log(error,"CategoryStatus Page-");
    }
   }
   fetchGetCategoyr();
  }, [])

    const columns = [
        {
          title: 'Serial',
          dataIndex: 'Number',
          render: (_,record,index) => {return (index+1)},
        },
        {
          title: 'Category Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'isActive',
          dataIndex: 'isActive',
          key: 'isActive',
        },
         {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        
      ];
     
  return (
   < >
   <h5 >All Category Status</h5>
   <Table
    columns={columns}
    dataSource={fetchCategory}
    bordered
  />
   </>
  )
}
