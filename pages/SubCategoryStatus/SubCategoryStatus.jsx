import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { render } from 'react-dom';
export default function SubCategoryStatus() {
 const [fetchSubCategory , setfetchSubCategory] = useState([])
  useEffect(()=>{
   const fetchGetCategoyr =async ()=>{
    try {
      const response = await axios.get("http://localhost:7000/api/v1/allget/getAllCategory")
      setfetchSubCategory(response.data.SUBCATEGORYS);
    } catch (error) {
       console.log(error,"CategoryStatus Page-");
    }
   }
   fetchGetCategoyr();
  }, [fetchSubCategory])

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
          render : (_,record)=> <p>{record.isActive ? "Active" : "inActive"}</p>
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
    dataSource={fetchSubCategory}
    bordered
  />
   </>
  )
}
