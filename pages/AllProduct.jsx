import { Space, Table,Button} from 'antd';
import axios from 'axios'; // Make sure to import axios
import { useEffect , useState} from 'react';

const handleDelete = async (id) => {
      try {
      await axios.post(`http://localhost:7000/api/v1/alldelete/productDelete/`,{
       id:id
      })           
      } catch (error) {
        console.error('Error occurred while deleting product:', error);
      }
    };


const columns = [
  {
    title: 'Serial Number',
     dataIndex: 'index',
     key: 'index',
     render: (_,record,index) =>{return index+1},
   },
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    render: (_,record) =><p>{record.name}</p>,
  },
 
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (_, record) => (
        <img style={{width:60}} src="https://istockbd.com/cdn/shop/products/Apple-iPad-Pro-12.9-inch-M2-Space-Gray.jpg?v=1667539967&width=600" alt="image" />
      ),
  },
  {
    title: 'Store Name',
    dataIndex: 'Store',
    key: 'Store',
    render:(_,record) => <p>{record.Store?.storeName}</p>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
            <Space size="middle">
       <Button type="primary" >Edit</Button>
       <Button onClick={()=>handleDelete(record._id)} type="primary" danger>Delete </Button>
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
export default function AllProduct() {

const [productData,setProductData] = useState([]);
 useEffect(()=>{
   const fetchData = async ()=>{
    try {
    const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct")
    setProductData(response.data)
    } catch (error) {
      console.log("Error Fethcing Product Data",error);
    }
   }
   fetchData()
 },[productData])



  return (
    <div>
      <Table columns={columns} dataSource={productData} />
    </div>
  )
}
