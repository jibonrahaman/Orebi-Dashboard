import { TinyColor } from '@ctrl/tinycolor';
import {
    Alert,
    Button,
    ConfigProvider,
    Flex,
    Form,
    Input,
} from 'antd';
import { Card } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoginInfo } from '../Redux/Slices/userSlices';
const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
export default function Login() {
    const userData = useSelector (state => state.userLoginInfo.userInfo)
    console.log(userData);
  const [Error , setError] = useState(false)
  const [Success , setSucces] = useState(false);
  const navigate = useNavigate();
  const dispatch =useDispatch();
 
  const [fromData , setfromData] = useState({
    email : "",
    password : ""
  })
  const handleInputChange = (e) =>{
    const {name,value} = e.target
   setfromData ( {
    ...fromData, [name] : value
   })
  }
  const handleOnSubmit = async ()=>{
    const response = await axios.post("http://localhost:7000/api/v1/authentication//login",{
      Email: fromData.email,
      Password : fromData.password
    })
   if(response.data.error){
    setError(response.data.error);
    setSucces(false)
   }else{
   if(response.data.role ==  "member"){
    setError("This admin panel is not for members");
   }else{
    setSucces(response.data.success);
    setError(false)
    dispatch(userLoginInfo(response.data))
    localStorage.setItem("userLoginInfo", JSON.stringify(userLoginInfo(response.data)))
    setTimeout (()=>{
   navigate("/")
    }, 2000)
   }
   }
    }
    const handleOnBack = () =>{
        navigate("/registration")
    }
    useEffect (()=>{
      
        if (userData != null){
            navigate('/')
        }
      },[])
   
    return (
      <Card
      title="Login"
      bordered={false}
      style={{
          width: 450,
          margin: "auto",
          marginTop: '20px'
      }}
  >
      
      <Form
          labelCol={{
              span: 24,
          }}
          wrapperCol={{
              span: 24,
          }}
          layout="vertical"
          style={{
              maxWidth: 600,
          }}
      >
           {Success &&   <Alert message={Success} type="success" showIcon/>}
           {Error &&   <Alert message={Error} type="error" showIcon/>}
           
                 
          <Form.Item name="Email " label="Email : "
              rules={[
                  {
                      required: true,
                  },
              ]}> <Input onChange={handleInputChange} name='email' /> </Form.Item>         
          
          <Form.Item name="Password " label="Password :"
              rules={[
                  {
                      required: true,
                  },
              ]}> <Input onChange={handleInputChange} name='password' />
          </Form.Item>
         <Flex style={{justifyContent: 'space-between'}}>         
        <ConfigProvider theme={{
        components: {
          Button: {
            colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
            colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
            colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
            lineWidth: 0,
          },
        },
      }}
    > <Button   onClick={handleOnBack} type="primary" > SignUp Page</Button>
    </ConfigProvider>
      <Button onClick={handleOnSubmit} type='primary'>Login </Button>
         </Flex>
      </Form>
  </Card>
    )
  }
  