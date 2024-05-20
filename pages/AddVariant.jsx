import { Alert, Button, Input, Select } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddVariant() {
    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginInlineEnd: 4,
                }}
            >
                {label}
            </Tag>
        );
    };

    const [imgs, setImg] = useState("");
    const [productData, setProductData] = useState([]);
    const [productName, setProductName] = useState("");
    const [addProduct, setaddProduct] = useState([]);
    const [alertSuccess,setAlertSuccess] = useState(false)
    const [Error,setError] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const arr = []
                const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct")
                response.data.map((item) => {
                    arr.push({
                        value: item._id,
                        label: item.name
                    })
                })
                setaddProduct(arr)
            } catch (error) {
                console.log("Error Fethcing Product Data", error);
            }
        }
        fetchProduct()
    }, [productData])

    const [variantData, setVariantData] = useState({
        color: '',
        ram: "",
        storage: "",
        size: "",
        price: "",
        quantity: ""
    });

    const handleInputChange = (e) => {
        setVariantData({ ...variantData, [e.target.name]: e.target.value })
    }
    const handleImg = (e) => {
        setImg(e.target.files[0]);
    }

    const handleCreateVariant = async () => {
        try {
           const response= await axios.post("http://localhost:7000/api/v1/become/createVariant", {
                ram: variantData.ram,
                storage: variantData.storage,
                color: variantData.color,
                price: variantData.price,
                size: variantData.size,
                quantity: variantData.quantity,
                img: imgs,
                productId: productName
            },
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                })
                setVariantData({
                    color: '',
                    ram: "",
                    storage: "",
                    size: "",
                    price: "",
                    quantity: ""
                });
                setProductName("");
                setAlertSuccess(true)
                setAlertSuccess(response.data.message);
             
        } catch (error) {
            if ( error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError(error.response.data);
            }
            setTimeout(() => {
                setError("");
            }, 2000);        
        }
     // Hide the alert after 1 second
     setTimeout(() => {
        setAlertSuccess(false);
    }, 1500);
    }
    return (
      <>
{ alertSuccess &&  <Alert style={{marginTop: 30}} message={alertSuccess} type="success" showIcon /> }
{Error && <Alert style={{marginTop: 30,width: 800}} message={Error} type="error" showIcon/> }

        <div style={{ width: 800 }}>                      
            <h3>Product Name : </h3>
            <Select
                placeholder="select product"
                onChange={(e) => setProductName(e)}
                mode="single"
                value={productName}
                tagRender={tagRender}
                style={{
                    width: '100%',
                }}
                options={addProduct}
            />
            <h3>Variant Color :</h3>
            <Input onChange={handleInputChange} value={variantData.color} name='color' placeholder='color' />
            <h3>Variant Ram :</h3>
            <Input onChange={handleInputChange} value={variantData.ram} name='ram' placeholder='ram' />
            <h3>Variant Storage/Rom :</h3>
            <Input onChange={handleInputChange} value={variantData.storage} name='storage' placeholder='rom/storage' />
            <h3>Variant Size :</h3>
            <Input onChange={handleInputChange} value={variantData.size} name='size' placeholder='size' />
            <h3>Variant Price :</h3>
            <Input onChange={handleInputChange} value={variantData.price} name='price' placeholder='price' />
            <h3>Variant Quantity :</h3>
            <Input onChange={handleInputChange} value={variantData.quantity} name='quantity' placeholder='quantity' />
            <h3>Variant Image :</h3>
            <Input onChange={handleImg}  type='file' placeholder='give me img ' />
            <Button onClick={handleCreateVariant} type='primary' style={{ marginTop: 20 }}>Create Variant</Button>
        </div>
      </>
    )
}
