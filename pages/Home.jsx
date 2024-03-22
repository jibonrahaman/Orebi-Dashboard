import { AppstoreOutlined} from '@ant-design/icons';
import { Menu, Row, Col,   } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Users', 'sub1', <AppstoreOutlined />, [
    getItem('Merchant', '/login'),
    getItem('Users', '2'),
     ]),
  {
    type: 'divider',
  },
  getItem('Product', 'sub2', <AppstoreOutlined />, [
    getItem('Add Product', '3'),
    getItem('All Product', '4'),
     ]),
  {
    type: 'divider',
  },
    getItem('Category', 'sub3', <AppstoreOutlined />, [
    getItem('Add Category', '5'),
    getItem('All Category', '6'),
     ]),
  {
    type: 'divider',
  },
    getItem('SubCategory', 'sub4', <AppstoreOutlined />, [
    getItem('Add SubCategory', '7'),
    getItem('All SubCategory', '8'),
     ]),
  {
    type: 'divider',
  },
 
];
export default function Home() {
  const navigate = useNavigate();
    const onClick = (e) => { 
        navigate(e.key)    
        console.log('click ', e);
      };
  return (
 <>
    <Row>
    <Col span={6} >
    <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    defaultSelectedKeys={['1']}
     mode="inline"
    items={items}
  />
  </Col>

    <Col span={18}>
     <Outlet/>
    </Col>
  </Row>
  </>
    
  )
}
