import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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
  getItem('Users', 'sub2', <AppstoreOutlined />, [
    getItem('Merchant', '1'),
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
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
     ]),
  {
    type: 'divider',
  },
 
];
export default function Home() {
    const onClick = (e) => {
        console.log('click ', e);
      };
  return (
    <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    defaultSelectedKeys={['1']}
    
    mode="inline"
    items={items}
  />
  )
}
