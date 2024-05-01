import { useState } from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { Card } from 'antd';


export default function Registration() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const handleOnSubmit  = ()=>{
        console.log("okk");
    }
    return (
        <>
          <Card
    title="Registration"
    bordered={false}
    style={{
      width: 450,
      margin:"auto",
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
                
                <Form.Item name="First Name" label="First Name :"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input  name='firstname' />
                </Form.Item>
                <Form.Item name="Last Name" label="Last Name :"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item name="Email " label="Email : "
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input name='email' />
                </Form.Item>
                <Form.Item name="TelePhone " label="TelePhone :"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input name='telephone'/>
                </Form.Item>
                <Form.Item name="Password " label="Password :"
                    rules={[
                        {
                            required: true,
                        },
                    ]}>
                    <Input name='password' />
                </Form.Item>
                <Button onClick={handleOnSubmit} type='primary' >Sign Up</Button>
            </Form>
  </Card>
           
        </>
    );


}
