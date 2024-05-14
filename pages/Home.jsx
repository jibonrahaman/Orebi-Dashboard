import { UsergroupAddOutlined,ProductOutlined,MenuUnfoldOutlined,PicCenterOutlined} from '@ant-design/icons';
import { Menu, Row, Col,   } from 'antd';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Home() {
  const userData = useSelector(state => state.userLoginInfo.userInfo)
  useEffect(()=>{      
    if (!userData){
        navigate('/login')
    }
  },[])
  const navigate = useNavigate();
    const onClick = (e) => { 
        navigate(e.key)    
        console.log('click ', e);
      };
         
         // outlet 
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
        userData?.role == "admin" && 
        getItem('Users', 'sub1', <UsergroupAddOutlined />, [
          getItem('Merchant', '/login'),
          getItem('Users', '2'),
           ]),
        {
          type: 'divider',
        },
        getItem('Product', 'sub2', <ProductOutlined />, [
          getItem('Add Product', '/addproduct'),
          getItem('All Product', '/allproduct'),
          getItem('All Variant', '/allvariant'),
           ]),
        {
          type: 'divider',
        },
          getItem('Category', 'sub3', <MenuUnfoldOutlined />, [
          getItem('Add Category', '/addcategory'),
          getItem('All Category', '/allcategory'),
           ]),
        {
          type: 'divider',
        },
          getItem('SubCategory', 'sub4', <PicCenterOutlined />, [
          getItem('Add SubCategory', '/addsubcategory'),
          getItem('All SubCategory', '/allsubcategory'),
           ]),
        {
          type: 'divider',
        }, 
         getItem('Category Status', 'sub5', <PicCenterOutlined />, [
          getItem('Category Status', '/categorystatus'),
          getItem(' SubCategory Status', '8'),
           ]),
        {
          type: 'divider',
        },
       
      ];

  return (
 <>
    <Row style={{marginTop:30}}>
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

    <Col style={{marginTop:-40}} span={16}>
     <Outlet/>
    </Col>
  </Row>
  </>
    
  )
}
