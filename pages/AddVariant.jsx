import { Button, Input, Select } from 'antd'
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

    const [productData, setProductData] = useState([]);
    const [addProduct , setaddProduct] = useState([]);
    useEffect(() => {
      const fetchProduct = async () => {
        try {
            const arr = []
          const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct")
        response.data.map((item)=>{           
            arr.push({
                value:item._id,
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

    const [variantData,setVariantData] = useState({
        color : '',
        ram : "" ,
        storage : "",
        size : "",
        price: "",
        quantity : ""
    });
   console.log(variantData);
   const handleInputChange = ()=>{
    
   }
    return (
        <div style={{width:800}}>
            <h3>Product Name : </h3>
            <Select
            placeholder="select product"
                //  onChange={(e)=>setStoreName(e)}
                mode="single"
                tagRender={tagRender}
                style={{
                    width: '100%',
                }}
            options={addProduct}
            />
            <h3>Variant Color :</h3>
            <Input onChange={handleInputChange} name='color' placeholder='color' />
            <h3>Variant Ram :</h3>
            <Input onChange={handleInputChange} name='ram' placeholder='ram' />
              <h3>Variant Storage/Rom :</h3>
            <Input onChange={handleInputChange} name='storage' placeholder='rom/storage' /> 
             <h3>Variant Size :</h3>
            <Input onChange={handleInputChange} name='size' placeholder='size' />
            <h3>Variant Price :</h3>
            <Input onChange={handleInputChange} name='price' placeholder='price' />
            <h3>Variant Quantity :</h3>
            <Input onChange={handleInputChange} name='quantity' placeholder='quantity' />
            <h3>Variant Image :</h3>
            <Input onChange={handleInputChange}  type='file' placeholder='give me img ' />
            <Button type='primary' style={{marginTop: 20}}>Create Variant</Button>
        </div>
    )
}
