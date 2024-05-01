import { useState } from 'react';
import axios from 'axios';
import {
    Alert,
    Button,
    Form,
    Input,
} from 'antd';
import { Card } from 'antd';


export default function Registration() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const [Error,setError] = useState(false);
    const [Succes,setSucces] = useState(false);
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
                    <Button onClick={handleOnSubmit} type='primary'>Sign Up</Button>
                </Form>
            </Card>

        </>
    );


}
