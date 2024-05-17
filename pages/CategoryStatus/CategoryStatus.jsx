import React, { useEffect, useState } from 'react';
import { Button, Select, Table, Modal } from 'antd';
import axios from 'axios';
import { render } from 'react-dom';

export default function CategoryStatus() {
  const [categoryName, setcategoryName] = useState('')
  const [categoryStatus, setcategoryStatus] = useState([])
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item) => {
    setIsModalOpen(true);
    setcategoryName(item.name);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    try {
      axios.post("http://localhost:7000/api/v1/category/categorystatus",{
        name:categoryName,
        status:categoryStatus
      })
    } catch (error) {
      
    }
  };
 
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value) => {
    setcategoryStatus(value)
  };

  const [fetchCategory, setfetchCategory] = useState([])
  useEffect(() => {
    const fetchGetCategoyr = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/allget/getAllCategory")
        setfetchCategory(response.data.CATEGORYS);
      } catch (error) {
        console.log(error, "CategoryStatus Page-");
      }
    }
    fetchGetCategoyr();
  }, [fetchCategory])

  const columns = [
    {
      title: 'Serial',
      dataIndex: 'Number',
      render: (_, record, index) => { return (index + 1) },
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
      render: (_, record) => <p>{record.isActive ? "Active" : "inActive"}</p>
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type="primary" onClick={(e) => showModal(record)}>
            Edit Status
          </Button>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p > {categoryName} Category</p>
            <Select
              defaultValue="give status"
              style={{
                width: 120,
              }}
              onChange={(e)=>handleChange(e)}
              options={[{
                value: 'waiting',
                label: 'waiting',
              },
              {
                value: 'approved',
                label: 'approved',
              },
              {
                value: 'rejected',
                label: 'rejected',
              },

              ]}
            />
          </Modal>


        </>
      )
    },

  ];

  return (
    < >
      <h5 >All Category Status</h5>
      <Table
        columns={columns}
        dataSource={fetchCategory}
      // bordered
      />
    </>
  )
}
