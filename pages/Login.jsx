
import {
    Alert,
    Button,
    Form,
    Input,
} from 'antd';
import { Card } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [Error , setError] = useState(false)
  const [Success , setSucces] = useState(false);
  const navigate = useNavigate();
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
    setSucces(response.data.success);
    setError(false)
    setTimeout (()=>{
navigate("/")
    }, 2000)
   }
    }
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
          <Button onClick={handleOnSubmit} type='primary'>Sign Up</Button>
      </Form>
  </Card>
    )
  }
  