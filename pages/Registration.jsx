import { useEffect, useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import axios from 'axios';
import {
    Alert,
    Button,
    ConfigProvider,
    Flex,
    Form,
    Input,
} from 'antd';
import { Card } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const colors1 = ['#6253E1', '#04BEFE'];
const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());
export default function Registration() {
    const userData = useSelector (state => state.userLoginInfo.userInfo)
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [Error,setError] = useState(false);
    const [Succes,setSucces] = useState(false);
    const navigate = useNavigate();
    const [fromData, setfromData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        telephone: "",
        password: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setfromData({
            ...fromData, [name]: value
        })
    }
    const handleOnSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:7000/api/v1/authentication/signup", {
                Firstname: fromData.firstname,
                LastName: fromData.lastname,
                Email: fromData.email,
                MobileNumber: fromData.telephone,
                Password: fromData.password
            });
          if(response.data.error){
            setError(response.data.error)
            setSucces(false)
          }else{
            setSucces(response.data.success)
            setError(false)
          }
        } catch (error) {
            console.error(error);
        }
    };
    const handleOnNext = () =>{
        navigate("/login")
    }
     useEffect (()=>{
        if (userData != null){
            navigate('/')
        }
      }, [])

    return (
        <>
            <Card
                title="Registration"
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
                     { Succes &&  <Alert message={Succes} type="success" showIcon/>}
                     { Error &&  <Alert message={Error} showIcon type="error"/> }
                    <Form.Item name="First Name" label="First Name :"
                        rules={[
                            {
                                required: true,
                            },
                        ]}> <Input onChange={handleInputChange} name='firstname' /> </Form.Item>
                    <Form.Item name="Last Name" label="Last Name :"
                        rules={[
                            {
                                required: true,
                            },
                        ]}> <Input onChange={handleInputChange} name='lastname' /> </Form.Item>
                    <Form.Item name="Email " label="Email : "
                        rules={[
                            {
                                required: true,
                            },
                        ]}> <Input onChange={handleInputChange} name='email' /> </Form.Item>
                    <Form.Item name="TelePhone " label="TelePhone :"
                        rules={[
                            {
                                required: true,
                            },
                        ]}> <Input onChange={handleInputChange} name='telephone' />
                    </Form.Item>
                    
                    <Form.Item name="Password " label="Password :"
                        rules={[
                            {
                                required: true,
                            },
                        ]}> <Input onChange={handleInputChange} name='password' />
                    </Form.Item>
                   <Flex style={{justifyContent : 'space-between'}}>
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
    > <Button   onClick={handleOnNext} type="primary" >Login Page</Button>
    </ConfigProvider>
                    <Button onClick={handleOnSubmit} type='primary'>Sign Up</Button>
                   </Flex>
                </Form>
            </Card>

        </>
    );


}
