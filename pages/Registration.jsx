import { useState } from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';


export default function Registration() {
    const [componentDisabled, setComponentDisabled] = useState(true);
    return (
        <>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
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
                
            </Form>
        </>
    );


}
